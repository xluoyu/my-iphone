<template>
  <div
    class="app-box"
    @touchstart="gotouchstart"
    @touchend="gotouchend"
  >
    <div :class="`${dragStatus ? 'shake' : ''}`" style="width: 100%;height:100%">
      <van-icon name="clear" class="close" v-if="dragStatus" />
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { IApp } from '#/index'
import { defineComponent, PropType } from 'vue'
import { useAppDragStatus } from '../hooks/useAppDragStatus'

export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    const { dragStatus,
      gotouchstart,
      gotouchend
    } = useAppDragStatus()

    return {
      dragStatus,
      gotouchstart,
      gotouchend
    }
  }
})
</script>

<style lang="less" scoped>
.app-box {
  position: relative;
}
.close {
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 5;
  color: #fff;
  font-size: 20px;
}

.shake {
  transform-origin: 40% 50%;
  transform: translateZ(0);
  animation: shakeAnmiation 0.2s infinite;
}

.changeToBox {
  .close {display: none;}
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
