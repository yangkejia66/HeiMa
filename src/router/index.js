// 引入Vue
import Vue from 'vue'
// 引入Vue-Router
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Content from '@/views/content'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'once', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/home', name: 'home', component: Welcome },
        { path: '/content', name: 'content', component: Content }
      ]
    },
    { path: '*', name: 404, component: NotFound }
  ]
})
router.beforeEach((to, from, next) => {
  const user = window.sessionStorage.getItem('heima-it')
  if (to.path !== '/login' && !user) return next('/login')
  next()
})

export default router
