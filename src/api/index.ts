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

