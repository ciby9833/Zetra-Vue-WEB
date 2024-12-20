import { createI18n } from 'vue-i18n';
import en from './en.json';
import zh from './zh.json';
import id from './id.json';

const messages = { en, zh, id };

const i18n = createI18n({
  legacy: false, // Use Composition API
  globalInjection: true, // Enable global injection
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;