<template>
  <div class="lock" @touchstart="touchstart">
    <img src="https://z3.ax1x.com/2021/04/28/gPPUFx.jpg" alt="" class="bg">
    <div class="notice-container" v-if="lockStep == LockType.Normal" :style="`-webkit-backdrop-filter: blur(${blurNum}px);transition: all ${transition}s;transform: translateY(-${diffY}px);`">
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
    <NumberLock v-if="lockStep == LockType.Number" @openLock="openLock" @cancel="cancel" />
    <SlideLock v-if="lockStep == LockType.Slide" @openLock="openLock" @cancel="cancel" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { hitokoto } from '@/api'
import NumberLock from './components/number.vue'
import SlideLock from './components/slide.vue'
import { ILockType } from '#/index'
const weekArr = ['日', '一', '二', '三', '四', '五', '六']

export default defineComponent({
  components: {
    NumberLock,
    SlideLock
  },
  setup() {
    let time = ref<string>('')
    let date = ref<string>('')
    let timeFn = () => {
      let curdate = new Date()
      let month:number|string = curdate.getMonth() + 1
      let day:number|string = curdate.getDate()
      let hour:number|string = curdate.getHours()
      hour = hour < 10 ? '0' + hour : hour
      let min:number|string = curdate.getMinutes()
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
  },
  data() {
    return {
      tipsContent: '',
      diffY: 0,
      windowHeight: 667,
      blurNum: 0,
      transition: 0,
      lockStep: 'normal'
    }
  },
  computed: {
    LockType() {
      return ILockType
    }
  },
  mounted() {
    this.getHitokoto()
    this.windowHeight = window.innerHeight
  },
  methods: {
    getHitokoto() {
      hitokoto().then(res => {
        this.tipsContent = res.hitokoto
      })
    },
    /**
     * 上滑解锁
     */
    touchstart(down:TouchEvent) {
      let oldY = down.touches[0].pageY
      let diffY = 0
      let blurNum = 0
      let moveFn = (e: TouchEvent):void => {
        this.transition = 0
        let newY = e.touches[0].pageY
        diffY = oldY - newY
        blurNum = Math.floor(diffY / (this.windowHeight * 0.8) * 100) / 10
        this.blurNum = Math.max(0, blurNum)
        this.diffY = Math.max(0, diffY)
      }
      let endFn = ():void => {
        this.transition = 0.3
        if (diffY > this.windowHeight * 0.2) {
          diffY = this.windowHeight
        } else {
          diffY = 0
        }
        this.diffY = diffY
        this.blurNum = diffY ? 1 : 0
        if (this.diffY) {
          setTimeout(() => {
            if (this.$store.state.lockType == ILockType.Normal) {
              this.$store.commit('changeLock', false)
            } else {
              this.lockStep = this.$store.state.lockType
            }
          }, 100)
        }
        document.removeEventListener('touchmove', moveFn)
        document.removeEventListener('touchend', endFn)
      }
      document.addEventListener('touchmove', moveFn)
      document.addEventListener('touchend', endFn)
    },
    openLock() {
      setTimeout(() => {
        this.$store.commit('changeLock', false)
        this.lockStep = ILockType.Normal
      }, 100)
    },
    cancel() {
      this.lockStep = ILockType.Normal
    }
  }
})
</script>

<style lang="less" scoped>
.lock{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  transition: all 0s;
  .bg{
    position: absolute;
    object-fit: cover;
    height: 100%;
    z-index: -1;
  }
}

.notice-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .top{
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 30px;
  }
}
.time-box{
  -webkit-filter: drop-shadow(2px 2px 10px rgba(0,0,0,.5));
  filter: drop-shadow(2px 2px 10px rgba(0,0,0,.5));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-weight: normal;
    font-size: 60px;
  }
  p{
    font-size: 20px;
  }
  .tips{
    width: 80%;
    font-size: 16px;
    text-align: center;
    margin-top: 70px;
  }
}
</style>
