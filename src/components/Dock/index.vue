<template>
  <div class="dock">
    程序坞
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.dock{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 80px;
  // min-height: 60PX;
  background: rgba(0, 0, 0, .2);
  color: #fff;
}
</style>
