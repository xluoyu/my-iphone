import { ref } from 'vue'

const dragStatus = ref(false)

let timeOutEvent = 0

export const useAppDragStatus = () => {
  const changeDragStatus = () => {
    dragStatus.value = !dragStatus.value
  }

  const gotouchstart = (e:TouchEvent) => {
    e.stopPropagation()
    if (dragStatus.value) return
    clearTimeout(timeOutEvent)
    timeOutEvent = window.setTimeout(() => {
      timeOutEvent = 0
      longTap()
    }, 600)
  }

  const gotouchend = () => {
    clearTimeout(timeOutEvent)
  }

  // 长按事件
  const longTap = () => {
    changeDragStatus()
  }

  return {
    dragStatus,
    changeDragStatus,
    gotouchstart,
    gotouchend
  }
}

