import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}

new Vue({
  render: h => h(App),
}).$mount('#app')
