import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/index.vue';
import About from './components/about.vue';

import postRoutes from '@/post/post.routes';

/**
 * 创建路由器
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about-us',
    // redirect: '/about',
    // redirect: { name: 'about' },
    redirect: to => {
      console.log(to);
      return '/about';
    },
  },
  ...postRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 导航守卫
 */
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    console.log('👮');
    next();
  }

  next();
});

export default router;
