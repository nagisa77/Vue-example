import { createRouter, createWebHistory } from 'vue-router';

import VueDemo1 from './demo/Demo1.vue';
import VueDemo2 from './demo/Demo2.vue';
import VueDemo3 from './demo/Demo3.vue';

const routes = [
  { path: '/demo1', component: VueDemo1 },
  { path: '/demo2', component: VueDemo2 },
  { path: '/demo3', component: VueDemo3 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
