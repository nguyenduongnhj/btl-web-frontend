<template>
    <div :class="box?'box-shadown box-item':'box-item'">
        <div>
            <div @click="openProfile()" class="user-avatar" :style="{ backgroundImage: 'url(' + getAvatar() + ')' }"> </div>
            <div class="user-info" @click="openProfile()">
                <div class="name">{{getName()}}</div>
                <div class="time"> {{getDate() | countDate}}</div>
            </div>
        </div>
        <div class="content"  @click="openDetail()" >
                {{ (data &&data.content && data.content.text) || ""}}

        </div>
        <div  @click="openDetail()" v-if="data && data.content && data.content.image" class="images">
            <!---<img   v-for="image in data.content.image" :key="image" :src="getImage(image)"/> --->
            <ImageLayout :images="data.content.image.map(m=>getImage(m))"/>
        </div>
        <b-row class="post-toolbar">
            <b-col col="12" md="12">
             <b-row class="clear-fix" style="position:relative;" >
                <b-col > <div v-if="data && data.total_like != 0"> <img width="20" style="position:relative;top:-2px" src="@/assets/Images/feed/ic_red_heart.png">  {{data && data.total_like}} </div> </b-col>   
                <b-col > <div v-if= "data && data.total_comment != 0"  style="text-align:right">{{data && data.total_comment}}  bình luận</div> </b-col>
            </b-row>
            </b-col>
            <b-col @click="handleTouchLike" class="item-button text-center" >
                 <img v-if="data && data.isLike" src="@/assets/Images/feed/ic_like_active.png"> 
                <img v-if="data == null || !data.isLike" src="@/assets/Images/feed/ic_like.png"> Thích 
            </b-col>
            <b-col  @click="openDetail()" class="item-button text-center"  >
                <img src="@/assets/Images/feed/ic_comment.png"> Bình luận
            </b-col>
        </b-row>
        <div v-if="comment">
            <hr/>
            <div>
            
            </div>
        </div>
    </div>
</template>
<script>

import { buildAvatarUrl } from "@/network/ApiProvider";
import ImageLayout from "./ImageLayouts/ImageLayout.vue"
export default {
  name: 'PostBoxItem',
  components:{
      ImageLayout
  },
  props:["user","data","box"],
  data(){
      return { 
          showcomment : false
      }
  }, 
  mounted(){ 
      if (this.box == null) {
          this.box = true
      }
  },
  methods: {
    openProfile(){
         this.$emit("profileView",this.data.user._id)
    },
    handleTouchLike(){
        if (this.data.isLike) {
                this.data.total_like -= 1
        } else {
             this.data.total_like += 1
        }
        this.$emit("like",this.data)
    },
    getImage(url){
        if (this.box == null) {
        this.box = true
        }
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
.content {
     
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
margin-top: 10px;
color: #000000; 
}
.box-item{
    position:relative
}
.user-info {
    margin-left: 40px;
     cursor: pointer;
}
.user-info .name {
   
font-style: normal;
font-weight: bold;
font-size: 14px; 
color: #333333; 
}
.user-info .time { 
font-style: normal;
font-weight: normal;
font-size: 12px; 
color: #858585; 
}

.user-avatar{
    margin: 5px 0px;
    width: 32px;
    height: 32px; 
    border-radius: 16px;
    position: absolute;
    background-size: cover;
    cursor: pointer;
} 
hr {
    margin: 5px -11px;
    background-color: #ADADAD;
    height:2px;
}
.post-toolbar{
    padding: 0px 0px 0px 0px;
}
.item-button{
    padding: 5px 8px ;
    cursor: pointer;
    display: inline-block;
    color:#666666;
    font-weight: 800;
    border-radius: 5px; 
    margin-right:10px;
}
.item-button:hover{
    background: #EBFAF2; 
}
.images{
    margin: 10px -15px 
}
.images img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    object-position: top;
}
</style>