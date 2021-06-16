<template>
    <div class="box-shadown login-panel">
        <h2>  Đăng nhập để sử dụng </h2>
        <div class="content">
            <div class="social-login">
                <div class="fb-login-button" data-width="100%" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
            
                <div class="note">
                    Khi đăng nhập bằng facebook bạn mặc định đồng ý với <a href="#">Điều khoản dịch vụ</a> và  <a href="#">Chính sách bảo mật của </a> studyduo.com
                </div>
            </div>
            <hr>
            
            <div class="email-login">
                <h3>Hoặc sử dụng email </h3>

                <div class="content"> 
                     
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        v-model="account"
                        placeholder="Họ và tên"
                        required
                        ></b-form-input>
                        
                    </b-form-group>
                         <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        v-model="account"
                        placeholder="Email"
                        required
                        ></b-form-input>
                        
                    </b-form-group>
                     
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        type="password"
                        v-model="account"
                        placeholder="Mật khẩu"
                        required
                        ></b-form-input> 
                    </b-form-group> 
                    <b-form-group class="login-input">
                        <b-form-input
                        id="input-2"
                        type="password"
                        v-model="account"
                        placeholder="Nhập lại mật khẩu"
                        required
                        ></b-form-input> 
                    </b-form-group> 
                     <div class="note" > <input type="checkbox"/>  &nbsp; Tôi đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a> của studyduo.com </div>
                </div> 
               <div>
                <b-button block  variant="success">Đăng ký</b-button>
               </div>
               <br>
               <hr>
                <a href="#" class="btn btn-forgot btn-block" > 
                    Quên mật khẩu?
                </a> 
               
                <div>
                 <br>
                       <strong> Khó khăn khi tạo tài khoản? </strong><br>
                        Vui lòng gửi email hỗ trợ tới admin@studyduo.com để được hỗ trợ
                </div>
            </div>

        </div>
    </div>
</template>

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