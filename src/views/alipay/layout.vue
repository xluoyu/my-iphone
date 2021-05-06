<template>
  <div>
    <Close />
    <router-view></router-view>
    <div class="tarbar">
      asdasd
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Close from '@/components/Close/index.vue'
export default defineComponent({
  components: {
    Close
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.tarbar{
  position: fixed;
  top: 0;
  left: 0;
  background: skyblue
}
</style>
