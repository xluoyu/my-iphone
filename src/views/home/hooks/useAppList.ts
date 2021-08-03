import { onMounted, ref, markRaw, watch } from 'vue'
import { IApp, IItemKey } from '#/index'
import { px } from '@/utils/index'
import Weather from '@/components/Weather/index.vue'
import App from '@/components/App/index.vue'
import { useAppStore } from '../../../hooks/useApp'
import { getVar } from '@/utils'

const curColumn = ref(0)

/**
 * 获取一行的app数
 */
const getColumn = () => {
  const appWidth = getVar('--app-width')
  const colGap = getVar('--grid-col-gap')
  let boxWidth = (document.querySelector('.grid-box') as Element).getBoundingClientRect().width
  curColumn.value = Math.floor((boxWidth + colGap) / (appWidth + colGap))
  let sur = (boxWidth + colGap) % (appWidth + colGap)
  if (sur < appWidth) {
    curColumn.value -= 1
  }
}

const useAppList = () => {
  const { localApp, myApplist } = useAppStore()
  const appsList = ref<IApp[][]>([[]])

  const init = () => {
    const swiperSlideEl = document.querySelector('.grid-box')
    if (!swiperSlideEl) return
    const clientHeight = swiperSlideEl?.clientHeight || 0

    let lines = Math.floor(clientHeight / 84 + 8) // 最多有几行
    // 判断剩余空间是否可容纳一行不含加边距的元素
    let sur = clientHeight - lines * 84 + 8

    if (sur >= 84) {
      lines += 1
    }
    const columns = 4
    let index = 0
    let curItemNumber = 0
    let list:IApp[][] = [[]]
    myApplist.value.forEach((item, i) => {
      switch (item.type) {
        case IItemKey.App:
          curItemNumber += 1
          item.component = markRaw(App)
          break
        case IItemKey.Weather:
          let curLine = Math.ceil(curItemNumber / 4)
          curItemNumber += 8
          item.component = markRaw(Weather)
          item.style = `grid-column-start: 1;grid-column-end: span max;grid-row-start: ${
            curLine + 1
          };grid-row-end: ${curLine + 3};`
          break
        default:
          curItemNumber += 1
          item.component = markRaw(App)
          break
      }
      list[index].push(item)
      if (curItemNumber >= lines * columns || i == myApplist.value.length - 1) {
        curItemNumber = 0
        if (i != myApplist.value.length - 1) {
          list.push([])
          index += 1
        }
      }
    })
    appsList.value = list
  }

  /**
   * 仅监听增/删app
   */
  watch(localApp.value, () => {
    init()
  })

  onMounted(() => {
    window.addEventListener('resize', () => {
      init()
      getColumn()
    })
    init()
    getColumn()
  })

  return {
    appsList,
    curColumn
  }
}

export default useAppList
