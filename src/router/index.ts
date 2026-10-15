import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import ContacteView from '../views/ContacteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: GaleriaView,
    },
    {
      path: '/contacte',
      name: 'contacte',
      component: ContacteView,
    },
  ],
})

export default router
