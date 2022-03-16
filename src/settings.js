module.exports = {
  // 项目名称
  title: 'vue-vant-template',
  // mock模式代理地址,为了方便演示，这里使用了fastmock线上服务，建议使用yapi,可以搭建私服， TODO: 按需修改
  mock: 'http://127.0.0.1',
  // 开发模式代理地址 TODO: 按需修改
  proxy: 'http://127.0.0.1',
  /** 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀 */
  $cdn: '/'
}
