import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'amfe-flexible'
import './vant'
import './components'

Vue.config.productionTip = false

// 非生产环境下面使用vConsole进行调试
if (process.env.VUE_APP_NODE_ENV === 'development') {
  const vconsole = new VConsole()
  console.info(`vconsole load success, version: ${vconsole.version}`)
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
