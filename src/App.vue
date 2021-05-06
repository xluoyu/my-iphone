<template>
  <div class="page">
    <Home />
    <transition name="lock">
      <Lock v-if="lockStatus" />
    </transition>
    <transition name="app" @before-enter="beforeEnter">
      <app-layout v-if="routeStatus" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Home from './views/home/index.vue'
import { useRoute } from 'vue-router'
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
    const routeStatus = computed(() => {
      const route = useRoute()
      return route.path != '/'
    })
    return {
      routeStatus,
      lockStatus: computed(() => store.state.lockStatus)
    }
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      let getVariables = GetVar(variables)
      let routeName = this.$route.matched[0].name
      if (!routeName) return
      let appEl = document.querySelector(`#${String(routeName)}`) as HTMLElement
      let top = getVariables('appHeight') / 2 + appEl.getBoundingClientRect().top
      let left = getVariables('appWidth') / 2 + appEl.getBoundingClientRect().left
      el.style.transformOrigin = `${left}px ${top}px`
    }
  }
})
</script>

<style lang="less">
.page{
  width: 100%;
  height: 100%;
}
.app-enter-active {
  transition: all .3s ease;
}
.app-leave-active {
  transition: all .5s ease;
}
.app-enter-from {
  opacity: 0;
  transform: scale(0);
}
.app-leave-to {
  opacity: .5;
  transform: translateY(100vh);
}
</style>
