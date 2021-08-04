/**
 * 执行一个函数，当函数执行成功则返回正确的结果，
 * 如果执行失败则需要在1000ms内执行当前函数4次直到返回正确结果，
 * 如果1000ms内还没有返回结果，则需要返回错误提示信息。
 * @param {*} fn
 * @returns
 */
const retry = async(fn) => {
  let num = 1
  const run = async() => {
    let res = await fn()
    if (res) {
      return res
    } else if (num > 4) {
      return res
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          num += 1
          resolve(run())
        }, 250)
      })
    }
  }
  let res = await run()
  return res
}

const test = async() => {
  let res = await retry(() => {
    let num = parseInt(Math.random() * 10)
    console.log(num)
    if (num >= 7) {
      return true
    } else {
      return false
    }
  })
  console.log('res', res)
}
