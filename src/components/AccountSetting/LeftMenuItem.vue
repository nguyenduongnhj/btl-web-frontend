<template>
 
    <b-col col  sm="*" md="12" class="account-setting-item">
         <div class="icon"></div>
        <div class="content d-none d-md-block">{{ title }}</div>
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
background-color: #f0f0f0;
position: absolute;
}
.account-setting-item .content {
    margin-left: 40px; 
    color:#333333;
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
   props: ['title'],
}
</script>
