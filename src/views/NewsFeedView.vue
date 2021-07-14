<template>
  <b-container> 
    <div style="position:relative">
      <b-row>
        <b-col md="2" sm="12" style="">  
        </b-col>
        <b-col md="8" sm="12" style=""> 
           <PostArticleBox @action="doActionPost" :user="authenUser"/>
          <PostBoxItem @openDetail="openDetail($event)" @profileView="openProfile($event)" @like="onTouchLike($event)" v-for="item in articles" :key="item.id" :data="item" :box="true"/>
           <scroll-loader :loader-method="loadMoreData" :loader-disable="disableLoadMore"></scroll-loader>
        </b-col> 
        <b-col md="2" sm="12" style="">  
        </b-col>
      </b-row>
    </div>
    <ModalPostArticle @submit="onSubmitUpload($event)" :data="authenUser" ref="modal_post"/>
  </b-container>
</template>

<script>
 import PostArticleBox from "@/components/UserWall/PostArticleBox.vue"
import i18next from "@/common/i18n" 
import PostBoxItem from "@/components/UserWall/PostBoxItem.vue"
import { createNamespacedHelpers } from 'vuex' 
import { isAuthen, getUserInfo } from "@/common/AppData"
import ModalPostArticle from "@/components/Modal/ModalPostArticle.vue"

const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')
export default {
  name: 'NewsFeedView',
  components: {   
    PostArticleBox, 
    PostBoxItem,
    ModalPostArticle,
  },
  mounted(){ 
     this.getPublicProfile()
     if(isAuthen()){
       let info = getUserInfo()
       this.authenUser = info
     }
  },
  data(){
    return {
      authenUser:null,
      articles:[],
      nextPage: null,
      disableLoadMore: false
    }
  },
  computed:{
      ...userModule.mapState(
        {
          "loading":"isGetPublicInfoLoading",
          "isError":"isGetPublicInfoError",
          "profileData":"getPublicInfoData",
          "errorMessage":"getPublicDataMessage",  
        } ), 
        ...postModule.mapState({
           "uploadLoading":"isUpLoading",
           "upPostData":"upPostData"
        })
  },
  methods:{ 
    ...userModule.mapActions({ 
      "doGetPublicInfo":"actionGetPublicInfo", 
    }),
    ...postModule.mapActions({
      "doUploadPost":"actionUploadPost",
       "doGetArticle": "actionGetArticle",
       "doLike":"actionLikePost",
       "doUnlike":"actionDisLikePost",
       "doLoadMore":"actionLoadMore"
    }),
    
    openDetail(id) {
      this.$router.push('/detail/'+id)
    },
    handleFlow(id){
      console.log(id)
    },
    openProfile(id){
        this.$router.push('/wall/'+id)
    },
    onTouchLike(data){
        if (data.isLike) {
          data.isLike = false
          this.doUnlike(data._id)
        } else {
          data.isLike = true
          this.doLike(data._id)
        }
    },
    onSubmitUpload(e) {
      this.doUploadPost(e) 
    },
    doActionPost({type}) {
      console.log(type,this.$refs.modal_post.showModal )
      this.$refs.modal_post.showModal() 
    },
    getPublicProfile(){  
      this.disableLoadMore = true
      this.doGetArticle().then((x)=>{
        this.articles = x.posts
        this.nextPage = x.next_page
        this.disableLoadMore = false
      }) 
    },
    loadMoreData(){
      if (this.nextPage == null){
        this.disableLoadMore = true
        return
      }

      this.disableLoadMore = true
      this.doLoadMore(this.nextPage).then((x)=>{ 
        this.articles.push(...x.posts)
        if (x.posts.length > 0) {
            this.disableLoadMore = false
        }
        this.nextPage = x.next_page
      })
    }
       
  }, 
  watch:{
    isError(val){
      if(val == true){
       this.$swal("",i18next.t(this.errorMessage))     
      }
    },
    uploadLoading(val){ 
      if (val){
        return
      }  
    },
    upPostData(val){
      console.log("ava", val)
      if (val == null) {
        return
      }
      let data = [...this.articles]
      data.splice(0,0,val)
      this.articles = data
    }

  }
}
</script>
