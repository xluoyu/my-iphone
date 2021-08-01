<template>
  <div class="container">
    <div class="top">输入密码</div>
    <numberLock :password="password" @callback="lockCallback" @close="cancel">
      <div @click="op">紧急操作</div>
    </numberLock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import numberLock from './numberLock.vue'
import useLock from '@/hooks/useLock'
export default defineComponent({
  components: {
    numberLock
  },
  emits: ['openLock', 'cancel'],
  setup(props, ctx) {
    const { lockPwd } = useLock()

    return {
      password: lockPwd,
      op: () => { ctx.emit('openLock') },
      cancel: () => { ctx.emit('cancel') },
      lockCallback: (v: string, res: boolean) => {
        if (res) {
          ctx.emit('openLock')
        }
      }
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
</style>
