import { IApp } from '#/index'
import appStoreList from '@/api/app-store'

export interface IState {
  myAppIds: string[],
}

const LoakStore = {
  namespaced: true,
  state():IState {
    return {
      myAppIds: ['weather', 'appStore', 'photos', 'music', 'camera', 'calculator', 'clock', 'alipay', 'camera2', 'calculator2', 'calculator3', 'messages3', 'clock3', 'camera4', 'calculator4', 'messages4', 'clock4', 'messages2', 'clock2', 'camera3']
    }
  },
  getters: {
    myAppList(state: IState):IApp[] {
      return state.myAppIds.map(e => appStoreList.find(a => a.key == e) as IApp)
    }
  },
  mutations: {
    removeApp(state:IState, appKey:string):void {
      let index = state.myAppIds.indexOf(appKey)
      state.myAppIds.splice(index, 1)
    }
  }
}

export default LoakStore
