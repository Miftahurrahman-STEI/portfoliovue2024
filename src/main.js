import './assets/main.css'
import './index.css'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'

import Navigation from './components/NavbarView.vue'
import Footer from './components/FooterView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: HomeView
        },
        // {
        //     path: '/about',
        //     name: "About",
        //     component: () => import('./views/AboutView.vue')
        // },
        // {
        //     path: '/contact',
        //     name: "Contact",
        //     component: () => import('./views/ContactView.vue')
        // },
        // {
        //     path: '/achivment',
        //     name: "Achivment",
        //     component: () => import('./views/AchivmentView.vue')
        // }
    ]
})

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(VueSweetalert2)

app.component('NavtopComponent', Navigation)
app.component('FooterComponent', Footer)

app.mount('#app')