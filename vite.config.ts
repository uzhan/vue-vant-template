import path from 'path'
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa'
import postCssPxToRem from 'postcss-pxtorem'
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteVConsole } from 'vite-plugin-vconsole'
import viteCompression from 'vite-plugin-compression'

// CDN外链，会插入到index.html中
const cdn = {
  css: [],
  js: ['//lib.baomitu.com/vConsole/latest/vconsole.min.js']
}

const resolve = (dir) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_APP_BASE_URL,
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    },
    build: {
      terserOptions: {
        // 打包后移除console和注释
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue({ file }) {
              return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            propList: ['*'],
          })
        ]
      },
    },
    plugins: [
      vue(),
      VitePWA(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            host: env.VITE_APP_HOST,
            title: env.VITE_APP_NAME,
            cdn,
          }
        }
      }),
      viteVConsole({
        entry: resolve('src/main.ts'), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.ts')]
        localEnabled: false, // 本地是否启用
        enabled: env.VITE_APP_NODE_ENV !== 'production', // 是否启用
        config: {
          maxLogNumber: 1000,
        }
      })
    ],
    server: {
      port: 9000,
      open: false,
    },
  }
});
