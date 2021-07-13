import Vue from 'vue'
import Vuex from 'vuex'
import AuthenModule from "./authen"
import ProfileModule from "./profile"
import PublicUserModule from "./user"
import PostModule from "./post"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { 
    authen: AuthenModule,
    profile: ProfileModule,
    user: PublicUserModule,
    post: PostModule
  }
})
