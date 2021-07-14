import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/profile/:id',
    name: 'ProfileView',
    component: ProfileView,
    meta:{
      layout:"user"
    }
  }, 
  {
    path: '/',
    name: 'Login', 
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register', 
    component: () => import('../views/Register.vue')
  },
  {
    path: '/account-security',
    name: 'AccountSecurity', 
    component: () => import('../views/AccountSecurity.vue'),
    meta:{
      layout:"user-setting"
    }
  },
  {
    path: '/account-setting',
    name: 'AccountSetting', 
    component: () => import('../views/AccountSetting.vue'),
    meta:{
      layout:"user-setting"
    }
  },
  {
    path: '/account-payment',
    name: 'AccountSetting', 
    component: () => import('../views/AccountPayment.vue'),
    meta:{
      layout:"user-setting"
    }
  },{
    path: '/tutor-profile',
    name: 'AccountTutorInfo', 
    component: () => import('../views/AccountTutorInfo.vue'),
    meta:{
      layout:"user-setting"
    }
  },{
    path: '/professional-profile',
    name: 'ProfessionalProfile', 
    component: () => import('../views/ProfessionalProfile.vue'),
    meta:{
      layout:"user-setting"
    }
  },{
    path: '/me',
    name: 'ProfessionalProfile', 
    component: () => import('../views/UserWallView.vue'),
    meta:{
      layout:"user"
    }
  }, {
    path: '/feeds',
    name: 'NewsFeedView', 
    component: () => import('../views/NewsFeedView.vue'),
    meta:{
      layout:"user"
    }
    
  }, {
    path: '/detail/:id',
    name: 'PostDetailView', 
    component: () => import('../views/PostDetailView.vue'),
    meta:{
      layout:"user"
    }
  },
  {
    path: '/wall/:id',
    name: 'WallNewsFeedView', 
    component: () => import('../views/UserWallView.vue'),
    meta:{
      layout:"user"
    }
  } 
]

const router = new VueRouter({
  routes
})

export default router
