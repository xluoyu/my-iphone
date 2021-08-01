import { ref, computed, reactive } from 'vue'
import { IApp } from '#/index'
import appStoreList from '@/api/app-store'

/**
 *
 * @returns {
 * localApp -> 本地当前appName[string]
 *
 * myApplist -> 本地当前app列表[IApp]
 *
 * removeApp -> 移除应用 Fn()
 */
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

export const useAppHistory = () => {
  const appHistory:{[propName: string]: any} = reactive({})

  const changeRouterHistory = (handle: IRouterHandle) => {
    let routerList = appHistory[handle.appName]
    switch (handle.type) {
      case 'add':
        if (appHistory[handle.appName]) {
          let index = appHistory[handle.appName]?.indexOf(handle.value as string)
          if (index && index != -1) {
            appHistory[handle.appName] = appHistory[handle.appName]?.slice(0, index + 1)
          } else {
            appHistory[handle.appName]?.push(handle.value as string)
          }
        } else {
          appHistory[handle.appName] = [handle.value as string]
        }
        break
      case 'remove':
        routerList = undefined
        break
      case 'replace':
        appHistory[handle.appName] = [handle.value as string]
        console.log(appHistory[handle.appName])
        break
      default:
        routerList?.push(handle.value as string)
        break
    }
  }

  return {
    appHistory,
    changeRouterHistory
  }
}
