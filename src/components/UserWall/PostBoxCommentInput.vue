<template>
    <div class="box-comment-article">
          <div style="margin:10px 0px">
            <div class="user-avatar" :style="{ backgroundImage: 'url(' + getAvatar() + ')' }">

            </div>
            <div  class = "content-placehoder"> 
                <input v-model="text" v-on:keyup="validateSubmit" class="w-100" placeholder="Viết bình luận"/>
            </div>
        </div>
   
    </div>
</template>

<script>
import { buildAvatarUrl } from "@/network/ApiProvider";
import { createNamespacedHelpers } from 'vuex'
const postModule = createNamespacedHelpers('post')
export default {
  name: 'PostBoxCommentInput',
  components:{
      
  },
  props:["user", "target"],
  data(){
      return {
          data:{},
          text:""
      }
  },
  mounted(){
      this.data = this.user
  },
  methods: {
    ...postModule.mapActions({
        "doPostComment":"actionPostComment"
    }),
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
      },
      getSubmitData(){
        return {
            content: {image: [], video: [], type: "TEXT", text: this.text},
            post_id: this.target
        }
      },
      onSubmit(){
        if (this.text == null || this.text == ""){
              return
        }

        this.doPostComment(this.getSubmitData()).then(()=>{
            this.text = ""
            this.$emit("reloadComment")
        })

        
       
      },
     validateSubmit(e) {
      if (e.keyCode === 13) {
       this.onSubmit()
      } 
    },
  },
  watch:{
      user(val){
          this.data = val
      }
  }
}
</script>

<style scoped>
.box-comment-article{
    position:relative
}
.user-avatar{
    position: absolute;
    top:10px;
    left:0px;
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 15px;
    background-size: cover;
}
.content-placehoder { 
    margin-left: 40px;
    color:#666666;
    cursor: pointer;
    padding: 10px 5px;
    background-color: #EBFAF2;
    border-radius: 20px;

}
.content-placehoder input{
    outline: none;
    border-radius: none;
    border: none;
    background-color: transparent;
}
</style>