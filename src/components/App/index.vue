<template>
  <div class="app" :id="app.key" @click="open">
    <img :src="app.photo" alt="" />
    <p>{{ app.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from 'vue'
import { IApp, IUseType } from '#/index'
import { mapState } from 'vuex'
import { registerMicroApps } from 'qiankun'
import { baseRoute } from '../../utils/index'
export default defineComponent({
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapState({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appDragStatus: (state) => (state as any).appDragStatus
    })
  },
  methods: {
    async open() {
      if (this.appDragStatus) return
      if (!this.app.status) {
        this.$toast('这个还没写/(ㄒoㄒ)/~~')
        return
      }

      let appName = this.app.key
      console.log(this.app.useType)
      switch (this.app.useType) {
        case IUseType.clock:
          this.$store.commit('LockStore/changeLock', true)
          break
        case IUseType.camera:
          this.openCamera()
          break
        default:
          if (this.app.useType == IUseType.customApp) {
            await this.getCustomApp()
          }
          let routeList = this.$store.state.routerHistory[appName] ? [...this.$store.state.routerHistory[appName]] : []
          if (routeList && routeList.length) {
            routeList.forEach((item: string) => {
              requestAnimationFrame(() => {
                this.$router.push(item)
              })
            })
          } else {
            this.$router.push({ name: appName })
          }
          break
      }
    },
    /**
     * 打开相机 + 拍照预览
     */
    openCamera() {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.setAttribute('capture', 'environment')
      input.addEventListener('change', () => {
        const reads = new FileReader()
        let fileDate = input.files ? input.files[0] : null
        if (!fileDate) return
        reads.readAsDataURL(fileDate)
        reads.onload = (e) => {
          const imgReander = () =>
            h('img', {
              src: e?.target?.result,
              style: {
                width: '100%'
              }
            })
          document.body.removeChild(input)
          this.$dialog
            .confirm({
              title: '图片预览',
              message: imgReander,
              confirmButtonText: '保存',
              cancelButtonText: '取消'
            })
            .then(() => {
              console.log('确定')
              this.$toast.success('保存成功')
            })
            .catch(() => {
              console.log('关闭')
            })
        }
      })
      document.body.append(input)
      input.click()
    },
    /**
     * 微应用异步加载 (ノ｀Д)ノ
     */
    getCustomApp() {
      return new Promise<void>((reslove) => {
        registerMicroApps([
          {
            name: this.app.key,
            entry: 'http://192.168.0.184:1921',
            container: '#routerView',
            activeRule: baseRoute + this.app.key,
            props: {
              slogan: 'Hello Qiankun',
              baseRoute: baseRoute
            }
          }
        ])
        reslove()
      })
    }
  }
})
</script>

<style lang="less" scoped>
.app {
  font-size: 12px;
  color: #fff;
  text-align: center;
  height: fit-content;
  width: 70px;
  position: relative;
  &::before {
    content: '';
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition: background 0.3s;
    width: @appPhotoHeight;
    height: @appPhotoHeight;
    margin: 0 auto;
    border-radius: 14px;
  }
  &:active {
    &::before {
      background: rgba(0, 0, 0, 0.7);
    }
  }
  img {
    width: @appPhotoHeight;
    height: @appPhotoHeight;
    display: block;
    margin: 0 auto;
    border-radius: 14px;
  }
  p {
    margin: 0;
    white-space: nowrap;
    word-wrap: break-word;
    line-height: 24px;
    overflow: hidden;
    text-overflow: clip;
  }
  .camera {
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
