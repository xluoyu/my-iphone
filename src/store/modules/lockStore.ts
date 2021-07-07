import { ILockType } from '#/index'

export interface IState {
  lockStatus: boolean
  lockType: ILockType
  lockNumberPwd: string
}

const LoakStore = {
  namespaced: true,
  state(): IState {
    return {
      lockStatus: false,
      lockType: ILockType.Number,
      lockNumberPwd: '147258'
    }
  },
  mutations: {
    changeLock(state: IState, value: boolean): void {
      state.lockStatus = value
    },
    changeLockPwd(state: IState, value: string): void {
      state.lockNumberPwd = value
    },
    changeLockType(state: IState, value: ILockType): void {
      state.lockType = value
    }
  }
}

export default LoakStore
