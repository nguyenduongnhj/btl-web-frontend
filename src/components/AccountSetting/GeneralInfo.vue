<template>
  <div class="box-shadown general-info">
    <h2>Thông tin chung</h2>

    <b-row>
      <b-col xs="12" sm="12" md="6" :class="screen_small">
        <div class="profile-avatar-view">
          <center>
            <b-alert
              variant="danger"
              fade
              :show="isUploadAvaError"
              @dismissed="showDismissibleAlert = false"
            >
              {{ $t(uploadAvaErrorMessage) }}
            </b-alert>
            <div
              id="previewAvatar"
              ref="previewAvatar"
              class="avatar-img"
              v-bind:style="{
                'background-image': 'url(' + getAvatar(data && data.avatar) + ')',
              }"
            >
              <div v-if="isUploadingAva" class="upload-overlay">
                {{ uploadAvaPercent | displayPercent }}
              </div>
            </div>
          </center>
          <div class="bade success element">Đã xác thực</div>
          <div class="element">
            <b-button v-on:click="onChangeAvaClick" variant="outline-success">
              Đổi ảnh đại diện</b-button
            >
            <input
              style="display: none"
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />
          </div>
        </div>
      </b-col>
      <b-col xs="12" sm="12" md="6">
        <br />
        <InputInfoBox title="Họ và tên">
          <input class="input" v-model="data.first_name" />
        </InputInfoBox>

        <InputInfoBox title="Số điện thoại" :disable="true">
          <input class="input" v-model="data.phone_number" disabled />
        </InputInfoBox>
        <InputInfoBox title="Địa chỉ email" :disable="true">
          <input class="input" v-model="data.email" disabled/>
        </InputInfoBox>
        <InputInfoBox title="Giới tính">
          <b-dropdown
            class="input dropdown"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              {{ $t((data && data.gender) || "select_gender") }}
            </template>
            <b-dropdown-item v-on:click="selectGender('male')" href="#">{{
              $t("male")
            }}</b-dropdown-item>
            <b-dropdown-item v-on:click="selectGender('female')" href="#">{{
              $t("female")
            }}</b-dropdown-item>
            <b-dropdown-item v-on:click="selectGender('other')" href="#">{{
              $t("other")
            }}</b-dropdown-item>
          </b-dropdown>
        </InputInfoBox>
        <InputInfoBox title="Ngày sinh">
          <input
            class="input"
            placeholder="Ngày sinh"
            v-model="birthday"
          />
        </InputInfoBox>
        <InputInfoBox title="Địa chỉ">
          <input class="input" placeholder="Địa chỉ" v-model="data.address" />
        </InputInfoBox>
      </b-col>

      <div style="margin-left: -5px">
        <b-col style="display: flex" xs="12" md="6">
          <br />
          <b-button
            v-on:click="onUpdateData"
            block
            class="btn-action"
            variant="success"
            >Lưu thông tin</b-button
          > 
        </b-col>
      </div>
    </b-row>
  </div>
</template>
 
<script>
import moment from "moment"

import InputInfoBox from "./InputInfoBox.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("profile");
const authenVuexNameSpace = createNamespacedHelpers("authen");
import { getUserInfo } from "@/common/AppData";
import { buildAvatarUrl } from "@/network/ApiProvider";
import i18next from "@/common/i18n"
export default {
  name: "GeneralInfo",
  data() {
    return {
      data: {},
      birthday: ""
    };
  },
  components: {
    InputInfoBox,
  },
  mounted() {
    this.getProfile({ user: "" });
  },
  computed: {
    ...mapState({
      loading: "isGetProfileLoading",
      profile: "getProfileData",

      isUpdateProfileLoading:"isUpdateProfileLoading",
      updateProfileMessage:"updateProfileMessage",

      isUploadingAva: "isUploadingAvatar",
      uploadAvaPercent: "percentUploadAvatar",
      uploadAvaResult: "uploadAvatarData",
      uploadAvaErrorMessage: "uploadAvatarMessage",
      isUploadAvaError: "isUploadAvatarError",
    }),
    screen_small() {
      return "profile-avatar-container-float";
    },
  },
  methods: {
    onChangeAvaClick() {
      this.$refs.file.click();
    },
    handleFileUpload() {
      let userId = getUserInfo()._id;
      let file = this.$refs.file.files[0];
      if (file == null) {
        return;
      }
      this.updateAvatar({ file: file, id: userId });
    },
    selectGender(gender) {
      this.data.gender = gender;
    },
    getAvatar(url) {
      return buildAvatarUrl(url).replace(/\\/g,"/");
    },
    onUpdateData() {
      this.data.birthday = moment(this.birthday, 'DD/MM/YYYY')
      this.updateProfile(this.data);
    },
    ...mapActions({
      getProfile: "actionGetProfile",
      updateProfile: "actionUpdateProfile",
      updateAvatar: "actionUpdateAvatar",
    }),
    ...authenVuexNameSpace.mapActions({
       changeUserInfo: 'actionChangeUserInfo'
    })
  },
  watch: {
    profile(val) {
      this.data = val || {};
      if (val && val.birthday != null && val.birthday != "" ){
       this.birthday =  moment(String(val.birthday)).format('DD/MM/YYYY')
      }
    },
    uploadAvaResult(val) {
      if (val == null) {
        return;
      }
      this.data.avatar = val.filename;
    
      this.changeUserInfo({avatar: val.filename})
    },
    isUpdateProfileLoading(val){
      if (val == true) {
        return
      }
      if (this.updateProfileMessage == null){
        return
      }
      this.changeUserInfo({name: this.data.first_name})
      let message = Array.isArray(i18next.t(this.updateProfileMessage))?i18next.t(this.updateProfileMessage).join(", "):i18next.t(this.updateProfileMessage) 
      this.$swal("",message)
    }
  },
};
</script>


 <style>
.general-info .input.dropdown,
.input.dropdown .dropdown-toggle {
  width: 100%;
  text-align: left;
  color: #888888 !important;
  padding: 0px 0px !important;
  font-size: 15px;
  font-weight: 400 !important;
}
</style>
<style scoped>
.upload-overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: white;
  padding-top: 40%;
  font-size: 20px;
}
.profile-avatar-container-float {
  position: absolute;
  right: 0px;
}
@media (max-width: 760px) {
  .profile-avatar-container-float {
    right: 0px;
    position: static;
  }
}

.profile-avatar-view .element {
  margin-top: 10px !important;
}

.btn-action {
  margin: 5px;
}
.profile-avatar-view {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  min-height: 200px;
  text-align: center;
}

.profile-avatar-view .bade {
  display: inline-block;
  font-size: 12px;
  padding: 2px;
  border-radius: 4px;
  background-color: gray;
  margin: auto;
}

.bade.success {
  background-color: #ebfaf2;
  color: #33cc7f;
}

.profile-avatar-view .avatar-img {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-position: center;
  background-size: cover;
  margin-top: 0px;
  background-color: #eaeaea;
}

.general-info {
  padding: 20px;
}
.general-info h2 {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  padding-bottom: 5px;
}

.general-info .input {
  outline: none;
  border: none;
  background: transparent;
  color: #888888;
}
</style>

