<template>
  <div class="main">
    <van-cell is-link :center="true" :border="false" class="userInfo-box">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="userInfo">
          <img :src="userInfo.photo" alt="" class="photo">
          <div class="info">
            <div>{{ userInfo.name }}</div>
          </div>
        </div>
      </template>
    </van-cell>

    <van-cell-group class="cellGroup">
      <van-cell title="显示" is-link icon="https://z3.ax1x.com/2021/05/20/goXxnH.png" title-class="cell" />
      <van-cell title="密码" is-link icon="https://z3.ax1x.com/2021/05/21/g7T7QJ.png" title-class="cell" />
    </van-cell-group>

    <van-cell-group class="cellGroup">
      <van-cell title="关于本机" is-link icon="graphic" title-class="cell" />
    </van-cell-group>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      userInfo: {
        photo: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PgglHDjWo6EvMlyYHHuTaYALZ5TNib69HLaMaiaOOU9vwV0fgZAqQvw4sNy68ibwaPHZWVWytfB3wL6XN7LexPMFQ/132',
        name: 'Vae'
      }
    }
  }
})
</script>

<style lang="less" scoped>
.userInfo-box{
  margin: 10px 0 20px;
  border-top: 1px solid #ebedf0;
  border-bottom: 1px solid #ebedf0;
}
.userInfo{
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  .photo{
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 10px;
  }
  .info{
    font-size: 16px;
  }
}
.cellGroup{
  margin-bottom: 20px;
  .cell{
    font-size: 28px;
  }
}
</style>
