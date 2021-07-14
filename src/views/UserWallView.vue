<template>
  <b-container> 
    <div style="position:relative">
      <b-row>
        <b-col md="4" sm="12">
        <LeftProfileAvatar @flow="handleFlow($event)" :hideFlowButton="true" :data ="profileData" /> 
        <ProfileIntroduction :hideTitle="true" :data="profileData" />
        <FloatNavigation  :data ="profileData"/>
        <SingleCardInfo  icon="ic_location.png"  :title="getCity()" sub="Thành Phố đang sinh sống "/>
        <SingleCardInfo  icon="ic_user.png"  :title="getDateOfBirth()" sub="Ngày sinh" /> 
        <SingleCardInfo icon='ic_rate.png' :title="getRate()" sub="Mọi người đánh giá" /> 
        <div class="box-shadown btn-view-info" style="text-align:center" ><router-link :to="'/profile/'+profileData._id">Xem thông tin chi tiết</router-link></div>
        </b-col>
        <b-col md="8" sm="12">
          <PostArticleBox v-if="profileData && authenUser && profileData._id == authenUser._id" @action="doActionPost" :user="profileData"/>
          <PostBoxItem :box="true" @openDetail="openDetail($event)" @profileView="openProfile($event)" @like="onTouchLike($event)" v-for="item in articles" :key="item.id" :data="item"/>
        </b-col> 
      </b-row>
    </div>
    <ModalPostArticle @submit="onSubmitUpload($event)" :data="profileData" ref="modal_post"/>
    <scroll-loader :loader-method="loadMoreData" :loader-disable="disableLoadMore"></scroll-loader>
  </b-container>
</template>

<script>
import Vue from 'vue'
import LeftProfileAvatar from "@/components/ProfileView/LeftProfileAvatar.vue"
import SingleCardInfo from "@/components/ProfileView/SingleCardInfo.vue"
import ProfileIntroduction from "@/components/ProfileView/ProfileIntroduction.vue"
import FloatNavigation from "@/components/Common/FloatNavigation.vue"
import PostArticleBox from "@/components/UserWall/PostArticleBox.vue"
import i18next from "@/common/i18n"
import ModalPostArticle from "@/components/Modal/ModalPostArticle.vue"
import PostBoxItem from "@/components/UserWall/PostBoxItem.vue"
import { createNamespacedHelpers } from 'vuex'
import { isAuthen, getUserInfo } from "@/common/AppData"
const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')
export default {
  name: 'ProfileView',
  components: {
    LeftProfileAvatar,
    SingleCardInfo,
    ProfileIntroduction,
    FloatNavigation,
    PostArticleBox,
    ModalPostArticle,
    PostBoxItem
  },
  mounted(){ 
     if (this.$route.params.id != null) {
        this.profileId = this.$route.params.id
      } else {
         this.profileId  = null
      }

    if (isAuthen()) {
        this.getPublicProfile()
    }
  
  },
  data(){
    return {
      articles:[],
      nextPage: null,
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
     openProfile(id){
        this.$router.push('/wall/'+id)
    },
    handleFlow(id){
      console.log(id)
    },
    openDetail(id) {
      this.$router.push('/detail/'+id)
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
      
      let info = getUserInfo()
      this.authenUser = info
      if ( this.profileId  == null) {
         this.profileId  = info._id
      }
      this.doGetArticle(this.profileId).then((x)=>{
        this.disableLoadMore = false
        this.articles = x.posts
        this.nextPage = x.next_page
      })
      this.doGetPublicInfo(this.profileId)
    },
    getDateOfBirth(){
      return Vue.filter('displayBirthday')(this.profileData && this.profileData.birthday); 
    },
    getRate() {
      return null
    },
    getCity() {
      return null
    }, 
    getSkillData(){
      let skill  = this.profileData &&this.profileData.profile && this.profileData.profile.skill
      if (skill == null || skill.length < 1){
        return null
      }
      let data = skill.map((m)=>{
        return {
          title: m.name,
          sub: m.rate
        }
      })
      return [{
        title:null,
        data: data
      }]
    },
    getSpecializedData(){ 
      let specialized  = this.profileData &&this.profileData.profile && this.profileData.profile.specialized
      if (specialized == null || specialized.length < 1){
        return null
      }
      let data = specialized.map((m)=>{
        return {
          title: m.name,
          sub: m.desc
        }
      })
      return [{
        title:null,
        data: data
      }]
    },
    getPrizeData() {
     let prize  = this.profileData &&this.profileData.profile && this.profileData.profile.prize
      if (prize == null || prize.length < 1){
        return null
      }
      let data = prize.map((m)=>{
        return {
          title: m.name,
          sub: m.desc
        }
      })
      return [{
        title:null,
        data: data
      }]
    },
    getSchoolData(){
      let data = [  ]
      let profile = this.profileData &&this.profileData.profile
      if ( profile && profile.university){
        data.push({
          title: "Trường đại học",
          data:[{
            title:profile.university.name,
            sub:profile.university.major
          }]
        })
      }
      if ( profile && profile.hight_school){
        data.push({
          title: "Trường trung học",
          data:[{
            title:profile.hight_school.name,
            sub:profile.hight_school.date_graduation
          }]
        })
      }
      return data
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
    $route(){
      console.log("123")
      if (this.$route.params.id != null) {
        this.profileId = this.$route.params.id
      } else {
         this.profileId  = null
      }
      this.getPublicProfile()
    },
    isError(val){
      if(val == true){
       this.$swal("",i18next.t(this.errorMessage))     
      }
    },
    uploadLoading(val){
      console.log(val)
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

<style scoped>
.btn-view-info a{
text-decoration:  none;
color:#333333;
font-weight: bold;
}
.btn-view-info {
background-color: #FAFAFA;}
</style>