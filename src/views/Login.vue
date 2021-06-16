<template>
  <b-container>
  <br>
    <div style="position:relative">
      <b-row>
        <b-col md="4" sm="12">
          <PanelLogin/>
        </b-col>
        <b-col md="8" sm="12" class="d-none d-sm-none d-md-block">
        <HelpLogin/>
        </b-col> 
      </b-row>
    </div>
  </b-container>
</template>

<script>
import PanelLogin from "@/components/Login/PanelLogin"
import HelpLogin from "@/components/Login/HelpLogin"
export default {
  name: 'Login',
  components: { 
    PanelLogin,
    HelpLogin
  }
}
</script>
