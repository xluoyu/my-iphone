<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '#515151'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.close{
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 20px;
  height: 20px;
  line-height: 0;
  svg{
    width: 20px;
    height: 20px;
    color: #fff;
  }
}
</style>
