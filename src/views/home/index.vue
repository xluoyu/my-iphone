<template>
  <div
    class="container"
    :style="`background-position-x: ${containerBgX}%;transition: background ${containerBgDuration}s;`"
  >
    <div class="closeHandle" @click="closeDarg" v-if="dragStatus">完成</div>
    <div class="swiper-container my-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in appsList" :key="index">
          <div class="grid-box" @click.self="closeDarg">
            <HandleApp v-for="app in item" :key="app.key" :style="app.style" :app="app" :data-id="app.key">
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

<script lang="ts">
import Dock from '@/components/Dock/index.vue'
import { defineComponent, nextTick, watch, onMounted } from 'vue'
import HandleApp from './components/handleApp.vue'
import useAppList from './hooks/useAppList'
import useSwiper from './hooks/useSwiper'
import { useAppDragStatus } from './hooks/useAppDragStatus'
import useAppDrag from './hooks/useAppDrag'

export default defineComponent({
  name: 'Home',
  components: {
    Dock,
    HandleApp
  },
  setup() {
    const { dragStatus, changeDragStatus } = useAppDragStatus()

    const { appsList } = useAppList()
    const { containerBgX, containerBgDuration, swiperMain } = useSwiper()

    const closeDarg = () => {
      if (dragStatus.value == false) return
      changeDragStatus()
    }

    onMounted(() => {
      useAppDrag('.grid-box')
    })
    // watch(dragStatus, () => {
    //   if (dragStatus.value) useAppDrag('.grid-box')
    // })

    /**
     * 监听applist变动
     */
    watch(appsList.value, () => {
      // 更新swiper
      nextTick(() => {
        swiperMain.value?.update()
      })
    })

    return {
      appsList,
      containerBgX,
      containerBgDuration,
      closeDarg,
      dragStatus
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url(https://xluoyu.github.io/image-riverbed/iphone/background/background.jpg) no-repeat;
  background-size: cover;
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
}
.my-swipe {
  height: calc(100% - 80px);
  .swiper-slide {
    box-sizing: border-box;
    padding: var(--grid-col-gap) var(--grid-col-gap) 24px;
    .grid-box {
      width: 100%;
      height: 100%;
      display: grid;
      grid-gap: var(--grid-row-gap) var(--grid-col-gap);
      grid-template-columns: repeat(4, var(--app-width));
      grid-template-rows: repeat(auto-fill, var(--app-height));
      grid-auto-flow: dense;
    }
  }
}
::v-deep(.swiper-pagination-bullet) {
  background: rgba(0, 0, 0, 0.6);
}
::v-deep(.swiper-pagination-bullet-active) {
  background: rgba(255, 255, 255, 0.8);
}
::v-deep(.swiper-pagination) {
  height: 24px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.closeHandle {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 10;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 60px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.box-ghost{
  opacity: .3
}
</style>
