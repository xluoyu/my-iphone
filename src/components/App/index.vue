<template>
  <div class="app" :id="app.key" @click="open" @touchstart="gotouchstart" @touchend="gotouchend">
    <img :src="app.photo" alt="">
    <p>{{ app.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IApp } from '#/index'
let timeOutEvent = 0
export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => { return {} }
    }
  },
  methods: {
    open() {
      let appName = this.app.key
      if (appName == 'clock') {
        this.$store.commit('changeLock', true)
      } else {
        let routeList = this.$store.state.routerHistory[appName]
        if (routeList && routeList.length) {
          routeList.forEach((item:string) => {
            requestAnimationFrame(() => {
              this.$router.push({ path: item })
            })
          })
        } else {
          this.$router.push({ name: appName })
        }
      }
    },
    gotouchstart() {
      clearTimeout(timeOutEvent)
      timeOutEvent = setTimeout(() => {
        timeOutEvent = 0
        console.log('长按事件')
      }, 600)
    },
    gotouchend() {
      clearTimeout(timeOutEvent)
    }
  }
})
</script>

<style lang="less" scoped>
.app{
  font-size: 12px;
  color: #fff;
  text-align: center;
  height: fit-content;
  width: 70px;
  position: relative;
  &::before{
    content: '';
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition: background .3s;
    width: @appPhotoHeight;
    height: @appPhotoHeight;
    margin: 0 auto;
    border-radius: 14px;
  }
  &:active{
    &::before{
      background: rgba(0, 0, 0, .7);
    }
  }
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
    word-wrap:break-word;
    line-height: 24px;
    overflow: hidden;
    text-overflow : clip;
  }
}
</style>
