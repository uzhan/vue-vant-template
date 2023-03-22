import { createApp } from 'vue';
import { createPinia } from 'pinia'
import router from '@/router';
import App from './App.vue';

import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';

// 创建 Vue 实例
const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia()

app.use(router).use(pinia).mount('#root');