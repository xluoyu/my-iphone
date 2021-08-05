<template>
  <div id="safari">
    <div class="header">
      <div class="header-bar">
        <input
          type="search"
          v-model="searchValue"
          :class="`input ${status ? 'small' : 'big'}`"
          @focus="changeStatus(true)"
          @blur="changeStatus(false)"
          @keyup.enter="search"
          placeholder="搜索或输入网站名称"
        >
        <span class="cancel" @click="changeStatus(false)">取消</span>
      </div>
    </div>
    <iframe :src="searchUrl" frameborder="0" class="iframe"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const status = ref(false)
    const changeStatus = (value:boolean) => {
      status.value = value
    }

    const searchValue = ref('')
    const searchUrl = ref('')
    const search = () => {
      let value = searchValue.value
      if (value != '') {
        changeStatus(false)
        let reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z][-a-zA-Z]{0,62})+\.?/
        if (!reg.test(searchValue.value)) {
          searchUrl.value = `https://www.baidu.com/s?ie=UTF-8&wd=${value}`
        } else {
          if (value.indexOf('https://') == -1 || value.indexOf('http://') == -1) {
            searchUrl.value = 'https://' + value
          } else {
            searchUrl.value = value
          }
        }
      }
    }

    return {
      status,
      search,
      searchUrl,
      searchValue,
      changeStatus
    }
  }
})
</script>

<style lang="less" scoped>
#safari{
  background: #fff;
  height: 100%;
}
.header{
  height: 40px;
  width: 100%;
  overflow: hidden;
  background: #fdfdfd;
  border-bottom: 1px solid #eee;
  padding: 0 40px 0 10px;
}
.header-bar{
  height: 30px;
  margin-top: 5px;
  line-height: 30px;
  white-space:nowrap;
  overflow: hidden;
  width: 100%;
  .input{
    &.big{
      text-align: center;
      width: 100%;
    }
    &.small{
      text-align: left;
      width: calc(100% - 60px);
    }
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background: #ccc;
    border-radius: 12px;
    border: none;
    padding: 0 10px;
    box-sizing: border-box;
    transition: all .3s;
    transform: translate3d(0,0,0);
    will-change: width;
  }
  .cancel{
    color: #4395ff;
    margin-left: 15px;
  }
}
.iframe{
  width: 100%;
  height: calc(100% - 30px);
}

.input-leave-active {
  transition: all .3s;
}
.input-enter-from,
.input-leave-to {
  input{
    width: 100%;
  }
}

</style>
