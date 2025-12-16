import router from '@/router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import 'vant/es/dialog/style';
import 'vant/es/image-preview/style';
import 'vant/es/notify/style';
import 'vant/es/toast/style';

// 导入 Tailwind CSS
import './styles/tailwind.css';

// 创建 Vue 实例
const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

app.use(router).use(pinia).mount('#root');
