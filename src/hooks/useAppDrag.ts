import Sortable from 'sortablejs'
import { swiperMain } from './useSwiper'
import { ref, Ref } from 'vue'
import { useAppStore } from './useApp'

const targetApp:Ref<HTMLElement | null> = ref(null)
console.log('useAppDrag')

/**
 * 拖拽用的hook
 *
 * @param el -> 容器class/id
 * @returns
 */
const useAppDrag = (el:string) => {
  const { composeApps } = useAppStore()
  let box = document.querySelector(el) as HTMLElement
  let toCenterDiff = 0
  let ops = {
    animation: 500,
    ghostClass: 'box-ghost',
    forceFallback: false,
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

      /**
       * 思路：
       * 先让元素进入目标元素，对目标元素做标记，表示选中元素已进入
       * 表示进入时status == true
       * 当选中元素抵达目标元素对边时，表示移出
       *
       * 元素从一侧或两侧进入时，只能从剩余的边移出，或更换目标元素时修改状态
       *
       * 需要记录目标元素
       */

      // 拖拽元素在目标元素前面
      if (evt.willInsertAfter) {
        if (clineX > right1) {
          evt.related.classList.remove('changeToBox')
          targetApp.value = null

          return true
        }
      } else {
        // 拖拽元素在目标元素后面
        if (clineX < left1) {
          evt.related.classList.remove('changeToBox')
          targetApp.value = null
          return true
        }
      }
      // 位于中间部分
      if (left1 < clineX && clineX < right1 && clineY > top1 && clineY < bottom1) {
        evt.related.classList.add('changeToBox')
        targetApp.value = evt.related as HTMLElement
      } else {
        evt.related.classList.remove('changeToBox')
        targetApp.value = null
      }

      return false
    },
    // 拖动结束
    onEnd: function(evt:any) {
      // 获取拖动后的排序
      let arr = sortable.toArray()
      // alert(JSON.stringify(arr))
      if (targetApp.value) {
        targetApp.value.classList.remove('changeToBox')
        composeApps(targetApp.value?.dataset.id as string, evt.item.dataset.id as string)
      }
      swiperMain.value.allowTouchMove = true
    } }
  // 初始化
  const sortable = Sortable.create(box, ops)
  return {
    sortable
  }
}

export default useAppDrag
