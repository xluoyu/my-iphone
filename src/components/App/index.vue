<template>
  <div :class="['app', size]" :id="app.key" @click="open">
    <template v-if="app.type == IItemKey.App">
      <img :src="app.photo" alt="" />
    </template>
    <template v-if="app.type == IItemKey.AppArray">
      <div class="app-array">
        <App v-for="item in app.children" :key="item.key" :app="item" size="mini" />
      </div>
    </template>
    <p>{{ app.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from 'vue'
import { IApp, IUseType, IItemKey } from '#/index'
import { registerMicroApps } from 'qiankun'
import { baseRoute } from '../../utils/index'
import { Toast, Dialog } from 'vant'
import useLock from '@/hooks/useLock'
import { useRouter } from 'vue-router'
import { useAppDragStatus } from '@/hooks/useAppDragStatus'
import { useAppStore, useAppHistory, useCurrentAppArray } from '@/hooks/useApp'

function openCamera() {
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
      Dialog
        .confirm({
          title: '图片预览',
          message: imgReander,
          confirmButtonText: '保存',
          cancelButtonText: '取消'
        })
        .then(() => {
          Toast.success('保存成功')
        })
        .catch()
    }
  })
  document.body.append(input)
  input.click()
}

function getCustomApp(key:string) {
  return new Promise<void>((reslove) => {
    registerMicroApps([
      {
        name: key,
        entry: 'http://192.168.0.184:1921',
        container: '#routerView',
        activeRule: baseRoute + key,
        props: {
          slogan: 'Hello Qiankun',
          baseRoute: baseRoute
        }
      }
    ])
    reslove()
  })
}

export default defineComponent({
  name: 'App',
  props: {
    app: {
      type: Object as PropType<IApp>,
      default: () => {
        return {}
      }
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const router = useRouter()
    const { changeLockState } = useLock()
    const { dragStatus } = useAppDragStatus()
    const { clearApp } = useAppStore()
    const { appHistory } = useAppHistory()
    const { changeCurrentApp } = useCurrentAppArray()

    const open = async() => {
      if (props.size == 'mini') return
      if (dragStatus.value) {
        if (props.app.type == IItemKey.AppArray) return
        clearApp(props.app)
        return
      }
      /**
       * 打开app组
       */
      if (props.app.type == IItemKey.AppArray) {
        changeCurrentApp(props.app)
        return
      }
      if (!props.app.status) {
        Toast('这个还没写/(ㄒoㄒ)/~~')
        return
      }
      let appName = props.app.key
      switch (props.app.useType) {
        case IUseType.clock:
          changeLockState()
          break
        case IUseType.camera:
          openCamera()
          break
        case IUseType.full:
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            try {
              document.documentElement.requestFullscreen().catch(() => {
                Toast('这个浏览器好像不支持/(ㄒoㄒ)/~~')
              })
            } catch {
              Toast('这个浏览器好像不支持/(ㄒoㄒ)/~~')
            }
          }
          break
        default:
          // if (props.app.useType == IUseType.customApp) {
          //   await getCustomApp(props.app.key)
          // }
          // let routeList = appHistory[appName] ? appHistory[appName] : []
          // if (routeList && routeList.length) {
          //   routeList.forEach((item: string) => {
          //     requestAnimationFrame(() => {
          //       router.push(item)
          //     })
          //   })
          // } else {
          router.push({ name: appName })
          // }
          break
      }
    }

    return {
      open,
      IItemKey
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
  background: transparent;
  transition: background .3s;
  // &::before {
  //   content: '';
  //   background: transparent;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: 2;
  //   transition: background 0.3s;
  //   width: var(--app-photo-height);
  //   height: var(--app-photo-height);
  //   margin: 0 auto;
  //   border-radius: 14px;
  // }
  // &:active {
  //   &::before {
  //     background: rgba(0, 0, 0, 0.7);
  //   }
  // }
  img {
    width: var(--app-photo-height);
    height: var(--app-photo-height);
    display: block;
    margin: 0 auto;
    border-radius: var(--app-radius);
    transition: transform .3s;
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
  .app-array{
    width: var(--app-photo-height);
    height: var(--app-photo-height);
    background: var(--transparent-background);
    border-radius: var(--app-radius);
    margin: 0 auto;
    box-sizing: border-box;
    padding: 5px;
    display: grid;
    grid-gap: 4px;
    grid-template-rows: repeat(3, 14px);
    grid-template-columns: repeat(3, 14px);
    grid-auto-flow: row dense;
  }
}
.app.mini {
  width: 25px;
  img {
    width: 14px;
    height: 14px;
    border-radius: 4px;
    margin: 0;
  }
  p{
    display: none;
  }
}

.changeToBox{
  >div >.app {
    border-radius: var(--app-radius);
    height: 70px;
    background: var(-transparent-background);
    img, .app-array{transform: translateY(5px);}
    p{display: none;}
  }
}
</style>
