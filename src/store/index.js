import Vue from 'vue'
import Vuex from 'vuex'
import AuthenModule from "./authen"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { 
    authen: AuthenModule 
  }
})
