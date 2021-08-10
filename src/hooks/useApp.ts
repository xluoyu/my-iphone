import { ref, computed, reactive, Ref, unref } from 'vue'
import { IApp, IItemKey } from '#/index'
import appStoreList from '@/api/app-store'
import { Dialog } from 'vant'
console.log('useApp')
// 本机当前app组
interface ILocalApp {
  key: string,
  type: IItemKey,
  children?: ILocalApp[],
  name?: string
}

const localApp:Ref<ILocalApp[]> = ref([
  {
    key: 'weather',
    type: IItemKey.Weather
  },
  {
    key: 'appStore',
    type: IItemKey.App
  },
  {
    key: 'photos',
    type: IItemKey.App
  },
  {
    key: 'camera',
    type: IItemKey.App
  },
  {
    name: '工具组',
    key: 'appArray5256165',
    type: IItemKey.AppArray,
    children: [
      {
        key: 'calculator',
        type: IItemKey.App
      },
      {
        key: 'alipay',
        type: IItemKey.App
      },
      {
        key: 'music',
        type: IItemKey.App
      },
      {
        key: 'calculator',
        type: IItemKey.App
      },
      {
        key: 'alipay',
        type: IItemKey.App
      }
    ]
  },
  {
    key: 'clock',
    type: IItemKey.App
  },
  {
    key: 'fullScreen',
    type: IItemKey.App
  }

])

export type IUpdateAppList = (string|{key: string, children: string[]})[]

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
  const myApplist = computed(() => {
    return reduceApp(localApp.value)
  })
  const reduceApp = (list:ILocalApp[], parent?:string) => {
    return list.reduce((pre, cur) => {
      if (cur.type != IItemKey.AppArray) {
        let curApp = appStoreList.find(e => e.key == cur.key) as IApp
        if (parent) {
          curApp.parent = parent
        }
        pre.push(curApp)
      } else {
        pre.push({
          name: cur.name as string,
          type: cur.type,
          key: cur.key,
          children: cur.children ? reduceApp(cur.children, cur.key) : []
        })
      }
      return pre
    }, [] as IApp[])
  }

  // 需修改
  const removeApp = (app: IApp) => {
    let appKey = app.key
    let parentKey = app.parent
    let curApps:ILocalApp[] = parentKey ? (localApp.value.find(e => e.key == parentKey) as IApp).children as IApp[] : localApp.value
    let curAppIndex = curApps.findIndex(e => e.key == appKey)

    curApps.splice(curAppIndex, 1)
  }

  const clearApp = (app:IApp) => {
    Dialog.confirm({
      message: `确定要卸载${app.name}吗？`
    })
      .then(() => {
        removeApp(app)
      })
      .catch()
  }

  // 弃用
  const composeApps = (targetKey:string, itemKey:string) => {
    let appList = localApp.value
    let targetApp = appList.find(e => e.key == targetKey) as ILocalApp
    let itemApp = appList.find(e => e.key == itemKey) as ILocalApp
    if (targetApp.type == IItemKey.App) {
      // 如果目标是app，则组合成apps
      let newAppArray:ILocalApp = {
        name: '工具组',
        type: IItemKey.AppArray,
        key: 'appArray' + new Date().getTime(),
        children: [
          targetApp,
          itemApp
        ]
      }
      appList.splice(appList.indexOf(targetApp), 1, newAppArray)
      appList.splice(appList.indexOf(itemApp), 1)
    } else if (targetApp.type == IItemKey.AppArray) {
      // 如果目标是apps，则添加当前app
      targetApp.children?.push(itemApp)
      appList.splice(appList.indexOf(itemApp), 1)
    }

    localApp.value = appList
  }

  const updateAppList = (arr: IUpdateAppList) => {
    console.log(arr)
    const arrRetrieval = (list: IUpdateAppList):ILocalApp[] => {
      return list.map(item => {
        if (typeof item === 'string') {
          return localApp.value.find(e => e.key == item) as ILocalApp
        } else {
          let apps = localApp.value.find(e => e.key == item.key)
          if (apps) {
            apps.children?.push(...arrRetrieval(item.children))
          } else {
            apps = {
              name: '工具组',
              type: IItemKey.AppArray,
              key: item.key,
              children: arrRetrieval(item.children)
            }
          }
          return apps
        }
      }) || []
    }
    let newAppsList = arrRetrieval(arr)

    localApp.value = newAppsList
  }

  return {
    localApp,
    myApplist,
    clearApp,
    updateAppList,
    composeApps
  }
}

/**
 * 记录app的历史记录
 * 在下次打开该app时，直接跳到上次关闭的页面
 */

interface IRouterHandle {
  type?: string
  appName: string
  value?: string[] | string
}

const appHistory:{[propName: string]: string[]|undefined} = reactive({})
export const useAppHistory = () => {
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

/**
 * 用于打开app组
 */
const currentApp:Ref<IApp | null> = ref(null)
export const useCurrentAppArray = () => {
  const changeCurrentApp = (app:IApp | null) => {
    currentApp.value = app
  }
  return {
    currentApp,
    changeCurrentApp
  }
}
