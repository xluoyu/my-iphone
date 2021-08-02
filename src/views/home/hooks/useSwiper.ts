import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.less'
import { onMounted, ref, nextTick, Ref, watchEffect } from 'vue'
import { useAppDragStatus } from './useAppDragStatus'
Swiper.use([Pagination])

const useSwiper = () => {
  const containerBgX = ref<number>(0)
  const containerBgDuration = ref<number>(0)
  let swiperMain = ref<any>(null)

  onMounted(() => {
    nextTick(() => {
      swiperMain.value = new Swiper('.my-swipe', {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false,
        watchSlidesProgress: true,
        on: {
          progress: (swiper, progress) => {
            let newValue = Number((progress * 50).toFixed(2))
            if (Math.abs(newValue - containerBgX.value) > 20) {
              containerBgDuration.value = 0.3
            } else {
              containerBgDuration.value = 0
            }
            containerBgX.value = newValue
          }
        }
      })
    })
  })

  const { dragStatus } = useAppDragStatus()

  watchEffect(() => {
    if (swiperMain.value) swiperMain.value.allowTouchMove = !dragStatus.value
  })

  return {
    containerBgX,
    containerBgDuration,
    swiperMain
  }
}

export default useSwiper