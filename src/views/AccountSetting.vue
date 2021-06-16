<template>
  <b-container>
  <br>
    <div style="position:relative">
      <b-row>
        <b-col md="4" sm="12">
          <LeftMenu/>
        </b-col>
        <b-col md="8" sm="12">
          <GeneralInfo/>
        </b-col> 
      </b-row>
    </div>
  </b-container>
</template>

<script>

import GeneralInfo from "@/components/AccountSetting/GeneralInfo.vue"
import LeftMenu from "@/components/AccountSetting/LeftMenu.vue"
export default {
  name: 'AccountSetting',
  components: { 
    LeftMenu,
    GeneralInfo
  }
}
</script>
