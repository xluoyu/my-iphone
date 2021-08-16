import Sortable from '@/utils/sortable.esm.js'
import { swiperMain } from './useSwiper'
import { ref, Ref } from 'vue'
import { IUpdateAppList, IUpdateAppListArray, useAppStore, useCurrentAppArray } from './useApp'
import { throttle } from '../utils/index'

const targetApp:Ref<HTMLElement | null> = ref(null)
let isInBox = false

let mainSortable: { toArray: () => IUpdateAppList }, arrayBoxSortable: { toArray: () => IUpdateAppList }

let isOutBox = false
let handleItem:HTMLElement
/**
 * 拖拽用的hook
 *
 * @param el -> 容器class/id
 * @returns
 */
const useAppDrag = (el:string) => {
  const { updateAppList, findAppArrayChildren } = useAppStore()
  const { changeCurrentApp, currentApp, dragingCloseToast } = useCurrentAppArray()

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
    group: { name: 'app-group', pull: true, put: true },
    animation: 500,
    ghostClass: 'box-ghost',
    forceFallback: true,
    fallbackOnBody: true,
    handle: '.app-box',
    onEventMove: throttle(function(evt:TouchEvent) {
      if (el != '#appArray-box') return
      const clientX = evt.changedTouches[0].clientX
      const clientY = evt.changedTouches[0].clientY
      // 表示当前坐标在box外
      if (appArrayBoxInfo.left > clientX || appArrayBoxInfo.right < clientX || appArrayBoxInfo.top > clientY || appArrayBoxInfo.bottom < clientY) {
        isOutBox = true
        dragingCloseToast()
      }
    }, 50),
    onStart: function(evt:any) {
      toCenterDiff = evt.originalEvent.targetTouches[0].clientX - evt.item.offsetLeft
      toCenterDiff = evt.item.offsetWidth / 2 - toCenterDiff
      swiperMain.value.allowTouchMove = false
      handleItem = evt.item
    },
    onMove: function(evt:any) {
      const left1 = evt.relatedRect.left + evt.relatedRect.width / 3
      const right1 = evt.relatedRect.left + evt.relatedRect.width / 3 * 2
      const top1 = evt.relatedRect.top + evt.relatedRect.height / 5
      const bottom1 = evt.relatedRect.top + evt.relatedRect.height / 5 * 4
      const clineX = evt.originalEvent.clientX + toCenterDiff
      const clineY = evt.originalEvent.clientY

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
          }, 600)
          return false
        }
      }
    },
    // 拖动结束
    onEnd: function(evt:any) {
      // changeCurrentApp(null)
      // 获取拖动后的排序
      let mainArr:IUpdateAppList = mainSortable.toArray()
      let curChildrenArray:IUpdateAppList = []

      // 如果拖拽停留点有目标
      if (targetApp.value) {
        targetApp.value.classList.remove('changeToBox')
        let targetKey = targetApp.value.dataset.id!
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
          mainArr.splice(mainArr.indexOf(targetKey), 1, newItem)
          mainArr.splice(mainArr.indexOf(itemKey), 1)
        } else {
          // 目标是apps
          let children = findAppArrayChildren(targetKey)
          children.push(itemKey)
          mainArr[mainArr.indexOf(targetKey)] = {
            key: targetKey,
            children: children
          }
          mainArr.splice(mainArr.indexOf(itemKey), 1)
        }
      }

      // app组内发生了拖拽
      if (currentApp && arrayBoxSortable) {
        curChildrenArray = arrayBoxSortable.toArray()
        let fatherKey = currentApp.value?.key
        let fatherIndex = mainArr.findIndex(e => e == fatherKey)

        mainArr[fatherIndex] = {
          key: mainArr[fatherIndex],
          children: curChildrenArray
        } as IUpdateAppListArray
      }

      if (isOutBox) {
        changeCurrentApp(null)
        handleItem.parentElement?.removeChild(handleItem)
        isOutBox = false
      }

      updateAppList(mainArr)
      swiperMain.value.allowTouchMove = true
    }
  }
  // 初始化
  if (el == '#appArray-box') {
    arrayBoxSortable = Sortable.create(box, ops)
  } else {
    mainSortable = Sortable.create(box, ops)
  }
}

export default useAppDrag
