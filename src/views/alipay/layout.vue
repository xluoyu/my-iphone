<template>
  <div class="control">
    <!-- <Close />
    <router-view></router-view>
    <div class="tarbar">
      asdasd
    </div> -->
    <!-- 这是顶层 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Close from '@/components/Close/index.vue'
export default defineComponent({
})
</script>

<style scoped>
.control{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  /* background: skyblue */
}
</style>
