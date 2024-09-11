import { createRouter, createWebHashHistory } from 'vue-router';

import MultiColumnLayout from './demo/MultiColumnLayout.vue';
import NavigationBar from './demo/NavigationBar.vue';
import i18nPage from './demo/I18N.vue';
import NightMode from './demo/NightMode.vue';
const routes = [
  { path: '/multi_column_layout', component: MultiColumnLayout },
  { path: '/navigation_bar', component: NavigationBar },
  { path: '/i18n', component: i18nPage },
  { path: '/night_mode', component: NightMode },
];

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/Vue-example/' : '/'),
  routes,
});

export default router;