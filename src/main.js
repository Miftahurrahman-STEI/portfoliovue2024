import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/HeroesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'home',
        component: Home
        },
        {
        path: '/about',
        name: 'about',
        component: Home
        },
        {
        path: '/achiv',
        name: 'achivment',
        component: Home
        },
        {
        path: '/porto',
        name: 'portfolio',
        component: Home
        },
        {
        path: '/contact',
        name: 'contact',
        component: Home
        },
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
