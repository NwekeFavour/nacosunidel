import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import About from "../pages/about.vue";
import Executives from "../pages/executives.vue";
import Login from "../pages/login.vue";
import Signup from "../pages/signup.vue";
import Error from '../components/404page.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home

    },
    {
        path: '/about-us',
        name: 'About',
        component: About
    },
    {
        path: '/executives',
        name: 'Executive',
        component: Executives
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Error
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;