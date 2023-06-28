import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '#views/HomeView.vue'
import OfferingsView from '#views/OfferingsView.vue'
import AboutView from '#views/AboutView.vue'
import PricingView from '#views/PricingView.vue'
import ContactView from '#views/ContactView.vue'
import SuccessView from '#views/SuccessView.vue'
import ErrorView from '#views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/offerings',
      name: 'offerings',
      component: OfferingsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/404',
      name: 'error',
      component: ErrorView
    }
  ],
  scrollBehavior() {
    document.querySelector('#app-wrapper').scrollTo(0, 0)
  }
})

export default router
