<template>
  <div class="weather">
    <div id="he-plugin-standard"></div>
    <p>天气</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from 'vue'
import { addScript } from '@/utils'
declare global {
  interface Window {
    WIDGET: { CONFIG: { [propName: string]: string } }
  }
}

export default defineComponent({
  setup() {
    onMounted(() => {
      window.WIDGET = {
        CONFIG: {
          layout: '1',
          width: '337',
          // 'height': getVariables('appHeight') * 2 + getVariables('gridRowGap') - getVariables('appNameHeight') + '',
          height: '152',
          background: '1',
          dataColor: 'FFFFFF',
          modules: '10',
          borderRadius: '14',
          key: 'bd944729128a411586b094b8ad992a74'
        }
      }
      addScript(
        'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0',
        () => {
          nextTick(() => {
            let weatherEl = document.querySelector('#he-plugin-standard') as HTMLElement
            if (weatherEl) {
              weatherEl.style.width = '100%'
            }
          })
        }
      )
    })
  },
  methods: {
    navTo() {
      window.open(
        'https://widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=accu&key=6ccfdfa816e341a895dfe493d5d1f585&demo=true&v=_1619672129584'
      )
    }
  }
})
</script>

<style lang="less" scoped>
.weather {
  width: 100%;
  opacity: 0.8;
  ::v-deep(#he-plugin-standard) {
    width: 100% !important;
    background-color: transparent;
  }
  p {
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: var(--app-name-height);
  }
}
</style>
