<template>
  <div class="container" :style="`background-position-x: ${containerBgX}%;transition: background ${containerBgDuration}s;`">
    <div class="swiper-container my-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in appsList" :key="index">
          <div class="grid-box">
            <component :is="app.component" :app="app" v-for="app in item" :key="app.id" :style="app.style" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <Dock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dock from '@/components/Dock/index.vue'
import useAppList from './hooks/useAppList'
import useSwiper from './hooks/useSwiper'

export default defineComponent({
  components: {
    Dock
  },
  setup() {
    const { appsList } = useAppList()
    const { containerBgX, containerBgDuration } = useSwiper()

    return {
      appsList,
      containerBgX,
      containerBgDuration
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
})
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  background: url(https://z3.ax1x.com/2021/04/28/gPPUFx.jpg) no-repeat;
  background-size: cover;
  overflow: auto;
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
</style>
