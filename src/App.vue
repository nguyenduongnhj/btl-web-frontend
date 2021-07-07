<template>
  <div id="app" class="container">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const default_layout = "default"; 
import { createNamespacedHelpers } from 'vuex'
import { isAuthen, getUserInfo } from "@/common/AppData"
const {  mapActions } = createNamespacedHelpers('authen')


export default {
  mounted() {
    if (!isAuthen()){
      return
    }
  let infor = getUserInfo()
  this.changeUserInfo({name: infor.first_name, avatar: infor.avatar})
        

  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  methods:{ 
      ...mapActions({ 
      changeUserInfo: 'actionChangeUserInfo'
    })
  }
};
</script>
 