/**
 * Created by BaiHuaYang on 23/08/2021.
 */

export function isvalidUsername(str: string): boolean {
  const valid_map: string[] = []
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri */
export function validateURL(textval: string): boolean {
  const urlregex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase(str: string): boolean {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase(str: string): boolean {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets(str: string): boolean {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* must be number */
export function validateNumber(str: string): boolean {
  const reg = /^[0-9]+$/
  return reg.test(str)
}

/* must be float number3 */
export function validateFloatNumber(str: string): boolean {
  const reg = /^\d+(\.\d{1,3})?$/
  return reg.test(str)
}

/* must be float doublie number2 */
export function validateFloatNumberTwo(str: string): boolean {
  const reg = /^\d+(\.\d{1,2})?$/
  return reg.test(str)
}

/* must be float phone */
export function validatePhone(str: string): boolean {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,*;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * validate identity
 * @param {String} str 身份证号码
 */
export function validateIdentity(str: string): boolean {
  const tity = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return tity.test(str)
}

/**
 * validate BANKNUMBER
 * @param {Number} str 银行卡号
 */
export function validateBankNumber(str: string): boolean {
  const bank_num = /^[0-9]$/
  return bank_num.test(str)
}

/**
 * 特殊字符
 * @param {String} str 字符串
 */
export function validateSpecial(str: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const regEn = /[~！￥…（）、—【】｛｝\|!@#$%^&*\-\(\)\[\]\{\}\*\,\.\?\+\s\n\r]*$/
  return regEn.test(str)
}

/**
 * 中文英文数字检验
 */
export function validateCn(str: string): boolean {
  const cn = /^[\u2E80-\u9FFFa-zA-Z0-9]+$/
  return cn.test(str)
}

/**
 * 中文检验
 * @param {String} str 文件
 */
export function validChinese(str: string): boolean {
  const regCn = /^[\u4e00-\u9fa5]+$/
  return regCn.test(str)
}

/**
 * 数字及字母
 * @param {String} str 验证文字
 */
export function validLetterNumber(str: string): boolean {
  const letterNum = /^[a-zA-Z0-9]*$/
  return letterNum.test(str)
}
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str: string): boolean {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url: string): boolean {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str: string): boolean {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str: string): boolean {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str: string): boolean {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str: any): boolean {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg: any): boolean {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
