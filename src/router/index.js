import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '#views/HomeView.vue'
import ContactView from '#views/ContactView.vue'

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
      component: () => import('#views/OfferingsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('#views/AboutView.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('#views/PricingView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // component: () => import('#views/ContactView.vue')
      component: ContactView
    }
  ],
  scrollBehavior() {
    document.querySelector('#app-wrapper').scrollTo(0, 0)
  }
})

export default router
