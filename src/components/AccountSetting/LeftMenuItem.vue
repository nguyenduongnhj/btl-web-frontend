<template>
 
    <b-col col  sm="*" md="12" class="account-setting-item">
         <router-link :to="path"> <div class="icon">
         <img :src="getIcon()" alt="">
         </div></router-link>
        <div class="content d-none d-md-block">
          <router-link :to="path">  {{ title }} </router-link>
         </div>
        <hr  class="d-none d-md-block">
    </b-col>
</template>

<style scoped>
.account-setting-item {
  position: relative;
  height:40px;
  padding:5px;
}
.account-setting-item .icon{
  width: 30px;
  height: 30px;  
  position: absolute; 
  text-align: center;
}
.account-setting-item .icon img{
  margin-top: 3px; 
  height: 24px;   
}

.account-setting-item .content a {
  text-decoration: none;
  color:#333333;
}
.account-setting-item .content {
    margin-left: 40px;  
    font-weight: bold;
    padding-top: 4px;
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
   
}

.account-setting-item hr{
  margin:0px;
  position: absolute;
  bottom: 0px;
  border-bottom: 1px solid #EBECED;
  left: 50px;
  right: 0px;
}
</style>


<script> 
export default {
  name: 'SettingMenuItem',
  components: {
    
  },
   props: ['title','path','icon'],
   methods:{
     getIcon(){
       if (this.icon == null){
         return ""
       }
        return require("/src/assets/Images/" + this.icon)
     }
   }
}
</script>
