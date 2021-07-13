<template>
     <div class=" single-card ">
        <div class="clearfix">
            <div @click="openProfile" class="icon" :style="{backgroundImage: 'url('+getAvatar()+')'}">  </div>
            <div class="text">
            <div class="bgcolor">
                 <div>{{data && data.user && data.user.first_name}}</div>
                 <div class="desc">{{data && data.content && data.content.text}}</div>
            </div>
            <div class="time">{{getDate() | countDate}}</div>
            </div>
        </div> 
        
    </div>
</template>

<script>

import { buildAvatarUrl } from "@/network/ApiProvider"; 
export default {
  name: 'CommentItem',
  components:{ 
  },
  props:["data"],
  data(){
      return { 
         
      }
  }, 
  mounted(){ 
      
  },
  methods: {
    openProfile(){
         this.$emit("profileView",this.data.user._id)
    },
    handleTouchLike(){
        this.$emit("like",this.data)
    },
    getImage(url){
        return buildAvatarUrl(url).replace(/\\/g,"/"); 
    },
    getAvatar() {
     return buildAvatarUrl(this.data && this.data.user && this.data.user.avatar).replace(/\\/g,"/");
    },
    getName() { 
        return this.data && this.data.user && this.data.user.first_name
    } ,
    getDate() {
    return this.data && this.data.created_at 
    },
    openDetail() {
          this.$emit("openDetail",this.data._id)
    }
}
}
</script>


<style scoped>

.single-card {
    padding: 10px;
position: relative;
}
.single-card .icon{
width: 40px;
height: 40px;
border-radius: 20px;
background-color: #f0f0f0;
position: absolute;
}

.single-card .text{
font-weight: bold;
font-size: 14px;
margin-left:50px;
}
.single-card .text .bgcolor {
display: inline-block;
    background-color: #EBFAF2;
padding: 3px 10px;
border-radius: 10px;
}
.single-card .text .desc {
font-weight: 400;
font-size: 14px;
color:#333333;
line-height: 22px;
}
.single-card .time {
font-weight: 400;
padding-top:5px;
font-size: 10px;
color:#AAAAAA
}


.icon{
  padding: 8px;
  background-size: cover;
}
 

</style>