<template>
  <div class="container">
    <div class="top">输入密码</div>
    <numberLock :password="password" @callback="lockCallback" @close="cancel">
      <div @click="op">紧急操作</div>
    </numberLock>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import numberLock from './numberLock.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    numberLock
  },
  emits: ['openLock', 'cancel'],
  setup() {
    const store = useStore()
    return {
      password: computed(() => store.state.LockStore.lockNumberPwd)
    }
  },
  methods: {
    op() {
      this.$emit('openLock')
    },
    cancel() {
      this.$emit('cancel')
    },
    lockCallback(v: string, res: boolean) {
      if (res) {
        this.$emit('openLock')
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
