import { createRouter, createWebHashHistory } from 'vue-router';

import MultiColumnLayout from './demo/MultiColumnLayout.vue';
import NavigationBar from './demo/NavigationBar.vue';

const routes = [
  { path: '/multi_column_layout', component: MultiColumnLayout },
  { path: '/navigation_bar', component: NavigationBar },
];

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/Vue-example/' : '/'),
  routes,
});

export default router;