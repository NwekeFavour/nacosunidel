import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import About from "../pages/about.vue";
import Executives from "../pages/executives.vue";
import Login from "../pages/login.vue";
import Signup from "../pages/signup.vue";
import Error from '../components/404page.vue';
import Events from '../pages/events.vue';
import Blog from '../pages/blog.vue';
import Dashboard from '../pages/dashboard.vue';

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
        path: '/events',
        name: 'Events',
        component: Events
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
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
    },
    {
        path: '/dashboard',
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true,  // This meta field will indicate the need for authentication
            requiresSpecialAdmin: true, // Only special admins can access
        },
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated
  const isSpecialAdmin = localStorage.getItem('isSpecialAdmin') === 'true'; // Check if user is a special admin

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      return next({ path: '/login' });
    }

    // If the route requires a special admin, ensure the user has the correct permission
    if (to.matched.some(record => record.meta.requiresSpecialAdmin) && !isSpecialAdmin) {
      return next({ path: '/' }); // Redirect to home if not a special admin
    }
  }

  next(); // Proceed to the route if all checks pass
});

export default router;