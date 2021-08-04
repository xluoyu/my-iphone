import { ref } from 'vue'

const dragStatus = ref(false)

let timeOutEvent = 0

export const useAppDragStatus = () => {
  const changeDragStatus = () => {
    dragStatus.value = !dragStatus.value
  }
  let longStatus = false // 触发长按事件
  const gotouchstart = () => {
    if (dragStatus.value) return
    clearTimeout(timeOutEvent)
    timeOutEvent = window.setTimeout(() => {
      timeOutEvent = 0
      longTap()
    }, 600)
  }

  const gotouchend = () => {
    clearTimeout(timeOutEvent)
    if (longStatus) {
      // 触发长安后不再执行点击事件
      longStatus = false
      return
    }
  }

  // 长按事件
  const longTap = () => {
    longStatus = true
    changeDragStatus()
  }

  return {
    dragStatus,
    changeDragStatus,
    gotouchstart,
    gotouchend
  }
}

