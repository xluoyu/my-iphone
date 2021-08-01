<template>
  <div>
    <div :class="{ input: true, dance: dance }">
      <div
        :class="{ garden: true, fill: inputList.length >= item }"
        v-for="item in 6"
        :key="item"
      ></div>
    </div>
    <div class="keyboard">
      <div class="btn" v-for="item in keys" :key="item" @touchend="ketDown(item)">{{ item }}</div>
      <div class="btn empty"></div>
      <div class="btn" @touchend="ketDown(0)">0</div>
      <div class="btn empty"></div>
    </div>
    <div class="handle">
      <slot><div></div></slot>
      <div @click="remove" v-show="inputList.length">删除</div>
      <div @click="cancel" v-show="!inputList.length">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export default defineComponent({
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  emits: ['callback', 'close'],
  setup(props, ctx) {
    const inputList:Ref<number[]> = ref([])
    const dance = ref(false)

    const ketDown = (num: number) => {
      if (inputList.value.length >= 6) return
      inputList.value.push(num)
      if (inputList.value.length == 6) {
        verification()
      }
    }

    const verification = () => {
      let inputNum = inputList.value.join('')
      if (!props.password || props.password == inputNum) {
        inputList.value = []
        ctx.emit('callback', inputNum, true)
      } else {
        dance.value = true
        setTimeout(() => {
          dance.value = false
          inputList.value = []
          ctx.emit('callback', inputNum, false)
        }, 500)
      }
    }

    const cancel = () => {
      ctx.emit('close')
    }

    const remove = () => {
      inputList.value.pop()
    }

    return {
      keys,
      inputList,
      dance,
      ketDown,
      cancel,
      remove
    }
  }
})
</script>

<style lang="less" scoped>
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  &.dance {
    animation: dance 0.2s linear 0s 2;
    .garden.fill {
      background: #e93232;
    }
  }
  .garden {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 0 10px;
    &.fill {
      border-color: transparent;
      background: #fff;
    }
  }
}
@keyframes dance {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-20px);
  }
  70% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
.keyboard {
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px auto 0;
  .btn {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(3, 3, 3, 0.4);
    text-align: center;
    line-height: 80px;
    margin-bottom: 30px;
    font-size: 36px;
  }
  .empty {
    background: none;
  }
}
.handle {
  width: 300px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
</style>
