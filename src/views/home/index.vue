<template>
  <div class="container" :style="`background-position-x: ${containerBgX}%;transition: background ${containerBgDuration}s;`">
    <div class="swiper-container my-swipe">
      <div class="swiper-wrapper">
        <div class="swiper-slide" ref="swiperSlideRef" v-for="(item, index) in appsList" :key="index">
          <!-- <Weather ref="weatherRef" v-if="index == 0" />
          <App :app="app" /> -->
          <component :is="app.key" :app="app" v-for="app in item.child" :key="app.id" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <Dock />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, DefineComponent } from 'vue'
import Weather from '@/components/Weather/index.vue'
import Dock from '@/components/Dock/index.vue'
import App from '@/components/App/index.vue'
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.less'
import { IApp, IItemKey } from '#/index'
import { px } from '@/utils/index'
import component from '../../shims-vue'
Swiper.use([Pagination])

export default defineComponent({
  components: {
    Weather,
    Dock,
    App
  },
  setup() {
    const containerBgX = ref<number>(0)
    const containerBgDuration = ref<number>(0)
    onMounted(() => {
      new Swiper('.my-swipe', {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false,
        watchSlidesProgress: true,
        on: {
          progress: (swiper, progress) => {
            let newValue = Number((progress * 50).toFixed(2))
            if (Math.abs(newValue - containerBgX.value) > 20) {
              containerBgDuration.value = 0.3
            } else {
              containerBgDuration.value = 0
            }
            containerBgX.value = newValue
          }
        }
      })
    })

    const list = ref<IApp[]>([
      {
        id: 26544561,
        key: IItemKey.Weather
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      },
      {
        id: 16543213,
        key: IItemKey.App,
        photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
        name: '支付宝'
      }
    ])
    const appsList = ref<IApp[][]>([[]])

    const weatherRef = ref<DefineComponent | null>(null)

    onMounted(() => {
      const swiperSlideEl = document.querySelector('.swiper-slide')
      if (!swiperSlideEl) return
      const clientHeight = swiperSlideEl.clientHeight
      const paginationHeight = px(24)
      const appsHeight = clientHeight - paginationHeight
      let lines = Math.floor(appsHeight / px(84 + 27)) // 最多有几行
      const columns = 4
      console.log(lines * columns)
      let index = 0
      let curItemNumber = 0
      list.value.forEach(item => {
        console.log(curItemNumber)
        if (curItemNumber >= lines * columns) {
          curItemNumber = 0
          appsList.value.push([])
          index += 1
        }
        switch (item.key) {
          case IItemKey.App:
            curItemNumber += 1
            break
          case IItemKey.Weather:
            curItemNumber += 8
            break
          default:
            curItemNumber += 1
            break
        }
        appsList.value[index].push(item)
      })
      console.log(appsList.value)
    })
    return {
      appsList,
      weatherRef,
      containerBgX,
      containerBgDuration
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
})
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  background: url(https://z3.ax1x.com/2021/04/28/gPPUFx.jpg) no-repeat;
  background-size: cover;
  overflow: auto;
}
.my-swipe{
  height: calc(100% - 60px);
  .swiper-slide{
    box-sizing: border-box;
    padding: 27px 27px 0;
    display: grid;
    grid-gap: 27px;
    grid-template-columns: repeat(4, 60px);
  }
}
::v-deep(.swiper-pagination-bullet){
  background: rgba(0, 0, 0, .6);
}
::v-deep(.swiper-pagination-bullet-active){
  background: rgba(255, 255, 255, .8);
}
::v-deep(.swiper-pagination){
  height: 24px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
