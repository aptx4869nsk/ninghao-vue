import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';
import appRouter from './app/app.router';
import { titleMixin } from './app/app.mixin';

/**
 * 創建應用
 */
const app = createApp(App);

/**
 * 应用 Store
 */
app.use(appStore);

/**
 * 应用路由器
 */
app.use(appRouter);

/**
 * 标题混合
 */
app.mixin(titleMixin);

/**
 * 挂載應用
 */
app.mount('#app');
