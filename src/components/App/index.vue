<template>
  <div class="app" @click="open" :id="app.key">
    <img :src="app.photo" alt="">
    <p>{{ app.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IApp } from '#/index'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => { return {} }
    }
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const open = ():void => {
      if (props.app.key == 'clock') {
        store.commit('changeLock', true)
      } else {
        router.push({ name: props.app.key })
      }
    }
    return {
      open
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
