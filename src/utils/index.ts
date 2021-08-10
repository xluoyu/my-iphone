export const addScript = (url: string, cb: () => void): void => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = url
  document.body.appendChild(s)
  s.onload = cb || {}
}

export const px = (num: number): number => {
  let rootFontSize: string|number = document.documentElement.style.fontSize
  if (rootFontSize) {
    rootFontSize = getNumber(rootFontSize)
    return (num / rootFontSize)
  }
  return num
}

export const getRootFontSize = () => {
  let rootFontSize: string|number = document.documentElement.style.fontSize
  rootFontSize = getNumber(rootFontSize) || 1
  return rootFontSize
}

export const getNumber = (str: string): number => {
  str = str.replace('px', '')
  str = str.replace('rem', '')
  return Number(str)
}

export const getVar = (key: string) => {
  let value = getComputedStyle(document.documentElement).getPropertyValue(key)
  value = value.replace('rem', '')
  value = value.replace('px', '')
  return Number(value) * getRootFontSize()
}

// 节流
export const throttle = (fn:(...args: any[]) => void, delay:number) => {
  let timer = 0
  return (...args: any[]) => {
    if (timer) return
    timer = window.setTimeout(() => {
      fn(...args)
      clearTimeout(timer)
      timer = 0
    }, delay)
  }
}

// export const baseRoute = process.env.NODE_ENV == 'production' ? '/my-iphone/' : '/'
export const baseRoute = '/'
