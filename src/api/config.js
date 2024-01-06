import axios from 'axios'
import QS from 'qs'
// import store from '@/store/index'
import { Notification } from '@arco-design/web-vue';
// import { encrypt } from '@/utils/encryption'
// import CryptoJS from 'crypto-js'
let baseURL = 'http://192.168.55.72:8000'
// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://192.168.55.71:8000'
// } else if (process.env.NODE_ENV === 'debug') {
//   baseURL = '/api'
// } else if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
//   baseURL = '/'
// }
const service = axios.create()
// 发送 时候加参数
service.interceptors.request.use(
  config => {
    config.baseURL = baseURL
    config.headers = {
      'Content-Type': config.type ? config.type : 'application/json;charset=utf-8'
    }
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }
    if (config.method === 'get') {
      config.url = `${config.url}?${QS.stringify(config.data)}`
    }
    // if (config.format !== 'json') {
    //   if (config.action !== 'upload') {
    //     let data = new FormData()
    //     for (const key in config.data) {
    //       if (config.data[key] !== undefined && config.data[key] !== null) {
    //         data.append(key, config.data[key])
    //       }
    //     }
    //     config.data = data
    //   }
    // }
    // let hexDigits = '0123456789zaqwebcdef'
    // let s = []
    // let k = []
    // for (let i = 0; i < 36; i++) {
    //   s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    // }
    // s[14] = '4'
    // s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    // k[14] = '6'
    // k[19] = hexDigits.substr((k[19] & 0x3) | 0x8, 1)
    // config.headers['X-Auth-Token'] = encrypt(s.join(''))
    // config.headers['A-Auth-Token'] = encrypt(k.join(''))
    // config.headers['B-Auth-Token'] = token || 'b2dc016edd8a8bd45e5ae0c88b58d63a'
    // if (config.action !== 'upload') {
    //   let sign = QS.stringify(config.data)
    //   config.data = {
    //     ...config.data,
    //     t: Date.now(),
    //     s: CryptoJS.MD5(`${sign}&${token || 'b2dc016edd8a8bd45e5ae0c88b58d63a'}`).toString()
    //   }
    // }
    // console.log('request', config)
    return config
  },
  error => {
    console.log('request error', error)
    return Promise.reject(error)
  }
)

// 接收时 全局统一处理
service.interceptors.response.use(
  config => {
    const res = config.data
    const { code, msg } = res
    if (code !== 0 && msg) {
      Notification.warning({
        title: msg
      })
    }
    if (code === '100') {
      window.localStorage.clear()
      window.location.href = '/'
      return void(0)
    }
    return res
  },
  error => {
    console.log('interceptors response error', error)
    // if (!error) {
    const { response, message, code } = error
    if (!response) {
      Notification.error({
        title: code,
        content: message
      })
      return message
    }
    const { data } = response || {}
    const { detail: [{ msg, type }] } = data
    if (error.response.status) {
        switch (error.response.status) {
          case 401:
            // TODO: 调试完去掉注释
            Notification.warning({
              title: '提示',
              content: '账号资源已变更或登录失效，请重新登录'
            })
            // window.localStorage.clear()
            // window.location.href = '/'
            break
          case 422:
            Notification.error({
              title: type || 'API',
              content: msg || '未知错误'
            })
            break
          case 500:
            Notification.error({
              title: '糟糕',
              content: '通讯错误~'
            })
            break
          default:
            window.localStorage.removeItem('userInfo')
            window.localStorage.removeItem('nickName')
            window.localStorage.removeItem('token')
            window.location.href = '/'
            Notification.warning({
              title: error.response.data.error,
              content: error.response.data.message
            })
            return error.response
        }
      }
    // }
  }
)

export const post = (url, data = {}, type = 'application/json;charset=utf-8') => {
  return service({
    url,
    method: 'post',
    type,
    data
  })
}

export const get = (url, data = {}) => service({url, data})

export const put = (url, data = {}, type = 'application/json;charset=utf-8') => service({
  url,
  data,
  type,
  method: 'put'
})

export const del = (url, data = {}, type = 'application/json;charset=utf-8') => service({
  url,
  data,
  type,
  method: 'delete'
})

export default service
