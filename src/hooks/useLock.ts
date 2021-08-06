import { ref } from 'vue'
import { ILockType } from '#/index'
console.log('useLock')

const lockStatus = ref(false)
const lockType = ref(ILockType.Number)
const lockPwd = ref('')

/**
 * 控制锁屏
 * @return {
 *  lockStatus -> 锁屏状态
 *
 *  lockType -> 锁屏类型
 *
 *  lockPwd -> 锁屏密码
 *
 *  changeLockState -> 修改状态 Fn()
 *
 *  setLockPwd -> 修改密码 Fn()
 *
 *  setLockType -> 修改类型 Fn()
 */
const useLock = () => {
  const changeLockState = (value?:boolean) => {
    lockStatus.value = typeof value == 'boolean' ? value : !lockStatus.value
  }

  const setLockPwd = (value:string) => {
    lockPwd.value = value
  }

  const setLockType = (value:ILockType) => {
    lockType.value = value
  }

  return {
    lockStatus, // 锁屏状态
    lockType, // 锁屏类型
    lockPwd, // 锁屏密码
    changeLockState, // 修改状态
    setLockPwd, // 修改密码
    setLockType // 修改类型
  }
}

export default useLock
