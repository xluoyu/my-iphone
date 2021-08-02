import Sortable from 'sortablejs'

const useAppDrag = (el:string) => {
  let box = document.querySelector(el)
  let toCenterDiff = 0
  let ops = {
    animation: 500,
    ghostClass: 'box-ghost',
    forceFallback: false,
    onStart: function(evt) {
      toCenterDiff = evt.item.offsetWidth - evt.originalEvent.offsetX
      console.log(evt)
    },
    onMove: function(evt) {
      console.log('move', evt)
      const left1 = evt.relatedRect.left + evt.relatedRect.width / 3
      const right1 = evt.relatedRect.left + evt.relatedRect.width / 3 * 2
      const clineX = evt.originalEvent.clientX
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
        if (clineY > evt.relatedRect.top / 5) {
          evt.related.classList.remove('changeToBox')
        }
      }
      // 位于中间部分
      if (left1 < clineX && clineX < right1) {
        evt.related.classList.add('changeToBox')
        console.log(clineY, evt.relatedRect.bottom)
        if (evt.willInsertAfter && clineY > evt.relatedRect.bottom / 5 * 4) {
          evt.related.classList.remove('changeToBox')
        }
        if (!evt.willInsertAfter && clineY < evt.relatedRect.top / 5) {
          evt.related.classList.remove('changeToBox')
        }
      } else {
        evt.related.classList.remove('changeToBox')
      }
      if (evt.originalEvent.clientY > evt.relatedRect.top || evt.originalEvent.clientY > evt.relatedRect.top) { return false }
    },
    // 拖动结束
    onEnd: function(evt) {
      // console.log(evt)
      // 获取拖动后的排序
      let arr = sortable.toArray()
      // alert(JSON.stringify(arr))
      // console.log(arr)
    } }
  // 初始化
  var sortable = Sortable.create(box, ops)
}

export default useAppDrag
