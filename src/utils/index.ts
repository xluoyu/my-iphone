export const addScript = (url: string): void => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = url
  document.body.appendChild(s)
}

export const px = (num: number): number => {
  let clientWidth = document.body.clientWidth
  let scale = clientWidth / 375
  return scale * num
}
