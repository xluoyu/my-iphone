<template>
  <div class="container">
    <div class="top">手势解锁</div>
    <canvas class="lock-canvas" ref="lockCanvas" width="300" height="300" @touchmove="canvasMove" />
    <div class="handle">
      <div @click="op">紧急操作</div>
      <div @click="cancel">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const CanvasOptions = {
  pointWidth: 80,
  pointColor: '#ccc',
  pointCoreWidth: 10,
  pointCoreColor: 'rgba(233, 233, 233, 0.8)',
  columnSpace: 30,
  rowSpace: 30
}

interface IPointObj {
  x: number,
  y: number,
  status: boolean,
  value: number
}

export default defineComponent({
  emits: ['openLock', 'cancel'],
  data() {
    const pointList:IPointObj[] = []
    return {
      canvasWidth: 0,
      canvasHeight: 0,
      pointList: pointList
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const canvas = this.$refs.lockCanvas as HTMLCanvasElement
      console.log(canvas.height)
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      this.ctx = ctx
      this.canvasWidth = canvas.width
      this.canvasHeight = canvas.height
      this.initView(ctx)
    },
    initView(ctx:CanvasRenderingContext2D) {
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      for (let i = 0; i < 9; i++) {
        let { x, y } = this.getPointAxes(i)
        let newPoint:IPointObj = {
          x: x,
          y: y,
          status: false,
          value: i
        }
        this.pointList.push(newPoint)
        this.createPoint(ctx, newPoint)
      }
    },
    createPoint(ctx: CanvasRenderingContext2D, obj: IPointObj) {
      ctx.beginPath()
      ctx.arc(obj.x, obj.y, CanvasOptions.pointWidth / 2 - 1, 0, Math.PI * 2, true)
      ctx.strokeStyle = CanvasOptions.pointColor
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(obj.x, obj.y, CanvasOptions.pointCoreWidth / 2, 0, Math.PI * 2, true)
      ctx.fillStyle = CanvasOptions.pointCoreColor
      ctx.fill()
    },
    getPointAxes(index: number) {
      let res = {
        x: CanvasOptions.pointWidth * (index % 3) + CanvasOptions.columnSpace * (index % 3) + CanvasOptions.pointWidth / 2,
        y: CanvasOptions.pointWidth * Math.floor(index / 3) + CanvasOptions.rowSpace * Math.floor(index / 3) + CanvasOptions.pointWidth / 2
      }
      return res
    },
    canvasMove(e: TouchEvent) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight) // 清空画布
      this.ctx.save()
    },
    op() {
      this.$emit('openLock')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
})
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  backdrop-filter: blur(3px);
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top{
  text-align: center;
  line-height: 30px;
  margin: 20px auto;
  font-size: 28px;
}
.lock-canvas{
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.handle{
  width: 300px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
</style>
