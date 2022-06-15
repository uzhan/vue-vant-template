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

/**
 * 防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}
