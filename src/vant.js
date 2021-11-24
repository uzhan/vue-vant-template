import Vue from 'vue'
// 在这里引入你所需的组件
import { Button, Toast } from 'vant'

// 链式全局注册组件
Vue.use(Button).use(Toast)
