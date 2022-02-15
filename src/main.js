import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'amfe-flexible'
import './vant'
import './components'

Vue.config.productionTip = false

// 开发环境下面使用vConsole进行调试
if (process.env.VUE_APP_NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
