<template>
  <div class="app-array" v-if="show" @click.self="closeArray">
    <input type="text" v-model="currentApp.name" class="box-title">
    <div class="app-box">
      <App v-for="item in currentApp.children" :key="item.key" :app="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { useCurrentAppArray } from '@/hooks/useApp'
import { defineComponent, PropType } from 'vue'
import App from '@/components/App/index.vue'
import { IApp } from '#/index'

export default defineComponent({
  components: {
    App
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    curApp: {
      type: Object as PropType<IApp>,
      default: () => { return {} }
    }
  },
  setup() {
    const { currentApp, changeCurrentApp } = useCurrentAppArray()

    const closeArray = () => {
      changeCurrentApp(null)
    }

    return {
      currentApp,
      closeArray
    }
  }
})
</script>

<style lang="less" scoped>
.app-array{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(4px);
}
.box-title{
  width: 80%;
  height: 40px;
  font-size: 28px;
  background: none;
  border: none;
  color: #fff;
  text-align: center;
  font-weight: normal;
  position: absolute;
  top: 16%;
  left: 0;
  right: 0;
  display: block;
  margin: 0 auto;
}
.app-box{
  width: 80%;
  height: calc(var(--app-height) * 3 + var(--grid-row-gap) * 6);
  background: var(--transparent-background);
  position: absolute;
  top: calc(16% + 40px + 20px);
  left: 0;
  right: 0;
  margin: 0 auto;
  box-sizing: border-box;
  padding: calc(var(--grid-row-gap) * 2) 0;
  display: grid;
  grid-gap: var(--grid-row-gap) var(--grid-col-gap);
  grid-template-rows: repeat(auto-fill, var(--app-height));
  grid-template-columns: repeat(3, var(--app-width));
  grid-auto-flow: row dense;
  justify-content:center;
  border-radius: var(--app-radius);
  backdrop-filter: blur(4px);
}
</style>
