<template>
  <div class="app-layout" ref="appBox">
    <div class="close" @click="closeApp">
      <svg
        t="1620283141610"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2038"
        width="200"
        height="200"
      >
        <path
          d="M512 0C228.96 0 0 228.96 0 512c0 283.04 228.96 512 512 512 283.04 0 512-228.96 512-512C1024 228.96 795.04 0 512 0z m0 903.52c-216.8 0-391.52-174.72-391.52-391.52 0-216.8 174.72-391.52 391.52-391.52 216.8 0 391.52 174.72 391.52 391.52 0 216.8-174.72 391.52-391.52 391.52z"
          :fill="color"
          p-id="2039"
        ></path>
        <path
          d="M316.16 512c0 108.16 87.68 195.84 195.84 195.84S707.84 620.16 707.84 512 620.16 316.16 512 316.16 316.16 403.84 316.16 512z m0 0"
          :fill="color"
          p-id="2040"
        ></path>
      </svg>
    </div>
    <router-view v-slot="{ Component }" v-if="!$route.meta || $route.meta.type != 'app'">
      <transition name="fade">
        <component :is="Component" ref="component" />
      </transition>
    </router-view>
    <transition name="fade">
      <!-- 微前端组件 -->
      <div id="routerView" v-show="$route.meta.type == 'app'">系统加载中...</div>
    </transition>
  </div>
</template>

<script lang="ts">
import { IColorType } from '#/index'
import { useAppHistory } from '@/hooks/useApp'
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  emits: ['closeApp'],
  setup(props, ctx) {
    const route = useRoute()
    const router = useRouter()

    const fade = ref(true)
    const color = computed(() => IColorType[(route.meta?.style as 'black' | 'white') || 'white'])

    const { changeRouterHistory } = useAppHistory()

    watch(() => route.path, () => {
      if (route.name == 'home') return
      if (!route.matched.length || !route.matched[0].name) return
      changeRouterHistory({
        type: 'add',
        appName: route.matched[0].name as string,
        value: route.fullPath
      })
    })

    const closeApp = async() => {
      fade.value = false
      ctx.emit('closeApp')
      setTimeout(() => {
        router.push({ name: 'home' })
        fade.value = true
      }, 500)
    }

    return {
      fade,
      color,
      closeApp
    }
  }
})
</script>

<style lang="less" scoped>
.app-layout {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  // background: #fff;
}
.close {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 20px;
  height: 20px;
  line-height: 0;
  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
}
.page {
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.8;
}
</style>
