

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
                        v-model="fullname"
                        placeholder="Họ và tên"
                        required
                        ></b-form-input>
                        
                    </b-form-group>
                         <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        v-model="email"
                        placeholder="Email"
                        required
                        ></b-form-input>
                    </b-form-group>
                         <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        v-model="phoneNumber"
                        placeholder="Số điện thoại"
                        required
                        ></b-form-input>   
                    </b-form-group> 
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        type="password"
                        v-model="password"
                        placeholder="Mật khẩu"
                        required
                        ></b-form-input> 
                    </b-form-group> 
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        type="password"
                        v-model="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        required
                        ></b-form-input> 
                    </b-form-group> 
                     <div class="note" > <input type="checkbox" v-model="checkPrivacyPolicy"/>  &nbsp; Tôi đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a> của appkhongten.com </div>
                </div> 
               <div>

                <b-button  style="width:100%"  v-if="checkPrivacyPolicy" v-on:click="onRegister()" block  variant="success">{{$t("register")}}</b-button>
                 <b-button style="width:100%"  v-if="!checkPrivacyPolicy" block  variant="default" disabled>{{$t("register")}}</b-button>
               </div>
               <br>
               <hr>
                <a href="#" class="btn btn-forgot btn-block" > 
                    {{$t("forget_password")}} 
                </a> 
               
                <div>
                 <br>
                    <strong> Khó khăn khi tạo tài khoản? </strong><br>
                        Vui lòng gửi email hỗ trợ tới caidmconcho@gmail.com để được hỗ trợ
                </div>
            </div>

        </div>
    </div>
</template>


<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('authen')


export default {
  name: 'PANEL REGISTER',
  components:{
      
  },
  data(){
      return {
      email:"",
      password:"",
      confirmPassword:"",
      fullname:"",
      phoneNumber:"",
      checkPrivacyPolicy: false
  }
  },
  computed:{
      ...mapState({"loading":"registerLoading","data":"data"}),
      ...mapGetters({
          error:"isRegisterError",
          message:"errorMessage"
      })
  },
  methods:{
      onRegister(){
        
          this.apiRegister(
              {
                username: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
                fullname: this.fullname,
                phoneNumber: this.phoneNumber,
                email: this.email
              })
      },
      ...mapActions({
      apiRegister: 'actionRegister'
    })
  }, 
  watch: {
        data: function (val) {
           if (this.isRegisterError || val == null){
               return
           }

           if (!val.success) {
                return 
           }
            this.$router.push('/')
 
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
.note {
    padding: 10px 0px;
    font-size: 12px;
}
.note a {
    text-decoration: none;
    color:#00B14F;
    cursor: pointer;
}
.note a:hover { 
    color:#00AAAA

}

.email-login .content {
    padding: 14px 0px;
}
.login-input {
    padding-bottom: 10px;
}
</style>