<template>
    <div class="box-shadown box-post-article">
        <div>
            <div class="user-avatar" :style="{ backgroundImage: 'url(' + getAvatar() + ')' }">

            </div>
            <div @click="touchPost" class = "content-placehoder"> Chào {{data.name|lastWord}} hãy chia sẻ gì đó</div>
        </div>
        <div class="post-toolbar">
                <div class="item-button" @click="touchImage" >
                    <img src="@/assets/Images/feed/ic_feed_image.png"> Hình ảnh
                </div>
                 <div class="item-button"  @click="touchVideo" >
                    <img src="@/assets/Images/feed/ic_feed_image.png"> Video
                </div>
        </div>
    </div>
</template>
<script>
import { buildAvatarUrl } from "@/network/ApiProvider";

export default {
  name: 'PostArticleBox',
  components:{
      
  },
  props:["user"],
  data(){
      return {
          data:{}
      }
  },
  mounted(){
      this.data = this.user
  },
  methods: {
    getAvatar() {
     return buildAvatarUrl(this.data && this.data.avatar).replace(/\\/g,"/");
    },
      touchImage(){
        this.$emit("action",{type:"image"})
      },
      touchPost() {
          this.$emit("action",{type:"post"})
      },
      touchVideo() {
           this.$emit("action",{type:"video"})
      }
  },
  watch:{
      user(val){
          this.data = val
      }
  }
}
</script>

<style scoped>
.box-post-article{
    position:relative
}
.user-avatar{
    margin: 5px 0px;
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 15px;
    background-size: cover;
}
.content-placehoder {
    position: absolute;
    top: 18px;
    left: 60px;
    color:#666666;
    cursor: pointer;
}
.post-toolbar{
    padding: 20px 0px 8px 0px;
}
.item-button{
    padding: 5px 8px ;
    cursor: pointer;
    display: inline-block;
    color:#00B14F;
    border-radius: 5px; 
    margin-right:10px;
}
.item-button:hover{
    background: #EBFAF2; 
}
</style>