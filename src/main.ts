import { createApp } from 'vue';
import App from './app/app.vue';
import appRouter from './app/app.router';

/**
 * 創建應用
 */
const app = createApp(App);

/**
 * 应用路由
 */
app.use(appRouter);

/**
 * 挂載應用
 */

app.mount('#app');
