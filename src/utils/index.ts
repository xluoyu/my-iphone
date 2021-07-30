export const addScript = (url: string, cb: () => void): void => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = url
  document.body.appendChild(s)
  s.onload = cb || {}
}

export const px = (num: number): number => {
  let clientWidth = document.body.clientWidth
  let scale = clientWidth / 375
  return scale * num
}

export const getNumber = (str: string): number => {
  str = str.replace('px', '')
  return Number(str)
}

export const GetVar = (variables: string) => {
  return (key: string): number => {
    let reg = new RegExp(`${key}: [^;]+`, 'g')
    let regResult: string | null = (variables.match(reg) as RegExpMatchArray).toString()
    let result = regResult.split(': ')
    return Number(result[1])
  }
}

// export const baseRoute = process.env.NODE_ENV == 'production' ? '/my-iphone/' : '/'
export const baseRoute = '/my-iphone/'
