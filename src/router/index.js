// 引入Vue
import Vue from 'vue'
// 引入Vue-Router
import VueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', redirect: '/login' },
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
