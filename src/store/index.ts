import { IApp } from '#/index'
import { createStore } from 'vuex'
import appStore from '@/api/app-store'

interface state {
  myAppIds: string[],
  lockStatus: boolean
}

const store = createStore({
  state() {
    return {
      myAppIds: ['weather', 'alipay', 'app-store', 'photos', 'music', 'camera', 'calculator', 'clock'],
      lockStatus: false
    }
  },
  getters: {
    myAppList({ myAppIds }: state):IApp[] {
      return myAppIds.map(e => appStore.find(a => a.key == e) as IApp)
    }
  },
  mutations: {
    changeClock(state, value:boolean):void {
      console.log(value)
      state.lockStatus = value
    }
  }
})

export default store
