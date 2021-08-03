import Sortable from 'sortablejs'
import useSwiper from './useSwiper'

const { swiperMain } = useSwiper()

const useAppDrag = (el:string) => {
  let box = document.querySelector(el)
  let toCenterDiff = 0
  let ops = {
    animation: 500,
    ghostClass: 'box-ghost',
    forceFallback: false,
    onStart: function(evt) {
      toCenterDiff = evt.originalEvent.targetTouches[0].clientX - evt.item.offsetLeft
      toCenterDiff = evt.item.offsetWidth / 2 - toCenterDiff
      swiperMain.value.allowTouchMove = false
    },
    onMove: function(evt) {
      const left1 = evt.relatedRect.left + evt.relatedRect.width / 3
      const right1 = evt.relatedRect.left + evt.relatedRect.width / 3 * 2
      const top1 = evt.relatedRect.top + evt.relatedRect.height / 5
      const bottom1 = evt.relatedRect.top + evt.relatedRect.height / 5 * 4
      const clineX = evt.originalEvent.clientX + toCenterDiff
      const clineY = evt.originalEvent.clientY
      // 拖拽元素在目标元素前面
      if (evt.willInsertAfter) {
        if (clineX > right1) {
          evt.related.classList.remove('changeToBox')
          return true
        }
      } else {
        // 拖拽元素在目标元素后面
        if (clineX < left1) {
          evt.related.classList.remove('changeToBox')
          return true
        }
      }
      // 位于中间部分
      if (left1 < clineX && clineX < right1 && clineY > top1 && clineY < bottom1) {
        evt.related.classList.add('changeToBox')
      } else {
        evt.related.classList.remove('changeToBox')
      }

      return false
    },
    // 拖动结束
    onEnd: function(evt) {
      // 获取拖动后的排序
      let arr = sortable.toArray()
      // alert(JSON.stringify(arr))
      console.log(arr)
      swiperMain.value.allowTouchMove = true
    } }
  // 初始化
  var sortable = Sortable.create(box, ops)
}

export default useAppDrag
