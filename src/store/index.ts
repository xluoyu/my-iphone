import { IApp, ILockType } from '#/index'
import { createStore } from 'vuex'
import appStore from '@/api/app-store'

export interface state {
  myAppIds: string[],
  lockStatus: boolean,
  lockType: ILockType,
  lockNumberPwd: string
}

const store = createStore({
  state() {
    return {
      myAppIds: ['weather', 'alipay', 'app-store', 'photos', 'music', 'camera', 'calculator', 'clock'],
      lockStatus: true,
      lockType: ILockType.Number,
      lockNumberPwd: '147258'
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
    }
  }
})

export default store
