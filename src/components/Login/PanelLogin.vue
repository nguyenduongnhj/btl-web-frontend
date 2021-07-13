<template>
    <div class="box-shadown login-panel">
        <h2>  Đăng nhập để sử dụng </h2>
        <div class="content">
            <div class="social-login">
                <div class="fb-login-button" data-width="100%" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
            
                <div class="note">
                    Khi đăng nhập bằng facebook bạn mặc định đồng ý với <a href="#">Điều khoản dịch vụ</a> và  <a href="#">Chính sách bảo mật của </a> appkhongten.com
                </div>
            </div>
            <hr>
            
            <div class="email-login">
                <h3>Hoặc sử dụng email </h3>
                  <b-alert
                    variant="danger" 
                    fade
                    :show="error"
                    @dismissed="showDismissibleAlert=false"
                    >
                {{$t(message)}}
                </b-alert>     
                <div class="content"> 
                     
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        v-model="username"
                        placeholder="Account"
                        required
                        ></b-form-input>
                        
                    </b-form-group>
                    
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        type="password"
                        v-model="password"
                        placeholder="Password"
                        required
                        ></b-form-input> 
                    </b-form-group> 
                </div> 
               <div>
              


                <b-button style="width:100%" v-on:click="onLogin"  block  variant="success">  <clip-loader v-if="loading" style="display:inline" :loading="loading" color="#ffffff" size="10px" />{{$t("login")}}</b-button>
               </div>
               <br>
               <hr>
                <a href="#" class="btn btn-forgot btn-block" > 
                    Quên mật khẩu?
                </a> 
               
                <div>
                 <br>
                       <strong> Bạn không đăng nhập được tài khoản? </strong><br>
                        Vui lòng gửi email hỗ trợ tới caidmconcho@gmail.com để được hỗ trợ
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
import { isAuthen, getUserInfo } from "@/common/AppData"
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('authen')


export default {
  name: 'PANEL LOGIN',
  components:{
      
  },
  mounted() {
      if (isAuthen()){
        let user = getUserInfo()
        this.$router.push('/profile/'+user._id) 
      }
  },
  data(){
      return {
      username:"phhieu29@gmail.com",
      password:"12345678" 
  }
  },
  computed:{
      ...mapState(["loading","data"]),
      ...mapGetters({
          error:"isError",
          message:"errorMessage"
      })
  },
  methods:{
      onLogin(){ 
          this.apiLogin({username: this.username,password: this.password})
      },
      ...mapActions({
      apiLogin: 'actionLogin',
      changeUserInfo: 'actionChangeUserInfo'
    })
  }, 
  watch:{
      data:function(val){
        if (val == null){
            return
        }
          console.log('data',)
        this.changeUserInfo({name:val.user.first_name, avatar: val.user.avatar})
         this.$router.push('/me') 
      }
  }
}
</script>

<style scoped>

.login-panel {
 padding: 20px 25px;
  font-size: 13px;
}

hr {
    padding:0px;
    margin:10px 0px;
}
.login-panel h3 {
    font-weight: 400;
    text-align: center;
    font-size: 14px;
    padding: 5px 0px;
    color:#666666
}
.login-panel h2 {
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    padding: 10px 0px;
    
}
.fb-login-button {
    width: 100%;
}
.social-login .note {
    padding: 10px 0px;
    font-size: 12px;
}
.social-login a {
    text-decoration: none;
    color:#00B14F;
    cursor: pointer;
}
.social-login a:hover { 
    color:#00AAAA

}

.email-login .content {
    padding: 14px 0px;
}
.login-input {
    padding-bottom: 10px;
}
</style>
