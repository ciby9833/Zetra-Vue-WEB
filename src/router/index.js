import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import AboutUs from '@/views/AboutUs.vue';
import SupportPage from '../views/SupportPage.vue';
import PrivacyPage from '../views/PrivacyPage.vue';
import TermsPage from '../views/TermsPage.vue';
import CookiePage from '../views/CookiePage.vue';
import WarehousePage from '../views/WarehousePage.vue';
import ScmPage from '../views/ScmPage.vue';
import AboutZetraPage from '../views/AboutZetraPage.vue';
import SitemapPage from '../views/SitemapPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/products', component: ProductsPage, name: 'Products' },
  { path: '/warehouse', component: WarehousePage, name: 'Warehouse' },
  { path: '/scm', component: ScmPage, name: 'SCM' },
  { path: '/about-zetra', component: AboutZetraPage, name: 'AboutZetra' },
  { path: '/about', component: AboutUs, name: 'about' },
  { path: '/support', component: SupportPage, name: 'Support' },
  { path: '/privacy', component: PrivacyPage, name: 'Privacy' },
  { path: '/terms', component: TermsPage, name: 'Terms' },
  { path: '/cookies', component: CookiePage, name: 'Cookies' },
  { path: '/sitemap', component: SitemapPage, name: 'Sitemap' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;