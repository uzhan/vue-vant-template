import request from '@/utils/request'

/**
 * @description demo
 * @see 接口文档地址
 * @author BaiHuaYang
 * @export
 * @param {API.Demo.Params} params
 * @return {API.Demo.Payload}
 */
export function queryDemo(params: API.Demo.Params) {
  return request<API.Demo.Payload>({
    url: '/fetch-request',
    method: 'GET',
    params
  })
}
