<template>
  <div class="dock">
    <App v-for="item in appList" :key="item.key" :app="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import App from '../App/index.vue'
import appStore from '@/api/app-store'
import { IApp } from '#/index'

export default defineComponent({
  components: {
    App
  },
  setup() {
    const defalutList = ['phone', 'messages', 'safari', 'settings']
    const appList = defalutList.map((e) => appStore.find((a) => a.key == e) as IApp)
    return {
      appList
    }
  }
})
</script>

<style lang="less" scoped>
.dock {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 0 19px;
  ::v-deep(.app p) {
    display: none;
  }
}
</style>
