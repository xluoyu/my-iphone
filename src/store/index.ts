import { createStore } from 'vuex'
import LockStore from './modules/lockStore'
import AppStore from './modules/appStore'

export interface IState {
  closeBeforeFn: null | (() => boolean),
  appDragStatus: boolean,
  routerHistory: {
    [propName: string]: string[] | undefined
  }
}

interface IRouterHandle {
  type?: string,
  appName: string,
  value?: string[] | string
}

const store = createStore({
  state():IState {
    return {
      // 用于关闭App时触发
      closeBeforeFn: null,
      // app图标拖动状态
      appDragStatus: false,
      // 记录每个app的路由
      routerHistory: {}
    }
  },
  mutations: {
    changeCloseBeforeFn(state:IState, fn):void {
      state.closeBeforeFn = fn
    },
    changeAppDragStatus(state, value):void {
      state.appDragStatus = value
    },
    /**
     *
     * @param state
     * @param handle
     */
    changeRouterHistory(state, handle:IRouterHandle) {
      let routerList = state.routerHistory[handle.appName]
      switch (handle.type) {
        case 'add':
          state.routerHistory[handle.appName] = handle.value as string[]
          break
        case 'remove':
          routerList = undefined
          break
        default:
          routerList?.push(handle.value as string)
          break
      }
    }
  },
  actions: {
    /**
     * 关闭app时的钩子，需在vuex中配置closeBeforeFn
     * @return boolean
     */
    async onCloseBrofreFn(vm) {
      if (vm.state.closeBeforeFn) {
        return await vm.state.closeBeforeFn()
      } else {
        return true
      }
    }
  },
  modules: {
    LockStore,
    AppStore
  }
})

export default store
