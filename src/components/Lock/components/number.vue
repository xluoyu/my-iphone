<template>
  <div class="container">
    <div class="top">输入密码</div>
    <div :class="{input:true, dance:dance}">
      <div :class="{garden:true, fill:inputList.length >= item}" v-for="item in 6" :key="item"></div>
    </div>
    <div class="keyboard">
      <div class="btn" v-for="item in keys" :key="item" @click="ketDown(item)">{{ item }}</div>
      <div class="btn empty"></div>
      <div class="btn" @click="ketDown(0)">0</div>
      <div class="btn empty"></div>
    </div>
    <div class="handle">
      <div @click="op">紧急操作</div>
      <div @click="remove" v-show="inputList.length">删除</div>
      <div @click="cancel" v-show="!inputList.length">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface IData{
  keys: number[],
  inputList: number[],
  dance: boolean
}

export default defineComponent({
  emits: ['openLock', 'cancel'],
  data():IData {
    return {
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      inputList: [],
      dance: false
    }
  },
  methods: {
    ketDown(num:number) {
      if (this.inputList.length >= 6) return
      this.inputList.push(num)
      if (this.inputList.length == 6) {
        this.verification()
      }
    },
    verification() {
      let inputNum = this.inputList.join('')
      if (this.$store.state.lockNumberPwd == inputNum) {
        this.$emit('openLock')
      } else {
        this.dance = true
        setTimeout(() => {
          this.dance = false
          this.inputList = []
        }, 500)
      }
    },
    op() {
      this.$emit('openLock')
    },
    cancel() {
      this.$emit('cancel')
    },
    remove() {
      this.inputList.pop()
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
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  &.dance{
    animation: dance .2s linear 0s 2;
  }
  .garden{
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 0 10px;
    &.fill{
      background: #fff;
    }
  }
}
@keyframes dance {
  0%{
    transform: translateX(0);
  }
  25%{
    transform: translateX(-20px);
  }
  70%{
    transform: translateX(20px);
  }
  100%{
    transform: translateX(0px);
  }
}
.keyboard{
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px auto 0;
  .btn{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(3, 3, 3, .4);
    text-align: center;
    line-height: 80px;
    margin-bottom: 30px;
    font-size: 36px;
  }
  .empty{
    background: none;
  }
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
