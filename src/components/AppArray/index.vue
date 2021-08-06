<template>
  <transition name="appArray" @before-enter="beforeEnter" @after-leave="afterLeave">
    <div class="app-array" v-if="show && currentApp">
      <!-- <div class="app-array-bg" @click.self="closeArray"></div> -->
      <input type="text" v-model="currentApp.name" class="box-title">
      <div class="app-box">
        <App v-for="item in currentApp.children" :key="item.key" :app="item" />
      </div>
    </div>
  </transition>
  <div class="app-array-bg" v-if="show && currentApp" @click.self="closeArray"></div>
</template>

<script lang="ts">
import { useCurrentAppArray } from '@/hooks/useApp'
import { computed, defineComponent } from 'vue'
import App from '@/components/App/index.vue'
import { getVar } from '@/utils'

export default defineComponent({
  components: {
    App
  },
  setup() {
    const { currentApp, changeCurrentApp } = useCurrentAppArray()

    const closeArray = () => {
      changeCurrentApp(null)
    }

    let rootWidth = document.documentElement.offsetWidth
    let rootHeight = document.documentElement.offsetHeight

    const show = computed(() => Boolean(currentApp))

    let appEl:Element | null = null

    const beforeEnter = (el: Element) => {
      let appKey = currentApp.value?.key
      appEl = document.querySelector('#' + appKey) as Element
      let { top, left, width, height } = appEl.getBoundingClientRect()
      console.log(appKey, { top, left, width, height })
      // 偏移量，存在原因： 最后消失时为scale(0.2)，导致不同位置的box缩小后位置不同，会有差异
      let deviationX = (left - rootWidth / 2) * 0.15
      let deviationY = (top - rootHeight / 2) * 0.15
      let transformTop = top + height / 2 - rootHeight * 0.16 + deviationY
      let transformLeft = left + width / 2 - rootWidth * 0.1 + deviationX

      transformTop = Number(transformTop.toFixed(2))
      transformLeft = Number(transformLeft.toFixed(2))

      ;(appEl as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transformOrigin = `${transformLeft}px ${transformTop}px`
    }

    const afterLeave = () => {
      (appEl as HTMLElement).style.opacity = '1'
    }

    return {
      show,
      currentApp,
      beforeEnter,
      afterLeave,
      closeArray
    }
  }
})
</script>

<style lang="less" scoped>
.app-array{
  width: 80%;
  height: fit-content;
  position: fixed;
  top: 16%;
  left: 0;
  right: 0;
  z-index: 10;
  display: block;
  margin: 0 auto;
}
.app-array-bg{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0%;
  z-index: 9;
  backdrop-filter: blur(4px);
}
.box-title{
  width: 100%;
  height: 40px;
  font-size: 28px;
  background: none;
  border: none;
  color: #fff;
  text-align: center;
  font-weight: normal;
}
.app-box{
  width: 100%;
  height: calc(var(--app-height) * 3 + var(--grid-row-gap) * 6);
  background: var(--transparent-background);
  margin-top: 20px;
  box-sizing: border-box;
  padding: calc(var(--grid-row-gap) * 2) 0;
  display: grid;
  grid-gap: var(--grid-row-gap) var(--grid-col-gap);
  grid-template-rows: repeat(auto-fill, var(--app-height));
  grid-template-columns: repeat(3, var(--app-width));
  grid-auto-flow: row dense;
  justify-content:center;
  border-radius: var(--app-radius);
  backdrop-filter: blur(4px);
}

.appArray-enter-active {
  transition: all 0.3s ease;
}
.appArray-leave-active {
  transition: all 0.3s ease;
}
.appArray-enter-from {
  opacity: 0;
  transform: scale(0.15);
}
// 关闭时
.appArray-leave-to {
  opacity: 0.5;
  transform: scale(0.15);
}
</style>
