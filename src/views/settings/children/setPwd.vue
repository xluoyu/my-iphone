<template>
  <div v-if="lockType == ILockType.Number" class="number-view">
    <NumberLock :password="curPassword" @callback="callback" />
  </div>
  <div v-if="lockType == ILockType.Slide" class="number-view">
    <SlideLock :password="curPassword" @callback="callback" />
  </div>
</template>

<script lang="ts">
import { ILockType } from '#/index'
import { defineComponent } from 'vue'
import NumberLock from '@/components/Lock/components/numberLock.vue'
import SlideLock from '@/components/Lock/components/slideLock.vue'

export default defineComponent({
  components: {
    NumberLock,
    SlideLock
  },
  emits: ['changeTitle'],
  data() {
    return {
      curPassword: '',
      lockType: ''
    }
  },
  computed: {
    ILockType: () => ILockType
  },
  mounted() {
    this.lockType = this.$route.query.type as string || ''
    if (this.$route.query.type == ILockType.Number) {
      this.$emit('changeTitle', '设置数字密码')
    } else if (this.$route.query.type == ILockType.Slide) {
      this.$emit('changeTitle', '设置滑动密码')
    }
  },
  methods: {
    callback(value:string, res:boolean) {
      if (res && !this.curPassword) {
        this.curPassword = value
        this.$emit('changeTitle', '再次设置密码')
      } else if (res && this.curPassword) {
        this.$store.commit('LockStore/changeLockPwd', this.curPassword)
        this.$toast.success('密码设置成功')
        setTimeout(() => {
          this.$router.go(-1)
        }, 600)
      }
    }
  }
})
</script>

<style lang="less" scoped>
.number-view{
  background: #3d3c3c;
  padding-top: 40px;
  color: #fff;
  text-align: center;
  height: 100%;
}
</style>
