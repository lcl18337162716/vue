import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/module/login/page/Login'
import Index from '@/module/index/page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
