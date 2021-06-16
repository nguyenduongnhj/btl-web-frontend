import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/account-setting',
    name: 'AccountSetting', 
    component: () => import('../views/AccountSetting.vue')
  },
  {
    path: '/login',
    name: 'Login', 
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register', 
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
