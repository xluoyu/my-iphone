import { ref, computed, reactive } from 'vue'
import { IApp } from '#/index'
import appStoreList from '@/api/app-store'

export const useAppStore = () => {
  // 本机当前app组
  const localApp = ref([
    'weather',
    'appStore',
    'photos',
    'music',
    'camera',
    'calculator',
    'clock',
    'alipay'
  ])

  const myApplist = computed(() => localApp.value.map(e => appStoreList.find((a) => a.key == e) as IApp))

  const removeApp = (appKey: string) => {
    let index = localApp.value.indexOf(appKey)
    localApp.value.splice(index, 1)
  }

  return {
    localApp,
    myApplist,
    removeApp
  }
}

interface IRouterHandle {
  type?: string
  appName: string
  value?: string[] | string
}

const useAppHistory = () => {
  const appHistory = reactive({})

  const changeRouterHistory = (handle: IRouterHandle) => {
    let routerList = routerHistory[handle.appName]
    switch (handle.type) {
      case 'add':
        if (routerHistory[handle.appName]) {
          let index = routerHistory[handle.appName]?.indexOf(handle.value as string)
          if (index && index != -1) {
            routerHistory[handle.appName] = routerHistory[handle.appName]?.slice(0, index + 1)
          } else {
            routerHistory[handle.appName]?.push(handle.value as string)
          }
        } else {
          routerHistory[handle.appName] = [handle.value as string]
        }
        break
      case 'remove':
        routerList = undefined
        break
      case 'replace':
        routerHistory[handle.appName] = [handle.value as string]
        console.log(routerHistory[handle.appName])
        break
      default:
        routerList?.push(handle.value as string)
        break
    }
  }
}
