<template>
  <div class="container">
    <input type="text" v-model="type" @blur="changePath">
    <img :src="imageFile" alt="">
    测试
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const type = ref('logo')

    const imageFiles = import.meta.glob('../../assets/*.png')
    console.log(imageFiles)
    let imageFile = ref('')
    const changePath = () => {
      imageFiles[`../../assets/${type.value}.png`]().then(res => {
        imageFile.value = res.default || ''
      })
    }
    changePath()
    return {
      type,
      imageFile,
      changePath
    }
  }
})
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  background: #fff;
}
</style>
