<template>
  <div class="call">
    <div class="display" ref="displayEl">{{ inputValue }}</div>
    <div class="number-area">
      <div v-for="item in numberArray" :key="item" class="number-box" @click="pushInput(item)">{{ item }}</div>
    </div>
    <div class="handle">
      <div class="empty"></div>
      <a :href="`tel:${inputValue}`" class="call-btn iconfont icon-bohao"></a>
      <div class="remove" :style="{opacity: inputValue ? 1 : 0}" @click="removeInput">删除</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
    const inputValue = ref('')
    const displayEl = ref()

    const pushInput = (val:string) => {
      inputValue.value = inputValue.value + val
      displayEl.value.scrollLeft = displayEl.value.offsetWidth
    }

    const removeInput = () => {
      inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1)
    }

    return {
      displayEl,
      pushInput,
      removeInput,
      numberArray,
      inputValue
    }
  }
})
</script>

<style lang="less" scoped>
.call{
  padding-top: 4vh;
}
.display{
  width: 300px;
  text-align: center;
  line-height: 50px;
  min-height: 50px;
  font-size: 36px;
  display: block;
  margin: 0 auto 4vh;
  overflow: auto;
}
.number-area{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 280px;
  margin: 0 auto;

}
.number-box{
  width: 80px;
  height: 80px;
  background: #eee;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  margin-bottom: 15px;
  font-size: 36px;
}
.handle{
  width: 280px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  .empty{
    width: 80px;
  }
  .remove{
    width: 80px;
    text-align: center;
    font-size: 24px;
    line-height: 80px;
  }
}
.call-btn{
  font-size: 80px;
  color: rgb(28, 197, 13);
  display: block;
  width: fit-content;
}
</style>
