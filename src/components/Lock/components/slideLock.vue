<template>
  <canvas
    class="lock-canvas"
    ref="canvasEl"
    width="300"
    height="300"
    @touchstart="canvasMoveStart"
    @touchmove="canvasMove"
    @touchend="canvasMoveEnd"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, Ref, SetupContext } from 'vue'

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
  x: number
  y: number
  status: boolean
  value: number
}

function useHandleCanvas() {
  const canvasData = reactive({
    width: 0,
    height: 0,
    left: 0,
    top: 0
  })
  const pointList:Ref<IPointObj[]> = ref([])
  const moveArr: Ref<number[]> = ref([])

  let canvasEl:Ref<null | HTMLCanvasElement> = ref(null)
  let ctx: CanvasRenderingContext2D

  /**
   * 初始化canvas
   */
  const init = () => {
    const canvasRoot = canvasEl.value
    if (!canvasRoot) return
    ctx = canvasRoot.getContext('2d') as CanvasRenderingContext2D
    canvasData.width = canvasRoot.width
    canvasData.height = canvasRoot.height
    canvasData.left = canvasRoot.offsetLeft
    canvasData.top = canvasRoot.offsetTop
    pointList.value = []
    if (pointList.value.length != 9) {
      for (let i = 0; i < 9; i++) {
        let { x, y } = getPointAxes(i)
        let newPoint: IPointObj = {
          x: x,
          y: y,
          status: false,
          value: i
        }
        pointList.value.push(newPoint)
      }
    }
    ctx.clearRect(0, 0, canvasData.width, canvasData.height) // 清空画布
    pointList.value.forEach((item) => {
      createPoint(item)
    })
  }

  /**
   * 初始化点位
   */
  const getPointAxes = (index:number): { x: number; y: number } => {
    let res = {
      x:
        CanvasOptions.pointWidth * (index % 3) +
        CanvasOptions.columnSpace * (index % 3) +
        CanvasOptions.pointWidth / 2,
      y:
        CanvasOptions.pointWidth * Math.floor(index / 3) +
        CanvasOptions.rowSpace * Math.floor(index / 3) +
        CanvasOptions.pointWidth / 2
    }
    return res
  }

  /**
   * 创建点
   */
  const createPoint = (obj: IPointObj, res = true) => {
    let color = CanvasOptions.pointColor
    if (obj.status) {
      color = res ? CanvasOptions.activeColor : CanvasOptions.errColor
    }
    ctx.beginPath()
    ctx.arc(obj.x, obj.y, CanvasOptions.pointWidth / 2 - 1, 0, Math.PI * 2, true)
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(obj.x, obj.y, CanvasOptions.pointCoreWidth / 2, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
  }

  const drawLine = (x: number, y: number, follow: boolean, res = true) => {
    ctx.clearRect(0, 0, canvasData.width, canvasData.height) // 清空画布
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = res ? CanvasOptions.activeColor : CanvasOptions.errColor
    ctx.lineWidth = 6
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    moveArr.value.forEach((v, i) => {
      if (i == 0) {
        ctx.moveTo(pointList.value[v - 1].x, pointList.value[v - 1].y)
      } else {
        ctx.lineTo(pointList.value[v - 1].x, pointList.value[v - 1].y)
      }
    })
    if (follow && moveArr.value.length) {
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.restore()
    pointList.value.forEach((item) => {
      if (isInCircle(x, y, item) && !item.status) {
        moveArr.value.push(item.value + 1)
        item.status = true
      }
      createPoint(item, res)
    })
  }

  /**
   * 滑动
   */
  const canvasMoveStart = (e: TouchEvent): void => {
    let { pageX: x, pageY: y } = e.targetTouches[0]
    x = x - canvasData.left
    y = y - canvasData.top
    drawLine(x, y, true)
  }
  const canvasMove = (e: TouchEvent): void => {
    let { pageX: x, pageY: y } = e.targetTouches[0]
    x = x - canvasData.left
    y = y - canvasData.top
    drawLine(x, y, true)
  }
  const canvasMoveEnd = (password:string, context:SetupContext<any>) => {
    let moveStr = moveArr.value.join('')
    let res = password ? moveStr == password : true
    drawLine(0, 0, false, res)
    context.emit('callback', moveStr, res)
    moveArr.value = []
    setTimeout(() => {
      init()
    }, 300)
  }

  onMounted(init)

  return {
    canvasEl,
    canvasMoveStart,
    canvasMove,
    canvasMoveEnd
  }
}

/**
 * 坐标是否在圆内
 *
 * @return boolean
 */
const isInCircle = (x: number, y: number, obj: IPointObj): boolean => {
  let dis = Math.sqrt(Math.pow(obj.x - x, 2) + Math.pow(obj.y - y, 2))
  return dis <= CanvasOptions.pointWidth / 2
}

export default defineComponent({
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  emits: ['callback'],
  setup(props, context) {
    const { canvasEl,
      canvasMoveStart,
      canvasMove,
      canvasMoveEnd } = useHandleCanvas()

    return {
      canvasEl,
      canvasMoveStart,
      canvasMove,
      canvasMoveEnd: () => {
        canvasMoveEnd(props.password, context)
      }
    }
  }
})
</script>

<style scoped>
.lock-canvas {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
