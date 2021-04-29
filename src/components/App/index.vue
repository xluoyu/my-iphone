<template>
  <div class="app">
    <img :src="app.photo" alt="">
    <p>{{ app.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IApp } from '#/index'
export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => { return {} }
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.app{
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  img{
    width: 60px;
    height: 60px;
    border-radius: 14px;
  }
  p{
    margin: 0;
  }
}
</style>
