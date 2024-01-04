import { createRouter, createWebHistory } from 'vue-router'
import NavbarView from '../views/NavbarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NavbarView
    },
    {
      path: '/about',
      name: 'about',
      component: NavbarView
    },
    {
      path: '/achiv',
      name: 'achivment',
      component: NavbarView
    },
    {
      path: '/porto',
      name: 'portfolio',
      component: NavbarView
    },
    {
      path: '/contact',
      name: 'contact',
      component: NavbarView
    },
  ]
})

export default router
