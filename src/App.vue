<template>
  <div class="page">
    <router-view class="router" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  methods: {}
})
</script>

<style lang="less">
.page{
  width: 100%;
  height: 100%;
}
.router{
  width: 100%;
  height: 100%;
}
</style>
