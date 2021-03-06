import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'catalog',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Catalog.vue')
    },
    {
        path: '/register',
        name: '/register',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Register.vue')
    },
    {
        path: '/login',
        name: '/login',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Login.vue')
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
