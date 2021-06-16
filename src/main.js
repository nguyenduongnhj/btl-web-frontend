import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

import App from './App.vue'
import router from './router'
import store from './store'

import "./styles/app.scss"
import DefaultLayout from "./layouts/DefaultLayout.vue";
 
Vue.component("default-layout", DefaultLayout); 
Vue.config.productionTip = false
 
// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('pulse-loader',PulseLoader);
Vue.component('clip-loader',ClipLoader);


Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
