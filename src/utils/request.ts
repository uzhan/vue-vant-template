import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    const token = sessionStorage.getItem('token') || ''
    const card_id = localStorage.getItem('card_id')
    if (token) {
      Object.assign(config.headers, { Authorization: token })
    }
    if (card_id) {
      config.headers['card-id'] = card_id
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== '000000') {
      if (res.code === '100000') {
        sessionStorage.removeItem('token')
      } else {
        res.message && Toast.fail(res.message)
      }
      return Promise.reject(res.code)
    } else {
      return response.data
    }
  },
  (error) => {
    Toast.fail('网络故障，请稍后再试！')
    return Promise.reject(error)
  }
)

export default service
