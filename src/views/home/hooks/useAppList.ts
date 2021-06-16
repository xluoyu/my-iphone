import { onMounted, computed, ref, markRaw, Ref, watch } from 'vue'
import { useStore } from 'vuex'
import { IApp, IItemKey } from '#/index'
import { px } from '@/utils/index'
import Weather from '@/components/Weather/index.vue'
import App from '@/components/App/index.vue'

interface IUseAppList {
  appsList: Ref<IApp[][]>
}

const useAppList = ():IUseAppList => {
  const store = useStore()
  const list = computed(() => store.getters['AppStore/myAppList'] as IApp[])
  const appsList = ref<IApp[][]>([[]])

  const init = () => {
    const swiperSlideEl = document.querySelector('.grid-box')
    if (!swiperSlideEl) return
    const clientHeight = swiperSlideEl?.clientHeight || 0

    let lines = Math.floor(clientHeight / px(84 + 8)) // 最多有几行
    // 判断剩余空间是否可容纳一行不含加边距的元素
    let sur = clientHeight - lines * px(84 + 8)
    if (sur >= px(84)) {
      lines += 1
    }
    const columns = 4
    let index = 0
    let curItemNumber = 0
    appsList.value = [[]]
    list.value.forEach((item, i) => {
      switch (item.type) {
        case IItemKey.App:
          curItemNumber += 1
          item.component = markRaw(App)
          break
        case IItemKey.Weather:
          let curLine = Math.ceil(curItemNumber / 4)
          curItemNumber += 8
          item.component = markRaw(Weather)
          item.style = `grid-column-start: 1;grid-column-end: 5;grid-row-start: ${curLine + 1};grid-row-end: ${curLine + 3};`
          break
        default:
          curItemNumber += 1
          item.component = markRaw(App)
          break
      }
      appsList.value[index].push(item)
      if (curItemNumber >= lines * columns || i == list.value.length - 1) {
        curItemNumber = 0
        if (i != list.value.length - 1) {
          appsList.value.push([])
          index += 1
        }
      }
    })
  }

  watch(
    store.state.AppStore.myAppIds,
    () => {
      console.log('监听到改变')
      init()
    })

  onMounted(() => {
    window.addEventListener('resize', () => {
      init()
    })
    init()
  })

  return {
    appsList
  }
}

export default useAppList
