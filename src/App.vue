<template>
  <div class="page">
    <Lock v-if="lockStatus" />
    <Home />
    <transition name="app" @before-enter="beforeEnter">
      <app-layout v-show="routeStatus" @closeApp="closeApp" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import Home from './views/home/index.vue'
import { useRoute, useRouter } from 'vue-router'
import AppLayout from './layout/AppLayout.vue'
import { GetVar } from './utils/index'
import variables from '@/styles/variables.less'
import Lock from '@/components/Lock/index.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Lock,
    AppLayout
  },
  setup() {
    const store = useStore()
    const appRouteStatus = ref(false)
    const routeStatus = computed(() => {
      const route = useRoute()
      if (appRouteStatus.value || !route.matched.length) {
        return false
      } else {
        return route.name != 'home'
      }
    })

    const router = useRouter()
    console.log(router)

    watch(store.state.testList, () => {
      console.log('testList watch')
    })
    const closeApp = () => {
      appRouteStatus.value = true
      setTimeout(() => {
        appRouteStatus.value = false
      }, 600)
    }
    return {
      closeApp,
      routeStatus,
      lockStatus: computed(() => store.state.LockStore.lockStatus)
    }
  },
  methods: {
    beforeEnter(el: Element) {
      let getVariables = GetVar(variables)
      let routeName = this.$route.matched[0].name || ''
      if (!routeName) return
      let appEl = document.querySelector(`#${String(routeName)}`) as Element
      if (!appEl) return
      let top = getVariables('appHeight') / 2 + appEl.getBoundingClientRect().top
      let left = getVariables('appWidth') / 2 + appEl.getBoundingClientRect().left
      ;(el as HTMLElement).style.transformOrigin = `${left}px ${top}px`
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
.app-leave-to {
  opacity: 0.5;
  transform: translateY(100vh);
}
</style>
