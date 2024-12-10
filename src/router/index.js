import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import About from "../pages/about.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;