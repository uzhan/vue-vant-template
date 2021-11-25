import request from '@/utils/request'

/**
 * demo
 * app 发送验证码
 */
export const AppsendMsg = (params) =>
  request({
    url: '/send-phone-code',
    method: 'GET',
    params
  })
