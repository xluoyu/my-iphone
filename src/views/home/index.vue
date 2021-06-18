<template>
  <div class="container" :style="`background-position-x: ${containerBgX}%;transition: background ${containerBgDuration}s;`">
    <div class="closeHandle" @touchend="closeDarg" v-if="appDragStatus">完成</div>
    <div class="swiper-container my-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in appsList" :key="index" @dragover="(e) => e.preventDefault()">
          <div class="grid-box">
            <HandleApp v-for="app in item" :key="app.key" :style="app.style" :app="app">
              <component :is="app.component" :app="app" />
            </HandleApp>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <Dock />
  </div>
</template>

<script lang="ts" setup>
import Dock from '@/components/Dock/index.vue'
import { computed, nextTick, watch } from 'vue'
import HandleApp from './components/handleApp.vue'
import useAppList from './hooks/useAppList'
import useSwiper from './hooks/useSwiper'
import { useStore } from 'vuex'

const { appsList } = useAppList()
const { containerBgX, containerBgDuration, swiperMain } = useSwiper()

watch(appsList, () => {
  // 更新swiper
  nextTick(() => {
    swiperMain.value?.update()
  })
})

const store = useStore()

const appDragStatus = computed(() => store.state.appDragStatus)
const closeDarg = () => {
  store.commit('changeAppDragStatus', false)
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  background: url(https://z3.ax1x.com/2021/04/28/gPPUFx.jpg) no-repeat;
  background-size: cover;
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
}
.my-swipe{
  height: calc(100% - 80px);
  .swiper-slide{
    box-sizing: border-box;
    padding: @gridColGap @gridColGap 24px;
    .grid-box{
      width: 100%;
      height: 100%;
      display: grid;
      grid-gap: @gridRowGap @gridColGap;
      grid-template-columns: repeat(4, @appWidth);
      grid-template-rows: repeat(auto-fill, @appHeight);
      grid-auto-flow: dense;
    }
  }
}
::v-deep(.swiper-pagination-bullet){
  background: rgba(0, 0, 0, .6);
}
::v-deep(.swiper-pagination-bullet-active){
  background: rgba(255, 255, 255, .8);
}
::v-deep(.swiper-pagination){
  height: 24px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.closeHandle{
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 10;
  font-size: 14px;
  background: rgba(255, 255, 255, .3);
  color: #fff;
  width: 60px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}
</style>
