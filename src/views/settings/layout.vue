<template>
  <div class="container">
    <div :class="`header ${style}`">
      <div class="back" v-if="hasChild" @click="back"><van-icon name="arrow-left" /></div>
      {{ title }}
    </div>
    <div class="main">
      <router-view @changeTitle="changeTitle"></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const back = () => {
  router.go(-1)
}
const title = ref(route.meta.title)

watch(() => route.meta.title, () => {
  title.value = route.meta.title || ''
})
const changeTitle = (value:string) => {
  title.value = value
}

const hasChild = computed(() => route.meta.back)
const style = computed(() => route.meta.style || 'white')

</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
.header{
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 40px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  text-align: center;
  .back{
    width: 40px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.black{
    background: rgb(61, 60, 60, .4);
    color: #fff;
    border-bottom: 1px solid #444;
  }
}
.main{
  padding-top: 40px;
  height: 100%;
  overflow-x: auto;
}
</style>
