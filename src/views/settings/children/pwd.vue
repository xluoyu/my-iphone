<template>
  <div>
    <van-cell
      title="解锁方式"
      is-link
      arrow-direction="down"
      :value="curSelectType.text"
      style="margin-top: 20px"
      @click="togglePopup"
    />

    <van-cell
      title="设置密码"
      is-link
      :to="{name: 'setPwd', query: {type: curSelectType.value}}"
      style="margin-top: 20px"
      v-if="curSelectType.value != 'normal'"
    />
    <van-popup v-model:show="show" position="bottom">
      <van-picker title="解锁方式" :columns="columns" @cancel="togglePopup" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { ILockType } from '#/index'
import { useStore } from 'vuex'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

interface IPwdType {
  value: ILockType
  text: string
}

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    const show = ref<boolean>(false)
    const togglePopup = () => {
      show.value = !show.value
    }

    const columns: IPwdType[] = [
      { value: ILockType.Normal, text: '无需密码' },
      { value: ILockType.Number, text: '数字密码' },
      { value: ILockType.Slide, text: '滑动解锁' }
    ]
    let curSelectType = reactive({
      value: store.state.LockStore.lockType,
      text: (columns.find((e) => e.value == store.state.LockStore.lockType) as IPwdType).text
    })
    const onConfirm = (obj: IPwdType) => {
      curSelectType.value = obj.value
      curSelectType.text = obj.text
      // store.commit('LockStore/changeLockType', curSelectType.value)
      // store.commit('changeCloseBeforeFn', () => {
      //   if (curSelectType.value == ILockType.Normal) {
      //     return true
      //   } else {
      //     console.log('还没有设置密码')
      //     return false
      //   }
      // })
      if (curSelectType.value != ILockType.Normal) {
        router.push({ name: 'setPwd', query: { type: curSelectType.value }})
      }
      togglePopup()
    }

    return {
      columns,
      show,
      togglePopup,
      onConfirm,
      curSelectType
    }
  }
})
</script>

<style scoped></style>
