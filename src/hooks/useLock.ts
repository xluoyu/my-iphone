import { ref } from 'vue'
import { ILockType } from '#/index'

const lockStatus = ref(false)
const lockType = ref(ILockType.Number)
const lockPwd = ref('')

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
    lockStatus,
    lockType,
    lockPwd,
    changeLockState,
    setLockPwd,
    setLockType
  }
}

export default useLock
