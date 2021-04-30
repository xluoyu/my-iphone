import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.less'
import { onMounted, ref, nextTick, Ref } from 'vue'
Swiper.use([Pagination])

interface IuseSwiper {
  containerBgX: Ref<number>,
  containerBgDuration: Ref<number>
}

const useSwiper = ():IuseSwiper => {
  const containerBgX = ref<number>(0)
  const containerBgDuration = ref<number>(0)

  onMounted(() => {
    nextTick(() => {
      new Swiper('.my-swipe', {
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

  return {
    containerBgX,
    containerBgDuration
  }
}

export default useSwiper
