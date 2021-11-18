const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const defalutConfig = require('./config')

module.exports = {
  // 公共文件路径
  publicPath: '/',
  // 静态资源(js、css、img、fonts)目录
  assetsDir: 'static',
  // sourceMap
  productionSourceMap: false,

  configureWebpack: (config) => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
  },
  chainWebpack: (config) => {
    // 项目标题
    config.plugin('html').tap((args) => {
      args[0].title = defalutConfig.title
      return args
    })
  },

  css: {
    // 是否将css 提取到独立的文件,生产环境提取，开发环境不提取
    extract: !!isProd,
    // 开发模式开启css sourcemap
    sourceMap: !isProd,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: 'true;@import "~@/style/_variables.less"'
          }
        }
      }
    }
  },
  devServer: {
    port: 9000,
    proxy: {
      '^/api': {
        target: defalutConfig.proxy,
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      },
      '^/mock/': {
        // TODO: 添加 mock地址
        target: defalutConfig.mock,
        changeOrigin: false,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
}
