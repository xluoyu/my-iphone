import { IApp, ILockType } from '#/index'
import { createStore } from 'vuex'
import appStore from '@/api/app-store'

export interface state {
  myAppIds: string[],
  lockStatus: boolean,
  lockType: ILockType,
  lockNumberPwd: string,
  closeBeforeFn: any,
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
  state() {
    return {
      myAppIds: ['weather', 'app-store', 'photos', 'music', 'camera', 'calculator', 'clock', 'alipay', 'app-store', 'photos', 'music', 'camera', 'calculator', 'clock', 'alipay', 'app-store', 'photos', 'music', 'camera', 'calculator', 'clock', 'alipay', 'app-store', 'photos', 'music', 'camera', 'calculator', 'clock', 'alipay'],
      lockStatus: false,
      lockType: ILockType.Number,
      lockNumberPwd: '147258',
      closeBeforeFn: null,
      appDragStatus: false,
      routerHistory: {}
    }
  },
  getters: {
    myAppList({ myAppIds }: state):IApp[] {
      return myAppIds.map(e => appStore.find(a => a.key == e) as IApp)
    }
  },
  mutations: {
    changeLock(state, value:boolean):void {
      state.lockStatus = value
    },
    changeLockType(state, value:ILockType):void {
      state.lockType = value
    },
    changeCloseBeforeFn(state, fn):void {
      state.closeBeforeFn = fn
    },
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
    async onCloseBrofreFn(vm) {
      if (vm.state.closeBeforeFn) {
        return await vm.state.closeBeforeFn()
      } else {
        return true
      }
    }
  }
})

export default store
