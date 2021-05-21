<template>
  <canvas class="lock-canvas" ref="lockCanvas" width="300" height="300" @touchstart="canvasMoveStart" @touchmove="canvasMove" @touchend="canvasMoveEnd" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const CanvasOptions = {
  pointWidth: 80,
  pointColor: '#fff',
  activeColor: '#27ae60',
  errColor: '#c0392b',
  pointCoreWidth: 10,
  pointCoreColor: '#fff',
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
  props: {
    type: {
      type: String as PropType<'check' | 'set'>,
      default: 'check'
    },
    password: {
      type: String,
      default: ''
    }
  },
  emits: ['cb'],
  data() {
    const pointList:IPointObj[] = []
    const moveArr:number[] = []
    return {
      canvasWidth: 0,
      canvasHeight: 0,
      canvasLeft: 0,
      canvasTop: 0,
      pointList: pointList,
      moveArr: moveArr
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const canvas = this.$refs.lockCanvas as HTMLCanvasElement
      if (!canvas) return
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      this.ctx = ctx
      this.canvasWidth = canvas.width
      this.canvasHeight = canvas.height
      this.canvasLeft = canvas.offsetLeft
      this.canvasTop = canvas.offsetTop
      this.pointList = []
      if (this.pointList.length != 9) {
        for (let i = 0; i < 9; i++) {
          let { x, y } = this.getPointAxes(i)
          let newPoint:IPointObj = {
            x: x,
            y: y,
            status: false,
            value: i
          }
          this.pointList.push(newPoint)
        }
      }
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight) // 清空画布
      this.pointList.forEach(item => {
        this.createPoint(item)
      })
    },
    createPoint(obj: IPointObj, res = true): void {
      let color = CanvasOptions.pointColor
      if (obj.status) {
        color = res ? CanvasOptions.activeColor : CanvasOptions.errColor
      }
      this.ctx.beginPath()
      this.ctx.arc(obj.x, obj.y, CanvasOptions.pointWidth / 2 - 1, 0, Math.PI * 2, true)
      this.ctx.strokeStyle = color
      this.ctx.lineWidth = 1
      this.ctx.stroke()
      this.ctx.beginPath()
      this.ctx.arc(obj.x, obj.y, CanvasOptions.pointCoreWidth / 2, 0, Math.PI * 2, true)
      this.ctx.fillStyle = color
      this.ctx.fill()
    },
    getPointAxes(index: number): { x: number; y: number } {
      let res = {
        x: CanvasOptions.pointWidth * (index % 3) + CanvasOptions.columnSpace * (index % 3) + CanvasOptions.pointWidth / 2,
        y: CanvasOptions.pointWidth * Math.floor(index / 3) + CanvasOptions.rowSpace * Math.floor(index / 3) + CanvasOptions.pointWidth / 2
      }
      return res
    },
    drawLine(x:number, y:number, follow:boolean, res = true) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight) // 清空画布
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.strokeStyle = res ? CanvasOptions.activeColor : CanvasOptions.errColor
      this.ctx.lineWidth = 6
      this.ctx.lineJoin = 'round'
      this.ctx.lineCap = 'round'
      this.moveArr.forEach((v, i) => {
        if (i == 0) {
          this.ctx.moveTo(this.pointList[v - 1].x, this.pointList[v - 1].y)
        } else {
          this.ctx.lineTo(this.pointList[v - 1].x, this.pointList[v - 1].y)
        }
      })
      if (follow) {
        this.ctx.lineTo(x, y)
      }
      this.ctx.stroke()
      this.ctx.restore()
      this.pointList.forEach(item => {
        if (this.isInCircle(x, y, item) && !item.status) {
          this.moveArr.push(item.value + 1)
          item.status = true
        }
        this.createPoint(item, res)
      })
    },
    isInCircle(x: number, y: number, obj: IPointObj):boolean {
      let dis = Math.sqrt(Math.pow((obj.x - x), 2) + Math.pow((obj.y - y), 2))
      return dis <= CanvasOptions.pointWidth / 2
    },
    /**
     * 滑动
     */
    canvasMoveStart(e: TouchEvent): void {
      let { pageX: x, pageY: y } = e.targetTouches[0]
      x = x - this.canvasLeft
      y = y - this.canvasTop
      this.drawLine(x, y, true)
    },
    canvasMove(e: TouchEvent): void {
      let { pageX: x, pageY: y } = e.targetTouches[0]
      x = x - this.canvasLeft
      y = y - this.canvasTop
      this.drawLine(x, y, true)
    },
    canvasMoveEnd() {
      let res = this.moveArr.join('') == this.password
      if (this.type == 'set') {
        res = true
      }
      this.drawLine(0, 0, false, res)
      this.moveArr = []
      this.$emit('cb', this.moveArr.join(''), res)
      setTimeout(() => {
        this.init()
      }, 1000)
    }
  }
})
</script>

<style scoped>
.lock-canvas{
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
