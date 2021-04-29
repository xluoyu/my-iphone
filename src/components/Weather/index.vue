<template>
  <div class="weather" @click="navTo">
    <div id="he-plugin-standard"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { addScript } from '@/utils'
declare global {
  interface Window { WIDGET: {CONFIG: {[propName: string]: string}} }
}
export default defineComponent({
  setup() {
    onMounted(() => {
      window.WIDGET = {
        CONFIG: {
          'layout': '1',
          'width': '321',
          'height': '147',
          'background': '1',
          'dataColor': 'FFFFFF',
          'modules': '10',
          'borderRadius': '14',
          'key': 'bd944729128a411586b094b8ad992a74'
        }
      }
      addScript('https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0')
    })
  },
  methods: {
    navTo() {
      window.open('https://widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=accu&key=6ccfdfa816e341a895dfe493d5d1f585&demo=true&v=_1619672129584')
    }
  }
})
</script>

<style lang="less" scoped>
.weather{
  width: 100%;
  margin: 0 auto 27px;
  opacity: .8;
}
</style>
