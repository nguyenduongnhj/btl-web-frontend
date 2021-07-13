<template>
  <div class="box-shadown security-info">
    <h2></h2>

    <b-row>
      <b-col xs="12" sm="12" md="12">
        <InputInfoBox title="Đăng nhập" size="14">
          <hr />
          <div class="item">
            <div v-on:click="togleShowPassword">
              <h2>Đổi mật khẩu</h2>
              <p>
                Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác
              </p>
            </div>
            <hr />
            <div v-if="isShowPasswordChange">
              <b-row style="max-width: 400px; margin: 10px 0px">
                <b-col xs="12" sm="5" md="5"> Mật khẩu hiện tại </b-col>
                <b-col xs="12" sm="7" md="7">
                  <input type="password" v-model="inputOldPassword" />
                </b-col>
              </b-row>
              <b-row style="max-width: 400px; margin: 10px 0px">
                <b-col xs="12" sm="5" md="5"> Mật khẩu mới </b-col>
                <b-col xs="12" sm="7" md="7">
                  <input type="password" v-model="inputPassword" />
                </b-col>
              </b-row>
              <b-row style="max-width: 400px; margin: 10px 0px">
                <b-col xs="12" sm="5" md="5"> Nhập lại mật khẩu mới </b-col>
                <b-col xs="12" sm="7" md="7">
                  <input type="password" v-model="inputConfirmPassword" />
                </b-col>
              </b-row>
              <b-row style="max-width: 400px; margin: 10px 0px">
                <b-col>
                  <b-alert
                  variant="danger"
                  fade
                  :show="isUpdatePassError"
                  @dismissed="showDismissibleAlert = false"
                >
                  {{ $t(updatePassMessage) }}
                </b-alert>
                <b-alert
                  variant="success"
                  fade
                  :show="isSuccess"
                  @dismissed="showDismissibleAlert = false"
                >
                  {{ $t(successMessage) }}
                </b-alert>

                  <b-button
                    variant="primary"
                    size="xs"
                    v-on:click="savePassword"
                    >Lưu thay đổi
                  </b-button>
                </b-col>
                <hr />
              </b-row>
            </div>
          </div>

          <div class="item disable">
            <h2>Lưu thông tin đăng nhập</h2>
            <p>
              <b style="color: #00b14f">Bật</b> - Thông tin đăng nhập sẽ được
              lưu trên trình duyệt của bạn
            </p>
          </div>
        </InputInfoBox>
      </b-col>

      <b-col xs="12" sm="12" md="12">
        <InputInfoBox title="Nâng cao" size="14">
          <hr />
          <div class="item disable">
            <h2>Khoá tải khoản</h2>
            <p>
              <b style="color: #b12000">Khoá tài khoản appkhongten.com của bạn </b>
            </p>
          </div>
        </InputInfoBox>
      </b-col>
    </b-row>
  </div>
</template>
 
<script>
import InputInfoBox from "./InputInfoBox.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("profile");
export default {
  name: "Security",
  data() {
    return {
      isShowPasswordChange: false,
      inputPassword: "",
      inputOldPassword: "",
      inputConfirmPassword: "",
      isSuccess: false,
      successMessage: ""
    };
  },
  components: {
    InputInfoBox,
  },
  mounted() {},
  computed: {
    ...mapState(
        {
            "isUpdatingPass":"isUpdatingPassword",
            "isUpdatePassError":"isUpdatePasswordError",
            "updatePassMessage":"updatePasswordMessage"
        }),
    screen_small() {
      return "profile-avatar-container-float";
    },
  },
  methods: {
    togleShowPassword() {
      this.isShowPasswordChange = !this.isShowPasswordChange;
      this.inputPassword = "";
      this.inputOldPassword = "";
      this.inputConfirmPassword = "";
      this.isSuccess = false;
      this.successMessage = "";
    },
    savePassword() {
      this.changePassword({
        oldPassword: this.inputOldPassword,
        password: this.inputPassword,
        confirmPassword: this.inputConfirmPassword,
      });
    },
    ...mapActions({
      changePassword: "actionChangePassword",
    }),
  },
  watch: {
    isUpdatingPass(value){
        if (value == false && this.isUpdatePassError == false ){
          this.isSuccess = true
          this.inputPassword = "";
          this.inputOldPassword = "";
          this.inputConfirmPassword = "";
          this.successMessage = "update_password_success"
        }
    }
  },
};
</script>

 
<style scoped>
.security-info .item.disable {
  color: #888888 !important;
  cursor: not-allowed;
}


.security-info .item.disable h2 {
  color: #888888 !important;
}

.security-info .item.disable p {
  color: #888888 !important;
}


.security-info {
  padding: 20px;
}

.security-info hr {
  margin: 5px 0px;
}
.security-info h2 {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  padding-bottom: 5px;
}

.security-info .input {
  outline: none;
  border: none;
  background: transparent;
  color: #888888;
}

.security-info .item {
  padding: 5px 0px;
  cursor: pointer;
}

.security-info .item h2 {
  padding: 2px 0px;
  margin: 0px;
  font-size: 16px;
}

.security-info .item p {
  padding: 0px;
  margin: 0px;
  font-size: 14px;
}
</style>

