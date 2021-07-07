import axios from 'axios'
import { Notify } from 'vant'

// create an axios instance
const service = axios.create({
  // baseURL: '/',
  baseURL: '/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    if (config.method === 'post' && config.data) {
      config.data = JSON.stringify(config.data)
      config.headers['Content-Type'] = 'application/json'

      return config
    }

    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    return res
  },
  (error) => {
    console.log('err' + error) // for debug
    Notify(error.message)
    return Promise.reject(error)
  }
)

export default service
