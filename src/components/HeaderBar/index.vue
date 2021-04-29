<template>
  <div class="header-bar">
    <div class="left">
      <span>🔒</span>
    </div>
    <div class="right">
      <span>啊啊是</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderBar',
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.header-bar{
  width: 100%;
  height: 20px;
  min-height: 10PX;
  color: white;
  font-size: 14px;
  line-height: 20px;
  backdrop-filter: blur(2PX);
  background: rgba(000, 000, 000, .1);
  display: flex;
  justify-content: space-between;
}
</style>
