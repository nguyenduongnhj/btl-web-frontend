<template>
  <b-container> 
    <div style="position:relative">
      <b-row>
         <b-col md="2" sm="12">
        
        </b-col>
        <b-col md="8" sm="12" class="box-shadown">
          <PostBoxItem  :data="article" :box="false"  @like="onTouchLike($event)"/>
          <PostBoxCommentInput v-if="authenUser" :user = "authenUser" :target = "postId" @reloadComment="reloadComment" />
          <div> 
              <CommentItem v-for="comment in comments" :key="comment._id" :data="comment" @profileView="profileView($event)" /> 
            
          </div>
        </b-col> 
        <b-col md="2" sm="12">
        
        </b-col>
      </b-row>
    </div>
   
    <scroll-loader :loader-method="loadMoreData" :loader-disable="disableLoadMore">
</scroll-loader>
  </b-container>
</template>

<script>
/*
import LeftProfileAvatar from "@/components/ProfileView/LeftProfileAvatar.vue"
import SingleCardInfo from "@/components/ProfileView/SingleCardInfo.vue"
import ProfileIntroduction from "@/components/ProfileView/ProfileIntroduction.vue"
 import FloatNavigation from "@/components/Common/FloatNavigation.vue"
import PostArticleBox from "@/components/UserWall/PostArticleBox.vue"
 import ModalPostArticle from "@/components/Modal/ModalPostArticle.vue"
*/ 
import CommentItem from  "@/components/UserWall/CommentItem.vue"
import PostBoxCommentInput from "@/components/UserWall/PostBoxCommentInput.vue"
import PostBoxItem from "@/components/UserWall/PostBoxItem.vue"
import { createNamespacedHelpers } from 'vuex'
import { isAuthen, getUserInfo } from "@/common/AppData"
const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')
export default {
  name: 'PostDetailView',
  components: {
  /*  LeftProfileAvatar,
    SingleCardInfo,
    ProfileIntroduction,
    FloatNavigation,
    PostArticleBox,
    ModalPostArticle, */
    PostBoxItem,
    PostBoxCommentInput,
    CommentItem
  },
  mounted(){ 
    this.postId = this.$route.params.id
    this.loadDetail()

    if (isAuthen()){
      this.authenUser = getUserInfo()
    }
  },
  data(){
    return {
      article: null,
      comments: [],
      postId: null,
      nextPageComment: null,
      
      disableLoadMore: false,
      authenUser: null
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
           "uploadLoading":"isUpLoading"
        })
  },
  methods:{ 
    ...userModule.mapActions({ 
      "doGetPublicInfo":"actionGetPublicInfo", 
    }),
    ...postModule.mapActions({
        "doUploadPost":"actionUploadPost",
       "doGetArticle": "actionGetPostDetail",
       "doLike":"actionLikePost",
       "doUnlike":"actionDisLikePost",
       "doGetPostComments":"actionGetComments",
        "doLoadMore":"actionLoadMore"
    }),
    reloadComment(){
      this.article.total_comment += 1
      this.loadComment()
    },
    onTouchLike(data){
        if (data.isLike) {
          data.isLike = false
          this.doUnlike(data._id)
        } else {
          data.isLike = true
          this.doLike(data._id)
        }
    }
    ,
    loadMoreData (){
        if (this.article  == null){
          return
        }
        this.disableLoadMore = true
        this.doLoadMore(this.nextPageComment).then((m)=>{
          
          this.comments.push(... m.comments)
          this.nextPageComment = m.next_page
          if (m.comments.length > 0) {
             this.disableLoadMore = false
          }
        })
    },
    loadDetail(){ 
      this.disableLoadMore = true 
        this.doGetArticle( this.postId ).then(m=>{
          this.article = m
        })
        this.loadComment()
        
    },
    loadComment() {
      this.doGetPostComments( this.postId ).then(m => {
          console.log(m)
          this.comments = m.comments
          this.nextPageComment = m.next_page
          this.disableLoadMore = false
        })
    },
    profileView(id) {
     this.$router.push('/profile/'+id)
    }
  }, 
  watch:{
      "$route"(){  

       this.postId = this.$route.params.id
       this.loadDetail()
    },
  }
}
</script>
