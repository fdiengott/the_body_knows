import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '#views/HomeView.vue'
import OfferingsView from '#views/OfferingsView.vue'
import AboutView from '#views/AboutView.vue'
import PricingView from '#views/PricingView.vue'
import ContactView from '#views/ContactView.vue'
import SuccessView from '#views/SuccessView.vue'
import ErrorView from '#views/ErrorView.vue'
import PageNotFoundView from '#views/PageNotFoundView.vue'

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
      path: '/form-success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/form-failure',
      name: 'error',
      component: ErrorView
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFoundView
    }
  ],
  scrollBehavior() {
    document.querySelector('#app-wrapper').scrollTo(0, 0)
  }
})

export default router
