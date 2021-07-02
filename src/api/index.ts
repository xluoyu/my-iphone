import request from '@/utils/request'

interface IHttpRes {
  [key:string]: any
}

export const hitokoto = ():Promise<IHttpRes> => {
  return request({
    url: 'https://v1.hitokoto.cn/',
    method: 'get'
  })
}

export const getBanner = ():Promise<IHttpRes> => {
  return request({
    url: 'http://192.168.0.184:3300/banner',
    method: 'get'
  })
}

