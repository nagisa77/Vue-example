import { createRouter, createWebHistory } from 'vue-router';

import MultiColumnLayout from './demo/MultiColumnLayout.vue';

const routes = [
  { path: '/multi_column_layout', component: MultiColumnLayout },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/Vue-example/' : '/'),
  routes,
});

export default router;
