 
<template>
  <div> 
    <HomeNavigationTopBar v-if="isAuthen()" />
    <NavigationTopBar  v-if="!isAuthen()"/>
    <div id="app-container">
    <slot />
    </div>
  </div>
</template>

<style  >
#app-container { 
position: absolute;
overflow-y: auto;
width: 100%;
padding-top: 20px;
height: calc(100% - 60px);
left: 0px;
top: 40px;
}
</style>

<script>
import { isAuthen } from "@/common/AppData"

import NavigationTopBar from "@/components/Common/NavigationTopBar.vue" 
import HomeNavigationTopBar from "@/components/Common/HomeNavigationTopBar.vue" 
import { createNamespacedHelpers } from 'vuex'
const {  mapActions } = createNamespacedHelpers('authen')

export default {
  components: {
    HomeNavigationTopBar,
    NavigationTopBar
  },
  name: 'UserLayout',
  props: {
    msg: String
  },
  methods:{
      isAuthen(){
        return isAuthen()
      },
      logOut(){ 
          this.actionLogout().then(()=>{
            location.href="/#/"
          })
          this.actionChangeUserInfo({ avatar: "", name: "" })
      },
      ...mapActions(["actionLogout","actionChangeUserInfo"])
  }
}

 
</script>