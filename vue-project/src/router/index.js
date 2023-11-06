import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import home from '@/views/home/home.vue'

const product = () => import('@/views/product/index.vue')
const list = () => import('@/views/product/list/index.vue')
const category = () => import('@/views/product/category/index.vue')

const order = () => import('@/views/order/index.vue')
const orderlist = () => import('@/views/order/orderlist/index.vue')
const collect = () => import('@/views/order/collect/index.vue')
const examine = () => import('@/views/order/examine/index.vue')

const advertise = () => import('@/views/advertise/index.vue')
const adlist = () => import('@/views/advertise/adlist/index.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: home
            },
            {
                path: '/product',
                name: 'product',
                component: product,
                children: [
                    {
                        path: 'list',
                        name: 'list',
                        component: list
                    },
                    {
                        path: 'category',
                        name: 'category',
                        component: category
                    }
                ]
            },

            {
                path: '/order',
                name: 'order',
                component: order,
                children: [
                    {
                        path: 'orderlist',
                        name: 'orderlist',
                        component: orderlist
                    },
                    {
                        path: 'collect',
                        name: 'collect',
                        component: collect
                    },
                    {
                        path: 'examine',
                        name: 'examine',
                        component: examine
                    }
                ]
            },

            {
                path: '/advertise',
                name: 'advertise',
                component: advertise,
                children: [
                    {
                        path: 'adlist',
                        name: 'adlist',
                        component: adlist
                    }
                ]
            },
        ]
    },
    
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router