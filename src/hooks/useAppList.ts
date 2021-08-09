import { onMounted, ref, markRaw, watch } from 'vue'
import { IApp, IItemKey } from '#/index'
import Weather from '@/components/Weather/index.vue'
import App from '@/components/App/index.vue'
import { useAppStore } from './useApp'
import { getVar } from '@/utils'
console.log('useAppList')

const useAppList = () => {
  const curColumn = ref(0)

  const rowGap = getVar('--grid-row-gap')
  const appHeight = getVar('--app-height')
  const appWidth = getVar('--app-width')
  const colGap = getVar('--grid-col-gap')

  const { localApp, myApplist } = useAppStore()
  const appsList = ref<IApp[][]>([[]])

  const init = () => {
    const swiperSlideEl = document.querySelector('.swiper-slide')
    if (!swiperSlideEl) return
    let { width: boxWidth, height: boxHeight } = swiperSlideEl.getBoundingClientRect()
    const MaxLines = Math.floor((boxHeight + rowGap) / (appHeight + rowGap)) // 最多有几行
    const MaxCol = Math.floor((boxWidth + colGap) / (appWidth + colGap)) // 一行有几个

    curColumn.value = MaxCol
    const viewMaxNum = MaxLines * MaxCol

    let index = 0
    let curItemNumber = 0
    let list:IApp[][] = [[]]
    myApplist.value.forEach((item) => {
      switch (item.type) {
        case IItemKey.App:
          curItemNumber += 1
          item.component = markRaw(App)
          break
        case IItemKey.Weather:
          curItemNumber += MaxCol * 2
          item.component = markRaw(Weather)
          item.style = `grid-column-start: 1;grid-column-end: ${MaxCol + 1};grid-row-start:1;grid-row-end:3`
          // item.style = `grid-column-start: span ${MaxCol};grid-row-start:span 2`
          break
        default:
          curItemNumber += 1
          item.component = markRaw(App)
          break
      }
      /**
       * 当前界面的app数超了
       * 添加一个新页面
       */
      if (curItemNumber > viewMaxNum) {
        curItemNumber = 0
        list.push([item])
        index += 1
      } else {
        list[index].push(item)
      }
    })

    appsList.value = list
  }

  /**
   * 仅监听增/删app
   */
  watch(localApp, () => {
    console.log('变动了')
    init()
  })

  onMounted(() => {
    window.addEventListener('resize', init)
    init()
  })

  return {
    appsList,
    curColumn
  }
}

export default useAppList
