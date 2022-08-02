
import { createRouter, createWebHistory } from "vue-router"
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import SinglePostPage from '../components/SinglePost.vue'

const routes = [
   {
    path: '/',
    component: HomePage
   },
   {
    path: '/about',
    component: AboutPage
   },
   {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePostPage
   }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router