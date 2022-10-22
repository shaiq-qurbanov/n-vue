import { createRouter, createWebHistory } from 'vue-router'
import Test from '../pages/Test.vue'
import Page from '../pages/Page.vue'
import Drag from '../pages/Drag.vue'

const routes = [
    {
        path: '/Test',
        name: 'Test',
        component: Test
    },
    {
        path: '/Page',
        name: 'Page',
        component: Page
    },
    {
        path: '/Drag',
        name: 'Drag',
        component: Drag
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
