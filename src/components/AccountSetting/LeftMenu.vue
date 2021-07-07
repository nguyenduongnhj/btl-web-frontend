<template> 
    <b-row class="box-shadown menu-container">
      <LeftMenuItem path="/account-setting" title="Thông tin chung" icon="ic_caculator.png"/>
      <LeftMenuItem path="/tutor-profile" title="Thông tin chi tiết" icon="ic_contact.png"/>
      <LeftMenuItem path="/account-security" title="Bảo mật"  icon="ic_protect.png"/> 
    </b-row> 
</template>

<style scoped>
.menu-container{
  margin: 0px 0px 16px 00px
}
</style>
<script>
import LeftMenuItem from "./LeftMenuItem.vue"
export default {
  name: 'SettingLeftMenu',
  components: {
    LeftMenuItem
  }
}
</script>
