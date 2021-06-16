<template>
  <b-container>
  <br>
    <div style="position:relative">
      <b-row>
        <b-col md="4" sm="12">
        <LeftProfileAvatar/>
        
        <FloatNavigation/>
        <SingleCardInfo/>
        <SingleCardInfo/>
        <SingleCardInfo/> 
        </b-col>
        <b-col md="8" sm="12">
        <ProfileIntroduction/>
        <MutilCardInfo/>
        <MutilCardInfo/>
        <MutilCardInfo/>
        <MutilCardInfo/>
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

export default {
  name: 'ProfileView',
  components: {
    LeftProfileAvatar,
    SingleCardInfo,
    ProfileIntroduction,
    MutilCardInfo,
    FloatNavigation
  }
}
</script>
