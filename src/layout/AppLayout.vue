<template>
  <div class="app-layout" ref="appBox">
    <div class="close" @click="closeApp">
      <svg t="1620283141610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2038" width="200" height="200"><path d="M512 0C228.96 0 0 228.96 0 512c0 283.04 228.96 512 512 512 283.04 0 512-228.96 512-512C1024 228.96 795.04 0 512 0z m0 903.52c-216.8 0-391.52-174.72-391.52-391.52 0-216.8 174.72-391.52 391.52-391.52 216.8 0 391.52 174.72 391.52 391.52 0 216.8-174.72 391.52-391.52 391.52z" :fill="color" p-id="2039"></path><path d="M316.16 512c0 108.16 87.68 195.84 195.84 195.84S707.84 620.16 707.84 512 620.16 316.16 512 316.16 316.16 403.84 316.16 512z m0 0" :fill="color" p-id="2040"></path></svg>
    </div>
    <router-view v-slot="{ Component }" v-if="$route.meta.type != 'app'">
      <transition name="fade">
        <component :is="Component" ref="component" />
      </transition>
    </router-view>
    <transition name="fade" v-else>
      <!-- 微前端组件 -->
      <div id="routerView" v-show="fade">
        系统加载中...
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { IColorType } from '#/index'
import store from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['closeApp'],
  data() {
    return {
      fade: true
    }
  },
  computed: {
    color():string {
      return IColorType[(this.$route.meta?.style as 'black'|'white') || 'white']
    }
  },
  watch: {
    '$route.path'() {
      if (this.$route.path == '/') return
      this.$store.commit('changeRouterHistory', {
        type: 'add',
        appName: this.$route.matched[0].name,
        value: [...new Set(this.$route.matched.map(e => e.path))]
      })
    }
  },
  methods: {
    async closeApp() {
      let flag = await store.dispatch('onCloseBrofreFn')
      if (!flag) return
      if (this.$route.meta.type == 'app') {
        this.fade = false
        this.$emit('closeApp')
        setTimeout(() => {
          this.$router.push('/')
          this.fade = true
        }, 500)
      } else {
        this.$router.push('/')
      }
    },
    async sleep() {
      setTimeout(() => {
        Promise.resolve()
      }, 300)
    }
  }
})
</script>

<style lang="less" scoped>
.app-layout{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  // background: #fff;
}
.close{
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 20px;
  height: 20px;
  line-height: 0;
  svg{
    width: 20px;
    height: 20px;
    color: #fff;
  }
}
.page{
  width: 100%;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.8;
}
</style>
