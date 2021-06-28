<template>
  <div
    :class="`app-box ${appDragStatus ? 'shake' : ''} `"
    draggable

    @dragstart="dragstart"
    @dragend="dragend"
    @drag="drag"
  >
    <!-- @touchstart="gotouchstart"
    @touchend="gotouchend" -->
    <van-icon name="clear" class="close" @touchend="clearApp" v-if="appDragStatus" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { IApp } from '#/index'
import { IState } from '@/store/index'
import { defineComponent, PropType } from 'vue'
import { mapState } from 'vuex'
let timeOutEvent = 0
export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => { return {} }
    }
  },
  computed: {
    ...mapState({
      appDragStatus: state => (state as IState).appDragStatus
    })
  },
  methods: {
    clearApp() {
      this.$dialog.confirm({
        message: `确定要卸载${this.app.name}吗？`
      }).then(() => {
        console.log('开始卸载')
        this.$store.commit('AppStore/removeApp', this.app.key)
      })
    },
    longTap() {
      this.$store.commit('changeAppDragStatus', true)
    },
    gotouchstart() {
      clearTimeout(timeOutEvent)
      timeOutEvent = setTimeout(() => {
        timeOutEvent = 0
        this.longTap()
      }, 600)
    },
    gotouchend() {
      clearTimeout(timeOutEvent)
    },
    dragstart(e) {
      e.dataTransfer.setData('component', '123')
      console.log('拖拽开始')
    },
    drag() {
      console.log('拖拽')
    },
    dragend() {
      console.log('拖拽结束')
    }
  }
})
</script>

<style lang="less" scoped>
.app-box{
  position: relative;
}
.close{
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 5;
  color: #fff;
  font-size: 20px;
}

.shake{
  transform-origin: 50% 50%;
  transform: translateZ(0);
  animation: shakeAnmiation .2s infinite;
}

@keyframes shakeAnmiation {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
