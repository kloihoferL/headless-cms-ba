import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue'; // optional

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },

    {
        path: '/events/:eventID',
        name: 'event-detail',
        component: () => import('../components/Dynamic.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
