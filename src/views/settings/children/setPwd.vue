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
import { defineComponent, onMounted, ref } from 'vue'
import NumberLock from '@/components/Lock/components/numberLock.vue'
import SlideLock from '@/components/Lock/components/slideLock.vue'
import { useRoute, useRouter } from 'vue-router'
import useLock from '@/hooks/useLock'
import { Toast } from 'vant'

export default defineComponent({
  components: {
    NumberLock,
    SlideLock
  },
  emits: ['changeTitle'],
  setup(props, ctx) {
    const route = useRoute()
    const router = useRouter()
    const { setLockType, setLockPwd } = useLock()

    const curPassword = ref('')
    const lockType = route.query.type

    onMounted(() => {
      if (lockType == ILockType.Normal) {
        ctx.emit('changeTitle', '设置数字密码')
      } else if (lockType == ILockType.Slide) {
        ctx.emit('changeTitle', '设置滑动密码')
      }
    })

    const callback = (value: string, res: boolean) => {
      if (res && !curPassword.value) {
        curPassword.value = value
        ctx.emit('changeTitle', '再次设置密码')
      } else if (res && curPassword) {
        setLockType(lockType as ILockType)
        setLockPwd(curPassword.value)
        Toast.success('密码设置成功')
        setTimeout(() => {
          router.go(-1)
        }, 600)
      }
    }

    return {
      curPassword,
      lockType,
      ILockType,
      callback
    }
  }
})
</script>

<style lang="less" scoped>
.number-view {
  background: #3d3c3c;
  padding-top: 40px;
  color: #fff;
  text-align: center;
  height: 100%;
}
</style>
