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
  height: var(--dock-height);
  background: var(--transparent-background);
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 0 var(--grid-col-gap);
  ::v-deep(.app p) {
    display: none;
  }
}
</style>
