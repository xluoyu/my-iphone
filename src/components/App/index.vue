<template>
  <div class="app">
    <img :src="app.photo" alt="">
    <p>{{ name }}</p>
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
  },
  computed: {
    name() {
      return this.app.name?.substring(0, 5)
    }
  }
})
</script>

<style lang="less" scoped>
.app{
  font-size: 14px;
  color: #fff;
  text-align: center;
  height: 84px;
  img{
    width: @appPhotoHeight;
    height: @appPhotoHeight;
    display: block;
    margin: 0 auto;
    border-radius: 14px;
  }
  p{
    margin: 0;
    white-space: nowrap;
    line-height: 24px;
  }
}
</style>
