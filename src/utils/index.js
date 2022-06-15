import defaultSettings from '@/settings'

/**
 * @description 获取当前浏览器运行环境
 * @author BaiHuaYang
 * @date 23/08/2021
 * @export
 */
export function isAlipayOrWechat() {
  if (/MicroMessenger/.test(window.navigator.userAgent)) {
    sessionStorage.setItem('app_env', 'wechat')
  } else if (/AlipayClient/.test(window.navigator.userAgent)) {
    sessionStorage.setItem('app_env', 'alipay')
  }
}

/**
 *  获取当前手机系统是安卓还是ios
 */
export function getSystemAgent() {
  // 判断是否为ios端访问
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    sessionStorage.setItem('app_system', 'ios')
  }
  if (/(Android|Adr)/i.test(navigator.userAgent)) {
    sessionStorage.setItem('app_system', 'android')
  }
}

/** 设置页面title */
export function getPageTitle(pageTitle) {
  const title = defaultSettings.title
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
}
