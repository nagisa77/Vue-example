import { createRouter, createWebHistory } from 'vue-router';

import MultiColumnLayout from './demo/MultiColumnLayout.vue';

const routes = [
  { path: '/multi_column_layout', component: MultiColumnLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
