import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI
import ElementUI from 'element-ui'
// 引入Element样式
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import axios from '@/api/axios'
import components from '@/components'
Vue.prototype.axios = axios
Vue.use(components)
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
