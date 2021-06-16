<template> 
    <b-row class="box-shadown menu-container">
      <LeftMenuItem title="Thông tin chung"/>
      <LeftMenuItem title="Hồ sơ gia sư"/>
      <LeftMenuItem title="Bảo mật"/>
      <LeftMenuItem title="Thanh toán" />
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
