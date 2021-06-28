<template>
  <div class="app" :id="app.key" @click="open">
    <img :src="app.photo" alt="">
    <p>{{ app.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from 'vue'
import { IApp } from '#/index'
import { mapState } from 'vuex'
export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => { return {} }
    }
  },
  computed: {
    ...mapState({
      appDragStatus: state => (state as any).appDragStatus
    })
  },
  methods: {
    open() {
      if (this.appDragStatus) return
      let appName = this.app.key
      switch (appName) {
        case 'clock':
          this.$store.commit('LockStore/changeLock', true)
          break
        case 'camera':
          let input = document.createElement('input')
          input.setAttribute('type', 'file')
          input.setAttribute('accept', 'image/*')
          input.setAttribute('capture', 'environment')
          input.addEventListener('change', () => {
            const reads = new FileReader()
            let fileDate = input.files ? input.files[0] : null
            if (!fileDate) return
            reads.readAsDataURL(fileDate)
            reads.onload = e => {
              const imgReander = () => h('img', {
                src: e?.target?.result,
                style: {
                  width: '100%'
                }
              })
              document.body.removeChild(input)
              this.$dialog.confirm({
                title: '图片预览',
                message: imgReander,
                confirmButtonText: '保存',
                cancelButtonText: '取消'
              }).then(() => {
                console.log('确定')
                this.$toast.success('保存成功')
              }).catch(() => {
                console.log('关闭')
              })
            }
          })
          document.body.append(input)
          input.click()
          break
        default:
          let routeList = this.$store.state.routerHistory[appName]
          if (routeList && routeList.length) {
            routeList.forEach((item:string) => {
              requestAnimationFrame(() => {
                this.$router.push({ path: item })
              })
            })
          } else {
            try {
              this.$router.push({ name: appName })
            } catch (error) {
              this.$toast('这个还没写/(ㄒoㄒ)/~~')
            }
          }
          break
      }
    }
  }
})
</script>

<style lang="less" scoped>
.app{
  font-size: 12px;
  color: #fff;
  text-align: center;
  height: fit-content;
  width: 70px;
  position: relative;
  &::before{
    content: '';
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition: background .3s;
    width: @appPhotoHeight;
    height: @appPhotoHeight;
    margin: 0 auto;
    border-radius: 14px;
  }
  &:active{
    &::before{
      background: rgba(0, 0, 0, .7);
    }
  }
  img{
    width: @appPhotoHeight;
    height: @appPhotoHeight;
    display: block;
    margin: 0 auto;
    border-radius: 14px;
  }
  p{
    margin: 0;
    white-space: nowrap;
    word-wrap:break-word;
    line-height: 24px;
    overflow: hidden;
    text-overflow : clip;
  }
  .camera{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }
}
</style>
