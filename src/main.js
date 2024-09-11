import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';

import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import zh from './locales/zh.json';

import './assets/styles/global.css'; 

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.includes('zh') ? 'zh' : 'en'; // 简单示例，可以扩展更多语言
};

// 创建 i18n 实例
const i18n = createI18n({
  locale: getBrowserLanguage(), // 默认语言为用户浏览器的语言
  fallbackLocale: 'en', // 如果找不到对应的翻译，使用的默认语言
  messages: {
    en,
    zh,
  },
});

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.mount('#app');
