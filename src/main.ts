import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';

/**
 * 創建應用
 */
const app = createApp(App);

/**
 * 应用 Store
 */
app.use(appStore);

/**
 * 挂載應用
 */
app.mount('#app');
