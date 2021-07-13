
<template>
  <div> 
    <HomeNavigationTopBar/> 
   
    <div id="app-container">
     <b-container> 
        <div style="position:relative">
            <b-row>
                <b-col md="4" sm="12">
                    <LeftMenu/>
                </b-col>
                <b-col md="8" sm="12">
                    <slot />
                </b-col> 
            </b-row>
        </div>
    </b-container>
    </div>
  </div>
</template>

<style  >
#app-container { 
margin: 20px 0px 0px 0px;
}
</style>
 
<script>
import HomeNavigationTopBar from "@/components/Common/HomeNavigationTopBar.vue" 
import { createNamespacedHelpers } from 'vuex'
const {  mapActions } = createNamespacedHelpers('authen')
import LeftMenu from "@/components/AccountSetting/LeftMenu.vue"
export default {
  name: 'UserLayout',
  props: {
    msg: String
  },
  components:{
      LeftMenu,
      HomeNavigationTopBar
  },
  methods:{
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