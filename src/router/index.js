import { createRouter, createWebHistory } from "vue-router"

import AboutOne from '../views/AboutOne'
import HomeOne from '../views/HomeOne'


const routes = [
    {
        path:'/about',
        name: "AboutOne",
        component: AboutOne
    },
    {
        path:'/',
        name: "Home",
        component: HomeOne
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router