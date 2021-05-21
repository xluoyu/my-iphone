<template>
  <div class="container">
    <div class="header">{{ title }}</div>
    <router-view class="main"></router-view>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const route = useRoute()

    return {
      title: computed(() => route.meta.title)
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
.header{
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 40px;
  text-indent: 10px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  text-align: center;
}
.main{
  padding-top: 40px;
  height: 100%;
  overflow-x: auto;
}
</style>
