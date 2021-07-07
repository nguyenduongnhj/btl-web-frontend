<script>
 export default {
  components: { 
    
  }
};
</script>

<template>
  <div> 
    <HomeNavigationTopBar/>
    <div id="app-container">
    <slot />
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

export default {
  components: {
    HomeNavigationTopBar
  },
  name: 'UserLayout',
  props: {
    msg: String
  },
  methods:{
      logOut(){ 
          this.actionLogout().then(()=>{
            location.href="/#/"
          })
      },
      ...mapActions(["actionLogout"])
  }
}

 
</script>