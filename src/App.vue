<template>
  <div class="page">
    <Lock v-if="lockStatus" />
    <AppArray :show="showAppArray" :cur-app="currentApp" />
    <Home />
    <transition name="app" @before-enter="beforeEnter">
      <app-layout v-show="routeStatus" @closeApp="closeApp" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Home from './views/home/index.vue'
import { useRoute } from 'vue-router'
import AppLayout from './layout/AppLayout.vue'
import Lock from '@/components/Lock/index.vue'
import useLock from './hooks/useLock'
import AppArray from '@/components/AppArray/index.vue'
import { useCurrentAppArray } from './hooks/useApp'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Lock,
    AppArray,
    AppLayout
  },
  setup() {
    /**
     * 获取锁屏状态
     */
    const { lockStatus } = useLock()

    /**
     *
     */
    const appRouteStatus = ref(false)
    const route = useRoute()
    const routeStatus = computed(() => {
      if (appRouteStatus.value || !route.matched.length) {
        return false
      } else {
        return route.name != 'home'
      }
    })

    /**
     * 关闭appLayout
     */
    const closeApp = () => {
      appRouteStatus.value = true
      // 为关闭动画做缓冲
      setTimeout(() => {
        appRouteStatus.value = false
      }, 600)
    }
    /**
     * 打开动画
     * 根据route.name == app.key 获取appDom
     * 获取appDom的坐标
     * 从坐标点做放大效果
     */
    const beforeEnter = (el: Element) => {
      let routeName = route.matched[0].name || ''
      let appEl = document.querySelector(`#${String(routeName)}`) as Element
      let { top, left, width, height } = appEl.getBoundingClientRect()
      let transformTop = height / 2 + top
      let transformLeft = width / 2 + left
      ;(el as HTMLElement).style.transformOrigin = `${transformLeft}px ${transformTop}px`
    }

    /**
     * 关于打开app组
     */
    const { currentApp } = useCurrentAppArray()
    const showAppArray = computed(() => Boolean(currentApp.value))

    return {
      routeStatus,
      lockStatus,
      showAppArray,
      currentApp,
      closeApp,
      beforeEnter
    }
  }
})
</script>

<style lang="less">
.page {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  user-select: none;
}
.app-enter-active {
  transition: all 0.3s ease;
}
.app-leave-active {
  transition: all 0.4s ease;
}
.app-enter-from {
  opacity: 0;
  transform: scale(0);
}
// 关闭时
.app-leave-to {
  opacity: 0.5;
  transform: translateY(100vh);
}
</style>
