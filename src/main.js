import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import ScrollLoader from 'vue-scroll-loader'
import VueSweetalert2 from 'vue-sweetalert2';
import DefaultLayout from "./layouts/DefaultLayout.vue";
import UserLayout from "./layouts/UserLayout.vue";
import UserSettingLayout  from "./layouts/UserSettingLayout.vue";
import AppFilter from "./common/Filter"
import i18n from './common/i18n';
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import 'sweetalert2/dist/sweetalert2.min.css';
import "./styles/app.scss"
 
Vue.config.productionTip = false

Vue.component("default-layout", DefaultLayout); 
Vue.component("user-layout", UserLayout);
Vue.component("user-setting-layout", UserSettingLayout);


Vue.component('pulse-loader',PulseLoader);
Vue.component('clip-loader',ClipLoader);
Vue.use(VueSweetalert2);
Vue.use(ScrollLoader)

Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)



AppFilter()

new Vue({
  
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
