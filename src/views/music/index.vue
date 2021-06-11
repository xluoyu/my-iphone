<template>
  <div style="width: 100%;height:100vh;-webkit-overflow-scrolling: touch;background:#fff;">
    <iframe src="https://y.music.163.com/m/" id="iframe" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'

export default defineComponent({
  setup() {
    nextTick(() => {
      document.body.addEventListener('touchmove', function(e) {
        e.preventDefault()
      }, { passive: false })
    })
    return {}
  }
})
</script>

<style scoped>

</style>
