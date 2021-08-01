<template>
  <div class="container">
    <div class="top">手势解锁</div>
    <SlideLock :password="password" @callback="lockCb" />
    <div class="handle">
      <div @click="op">紧急操作</div>
      <div @click="cancel">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideLock from './slideLock.vue'
import useLock from '@/hooks/useLock'

export default defineComponent({
  components: {
    SlideLock
  },
  emits: ['openLock', 'cancel'],
  setup(props, ctx) {
    const { lockPwd } = useLock()

    const lockCb = (pwd: string, res: boolean) => {
      if (res) {
        op()
      }
    }

    const op = () => {
      ctx.emit('openLock')
    }
    const cancel = () => {
      ctx.emit('cancel')
    }

    return {
      password: lockPwd,
      lockCb,
      op,
      cancel
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top {
  text-align: center;
  line-height: 30px;
  margin: 20px auto;
  font-size: 28px;
}
.handle {
  width: 300px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
</style>
