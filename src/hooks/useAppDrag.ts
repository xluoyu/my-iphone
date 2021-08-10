import Sortable from '@/utils/sortable.esm.js'
import { swiperMain } from './useSwiper'
import { ref, Ref } from 'vue'
import { IUpdateAppList, useAppStore, useCurrentAppArray } from './useApp'
import { throttle } from '../utils/index'
import { style } from '../../../readCode/fre/fre-master/test/update'

const targetApp:Ref<HTMLElement | null> = ref(null)
let isInBox = false

/**
 * 拖拽用的hook
 *
 * @param el -> 容器class/id
 * @returns
 */
const useAppDrag = (el:string) => {
  const { updateAppList } = useAppStore()
  const { changeCurrentApp } = useCurrentAppArray()

  let box = document.querySelector(el) as HTMLElement
  let toCenterDiff = 0

  // app组弹框的元素信息
  let appArrayBoxInfo:DOMRect
  if (el == '#appArray-box') {
    let appArrayBox = document.querySelector(el) as HTMLElement
    setTimeout(() => {
      appArrayBoxInfo = appArrayBox.getBoundingClientRect()
    }, 500)
  }

  let ops = {
    group: 'app-group',
    animation: 500,
    ghostClass: 'box-ghost',
    forceFallback: true,
    fallbackOnBody: true,
    onEventMove: throttle(function(evt:TouchEvent) {
      if (el != '#appArray-box') return
      const clientX = evt.changedTouches[0].clientX
      const clientY = evt.changedTouches[0].clientY
      // 表示当前坐标在box外
      if (appArrayBoxInfo.left > clientX || appArrayBoxInfo.right < clientX || appArrayBoxInfo.top > clientY || appArrayBoxInfo.bottom < clientY) {
        console.log('在外侧')
        ;(document.querySelector('.app-array')).style.zIndex = -2
        ;(document.querySelector('.app-array-bg')).style.zIndex = -2
      }
    }, 50),
    onStart: function(evt:any) {
      toCenterDiff = evt.originalEvent.targetTouches[0].clientX - evt.item.offsetLeft
      toCenterDiff = evt.item.offsetWidth / 2 - toCenterDiff
      swiperMain.value.allowTouchMove = false
    },
    onMove: function(evt:any) {
      const left1 = evt.relatedRect.left + evt.relatedRect.width / 3
      const right1 = evt.relatedRect.left + evt.relatedRect.width / 3 * 2
      const top1 = evt.relatedRect.top + evt.relatedRect.height / 5
      const bottom1 = evt.relatedRect.top + evt.relatedRect.height / 5 * 4
      const clineX = evt.originalEvent.clientX + toCenterDiff
      const clineY = evt.originalEvent.clientY

      console.log(evt.related.dataset.id)
      if (left1 < clineX && clineX < right1 && top1 < clineY && clineY < bottom1) {
        evt.related.classList.add('changeToBox')
        targetApp.value = evt.related as HTMLElement
        isInBox = true
        return false
      } else {
        // 接近边缘
        if (isInBox) {
          // 从内部接近
          evt.related.classList.remove('changeToBox')
          targetApp.value = null
          isInBox = false
          return true
        } else {
          // 从外部/首次靠近目标
          setTimeout(() => {
            // 从边缘经过
            isInBox = true
          }, 400)
          return false
        }
      }
    },
    // 拖动结束
    onEnd: function(evt:any) {
      return
      // 获取拖动后的排序
      let arr:IUpdateAppList = sortable.toArray()
      // alert(JSON.stringify(arr))
      if (targetApp.value) {
        targetApp.value.classList.remove('changeToBox')
        let targetKey = targetApp.value.dataset.id as string
        let itemKey = evt.item.dataset.id
        if (targetKey.indexOf('appArray') == -1) {
          // 目标是app
          let newItem = {
            key: 'appArray' + new Date().getTime(),
            children: [
              targetKey,
              itemKey
            ]
          }
          arr.splice(arr.indexOf(targetKey), 1, newItem)
          arr.splice(arr.indexOf(itemKey), 1)
        } else {
          // 目标是apps
          let newItem = {
            key: targetKey,
            children: [itemKey]
          }
          arr[arr.indexOf(targetKey)] = newItem
          arr.splice(arr.indexOf(itemKey), 1)
        }
      }
      updateAppList(arr)
      // composeApps(targetApp.value?.dataset.id as string, evt.item.dataset.id as string)
      swiperMain.value.allowTouchMove = true
    }
  }
  // 初始化
  const sortable = Sortable.create(box, ops)
  // console.log(sortable)
  // sortable._onTouchMove = (e) => {
  //   console.log(e)
  // }
  return {
    sortable
  }
}

export default useAppDrag
