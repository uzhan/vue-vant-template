import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from 'node:url';
import postCssPxToViewPort from 'postcss-px-to-viewport-8-plugin';
import tailwindcss from 'tailwindcss';
import AutoImport from 'unplugin-auto-import/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteVConsole } from 'vite-plugin-vconsole';

// CDN 资源, 配置后会自动注入到 index.html 中
const cdn = {
  css: [],
  js: [
    // 'https://cdn.jsdelivr.net/npm/vue@3.4.5/dist/vue.global.prod.js',
    // 'https://cdn.jsdelivr.net/npm/vue-router@4.2.2/dist/vue-router.global.prod.js',
    // 'https://cdn.jsdelivr.net/npm/pinia@2.1.3/dist/pinia.iife.prod.js',
    // 'https://cdn.jsdelivr.net/npm/axios@1.4.0/dist/axios.min.js',
  ],
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_APP_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      cssTarget: 'chrome61', //Android微信WebView，它支持大多数现代JavaScript功能，但不支持CSS中的 #RGBA 十六进制颜色表示法
      rollupOptions: {
        external: [], // ['vue', 'vue-router', 'pinia', 'axios'] 通过CDN引入时启用, CDN地址在上方cdn常量中配置
        output: {
          globals: {
            //   vue: 'Vue',
            //   'vue-router': 'VueRouter',
            //   pinia: 'Pinia',
            //   axios: 'axios',
          },
          manualChunks: (moduleId) => {
            if (moduleId.includes('node_modules')) {
              return 'vendor';
            }
            return null;
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
          postCssPxToViewPort({
            unitToConvert: 'px',
            viewportWidth: (file: any) => (file.indexOf('van') > 0 ? 375 : 750),
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', // 希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['ignore-'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 1628, // 横屏时使用的视口宽度
          }),
        ],
      },
    },
    plugins: [
      vue(),
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
          },
        },
      }),
      viteVConsole({
        entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
        localEnabled: false, // 本地是否启用
        enabled: env.VITE_APP_NODE_ENV !== 'production', // 是否启用
        config: {
          maxLogNumber: 1000,
        },
      }),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        dts: 'src/typings/components.d.ts',
        resolvers: [VantResolver()],
      }),
    ],
    server: {
      port: 9002,
      open: false,
    },
  };
});
