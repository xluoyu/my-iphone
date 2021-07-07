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
import { defineComponent } from 'vue'

interface IData {
  keys: number[]
  inputList: number[]
  dance: boolean
}

export default defineComponent({
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  emits: ['callback', 'close'],
  data(): IData {
    return {
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      inputList: [],
      dance: false
    }
  },
  methods: {
    ketDown(num: number) {
      if (this.inputList.length >= 6) return
      this.inputList.push(num)
      if (this.inputList.length == 6) {
        this.verification()
      }
    },
    verification() {
      let inputNum = this.inputList.join('')
      if (!this.password || this.password == inputNum) {
        this.inputList = []
        this.$emit('callback', inputNum, true)
      } else {
        this.dance = true
        setTimeout(() => {
          this.dance = false
          this.inputList = []
          this.$emit('callback', inputNum, false)
        }, 500)
      }
    },
    cancel() {
      this.$emit('close')
    },
    remove() {
      this.inputList.pop()
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
