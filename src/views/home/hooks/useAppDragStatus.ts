import { ref } from 'vue'
import { IApp } from '#/index'

const dragStatus = ref(false)

let timeOutEvent = 0

export const useAppDragStatus = (app?:IApp) => {
  const changeDragStatus = () => {
    dragStatus.value = !dragStatus.value
  }

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

