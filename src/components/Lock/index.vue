<template>
  <div class="lock" @touchstart="touchStart">
    <img src="https://xluoyu.github.io/image-riverbed/iphone/background/background.jpg" alt="" class="bg" />
    <div
      class="notice-container"
      v-if="lockStep == LockType.Normal"
      :style="`-webkit-backdrop-filter: blur(${curBlurNum}px);transition: all ${transition}s;transform: translateY(-${translateY}px);`"
    >
      <div class="top">
        <van-icon name="lock" color="#fff" />
        <span>向上滑动解锁</span>
      </div>
      <div class="time-box">
        <h2>{{ time }}</h2>
        <p>{{ date }}</p>
        <p class="tips">{{ tipsContent }}</p>
      </div>
    </div>
    <NumberView v-if="lockStep == LockType.Number" @openLock="openLock" @cancel="cancel" />
    <SlideView v-if="lockStep == LockType.Slide" @openLock="openLock" @cancel="cancel" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { hitokoto } from '@/api'
import NumberView from './components/number.vue'
import SlideView from './components/slide.vue'
import { ILockType } from '#/index'
import useLock from '../../hooks/useLock'

const weekArr = ['日', '一', '二', '三', '四', '五', '六']

// 获取时间
function useGetTime() {
  let time = ref<string>('')
  let date = ref<string>('')
  const timeFn = () => {
    let curdate = new Date()
    let month: number | string = curdate.getMonth() + 1
    let day: number | string = curdate.getDate()
    let hour: number | string = curdate.getHours()
    hour = hour < 10 ? '0' + hour : hour
    let min: number | string = curdate.getMinutes()
    min = min < 10 ? '0' + min : min
    let week = curdate.getDay()

    time.value = hour + ':' + min
    date.value = month + '月' + day + '日 周' + weekArr[week]
  }
  timeFn()
  setTimeout(timeFn, 1000)

  return {
    time,
    date
  }
}

// 滑动事件
function useTouchStart(lockStep: Ref<ILockType>, password: Ref<string>) {
  const transition = ref(0)
  const curBlurNum = ref(0)
  const translateY = ref(0)
  const windowHeight = ref(window.innerHeight | 667)
  const { lockType, changeLockState } = useLock()

  const touchStart = (down: TouchEvent) => {
    let oldY = down.touches[0].pageY
    let diffY = 0
    let blurNum = 0

    let moveFn = (e: TouchEvent): void => {
      transition.value = 0
      let newY = e.touches[0].pageY
      diffY = oldY - newY
      blurNum = Math.floor((diffY / (windowHeight.value * 0.8)) * 100) / 10
      curBlurNum.value = Math.max(0, blurNum)
      translateY.value = Math.max(0, diffY)
    }
    let endFn = (): void => {
      transition.value = 0.3
      if (diffY > windowHeight.value * 0.2) {
        diffY = windowHeight.value
      } else {
        diffY = 0
      }
      translateY.value = diffY
      curBlurNum.value = diffY ? 1 : 0
      if (translateY.value) {
        setTimeout(() => {
          if (!password.value || lockType.value == ILockType.Normal) {
            // this.$store.commit('LockStore/changeLock', false)
            changeLockState()
          } else {
            lockStep.value = lockType.value
          }
        }, 100)
      }
      document.removeEventListener('touchmove', moveFn)
      document.removeEventListener('touchend', endFn)
    }
    document.addEventListener('touchmove', moveFn)
    document.addEventListener('touchend', endFn)
  }

  return {
    transition,
    curBlurNum,
    translateY,
    windowHeight,
    touchStart
  }
}

// 一言接口
function useGetTips() {
  const tipsContent = ref('')
  hitokoto().then((res) => {
    tipsContent.value = res.hitokoto
  })

  return tipsContent
}

export default defineComponent({
  components: {
    NumberView,
    SlideView
  },
  setup() {
    const lockStep = ref(ILockType.Normal)
    const { lockPwd, changeLockState } = useLock()
    const { time, date } = useGetTime()
    const {
      transition,
      curBlurNum,
      translateY,
      windowHeight,
      touchStart
    } = useTouchStart(lockStep, lockPwd)
    const tipsContent = useGetTips()

    const cancel = () => {
      lockStep.value = ILockType.Normal
    }

    const openLock = () => {
      setTimeout(() => {
        changeLockState()
        lockStep.value = ILockType.Normal
      }, 100)
    }

    return {
      lockStep,
      time,
      date,
      transition,
      curBlurNum,
      translateY,
      windowHeight,
      touchStart,
      LockType: ILockType,
      tipsContent,
      openLock,
      cancel
    }
  }
})
</script>

<style lang="less" scoped>
.lock {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--lock-zIndex);
  width: 100%;
  height: 100%;
  transition: all 0s;
  .bg {
    position: absolute;
    object-fit: cover;
    height: 100%;
    z-index: -1;
  }
}

.notice-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .top {
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 30px;
  }
}
.time-box {
  -webkit-filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.5));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: normal;
    font-size: 60px;
  }
  p {
    font-size: 20px;
  }
  .tips {
    width: 80%;
    font-size: 16px;
    text-align: center;
    margin-top: 70px;
  }
}
</style>
