
import { Toast } from 'vant'
import Clipboard from 'clipboard'

function clipboardSuccess() {
  Toast.success('复制成功')
}

function clipboardError() {
  Toast.fail('复制失败')
}

/**
 * @description 一键复制
 * @author BaiHuaYang
 * @date 24/11/2021
 * @export
 * @param {*} event 当前元素
 * @param {*} text 要复制的内容
 */
export default function handleClipboard(event: any, text: string): void {
  const clipboard: any = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
