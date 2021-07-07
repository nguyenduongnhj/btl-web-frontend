<template>
  <b-container> 
    <div style="position:relative">
      <b-row>
        <b-col md="4" sm="12">
        <LeftProfileAvatar :hideFlowButton="hideFlowButton" :data ="profileData" /> 
        <FloatNavigation  :data ="profileData"/>
        <SingleCardInfo :title="getCity()" sub="Thành Phố đang sinh sống "/>
        <SingleCardInfo :title="getDateOfBirth()" sub="Ngày sinh" />
  
        <SingleCardInfo :title="getRate()" sub="Mọi người đánh giá" /> 
        </b-col>
        <b-col md="8" sm="12">
        <ProfileIntroduction  :data="profileData" />
        <MutilCardInfo v-if="getSchoolData()" title="Học vấn" :data="getSchoolData()"/>
        <MutilCardInfo v-if="getPrizeData()" title="Giải thưởng" :data="getPrizeData()"/>
        <MutilCardInfo v-if="getSpecializedData()" title="Chứng chỉ" :data="getSpecializedData()" />
        <MutilCardInfo v-if="getSkillData()" title="Kỹ năng" :data="getSkillData()" />
        </b-col> 
      </b-row>
    </div>
  </b-container>
</template>

<script>
import LeftProfileAvatar from "@/components/ProfileView/LeftProfileAvatar.vue"
import SingleCardInfo from "@/components/ProfileView/SingleCardInfo.vue"
import ProfileIntroduction from "@/components/ProfileView/ProfileIntroduction.vue"
import MutilCardInfo from "@/components/ProfileView/MutilCardInfo.vue"
import FloatNavigation from "@/components/Common/FloatNavigation.vue"
import i18next from "@/common/i18n"

import { createNamespacedHelpers } from 'vuex'
import { isAuthen, getUserInfo } from "@/common/AppData"
const userModule = createNamespacedHelpers('user')

export default {
  name: 'ProfileView',
  components: {
    LeftProfileAvatar,
    SingleCardInfo,
    ProfileIntroduction,
    MutilCardInfo,
    FloatNavigation
  },
  mounted(){
    this.getPublicProfile()

  },
  computed:{
      ...userModule.mapState(
        {
          "loading":"isGetPublicInfoLoading",
          "isError":"isGetPublicInfoError",
          "profileData":"getPublicInfoData",
          "errorMessage":"getPublicDataMessage"
        }
        
        )
  },
  data(){
    return {
      hideFlowButton: false
    }
  },
  methods:{ 
    ...userModule.mapActions({ 
      "doGetPublicInfo":"actionGetPublicInfo"
    }),
    getPublicProfile(){
      this.doGetPublicInfo(this.$route.params.id)
      if (isAuthen() ){
        let info = getUserInfo() 
        this.hideFlowButton = this.$route.params.id == info._id
      }
    },
    getDateOfBirth(){
      return this.profileData && this.profileData.birthday
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
    }
  }, 
  watch:{
    "$route"(){
      console.log(this.$route.params.id)
       this.getPublicProfile()
    },
    isError(val){
      if(val == true){
       this.$swal("",i18next.t(this.errorMessage))     
      }
    }
  }
}
</script>
