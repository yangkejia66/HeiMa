// 引入Vue
import Vue from 'vue'
// 引入Vue-Router
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'once', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/home', name: Welcome, component: Welcome }
      ]
    }
  ]
})

export default router
