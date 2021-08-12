<template>
  <div class="container">
    <router-view></router-view>
    <div class="tarbar">
      <router-link to="/phone/recent">
        <i class="iconfont icon-lishijilu"></i>
        <span>最近通话</span>
      </router-link>
      <router-link to="/phone/call">
        <i class="iconfont icon-bohao"></i>
        <span>拨号</span>
      </router-link>
      <router-link to="/phone/address">
        <i class="iconfont icon-addressbook"></i>
        <span>通讯录</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const type = ref('logo')

    const imageFiles = import.meta.glob('../../assets/*.png')
    // console.log(imageFiles)
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

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100vh;
  background: #fff;
}
.tarbar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #eee;
  display: flex;
  justify-content: space-evenly;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 33%;
    text-align: center;
    color: #666;
    &.router-link-exact-active{
      color: #1283df;
    }
    .iconfont{
      font-size: 18px;
    }
  }
}
</style>
