import './assets/main.css';
import App from './App.vue';

import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion'

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: HomeView
        },
        {
            path: '/about',
            name: "About",
            component: () => import('./views/AboutView.vue')
        },
        {
            path: '/contact',
            name: "Contact",
            component: () => import('./views/ContactView.vue')
        },
        {
            path: '/achivment',
            name: "Achivment",
            component: () => import('./views/AchivmentView.vue')
        }

    ]
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
