<template>
  <div>
    <div id="nav-top">
      <div class="left"> </div>
      <div class="mid">
       
      </div>
      <div class="right d-block-md d-lg-block d-block-sm d-none">
        <table>
          <tr>
            <td class="item">
              <router-link :to="'/profile/'+this.id">
                <div
                  class="avatar"
                  :style="{ backgroundImage: 'url(' + getAvatar(avatar) + ')' }"
                ></div>
                <div class="username">{{ name | lastWord }}</div>
              </router-link>
            </td>
            <td class="item">
              <div
                class="item-icon"
                :style="{
                  backgroundImage:
                    'url(' + require(`@/assets/Images/Notification.png`) + ')',
                }"
              ></div>
            </td>
            <td class="item">
              <div
                class="item-icon"
                :style="{
                  backgroundImage:
                    'url(' + require(`@/assets/Images/Message.png`) + ')',
                }"
              ></div>
            </td>
            <td class="item">
              <b-dropdown
                class="btn-setting"
                variant="none"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <div
                    class="item-icon"
                    :style="{
                      backgroundImage:
                        'url(' + require(`@/assets/Images/Setting.png`) + ')',
                    }"
                  ></div>
                </template>
                <b-dropdown-item @click="gotoSetting" href="#">Chỉnh sửa thông tin</b-dropdown-item>
                 <div class="spacehr" />
                <b-dropdown-item href="#">Đóng góp ý kiến</b-dropdown-item>
                 <div class="spacehr" />
                <b-dropdown-item href="#">Trợ giúp & Hỗ trợ</b-dropdown-item>
                <div class="spacehr" />
                <b-dropdown-item v-on:click="logOut()"
                  >Đăng xuất</b-dropdown-item
                >
              </b-dropdown>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!--- block --->
    <div style="height: 60px; width: 100%"></div>
  </div>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("authen");
import { buildAvatarUrl } from "@/network/ApiProvider";
import { getUserInfo } from "@/common/AppData"

export default {
  name: "HomeNavigationTopBar",
  data(){
    return {
      id:""
    }
  },
  computed: {
    ...mapState({
      name: "userName",
      avatar: "userAvatar"
    }),
  },
  mounted(){
  this.id = getUserInfo()._id
  },
  methods: {
    gotoSetting() {
         this.$router.push('/account-setting') 
    },
    logOut() {
      this.actionChangeUserInfo({ avatar: "", name: "" }).then(() => {
        this.actionLogout().then(() => {
          location.href = "/#/";
        });
      });
    },
    getAvatar(url) {
      return buildAvatarUrl(url);
    },
    ...mapActions(["actionLogout", "actionChangeUserInfo"]),
  },
  watch:{
    userName(){
      this.id = getUserInfo()._id
    }
  }
};
</script>

<style scoped>
#nav-top {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  z-index: 101;
  display: flex;
}
.btn {
  padding: 5px !important;
  border-radius: 2px !important;
}

.right {
  margin-right: 18px;
  z-index: 2;
}

.item {
  position: relative;
  padding: 13px 5px;
  cursor: pointer;
  top: 0px;
}
.item-icon {
  display: inline-block;
  width: 36px;
  height: 36px;
}
.mid {
  text-align: center;
  flex: 1;
}
.left {
}
.avatar {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 12px;
  left: -6px;
  border-radius: 20px;
  background: #eaeaea;
  display: inline-block;
  z-index: 1;
  border: 3px solid #e7fcf4;
  background-size: cover;
}

.username {
  display: inline-block;
  position: relative;
  top: -5px;
  left: -5px;
  background: #e7fcf4;
  color: #00b14f;
  font-size:13px;
  font-weight: 800;
  padding-left: 32px;
  padding-right: 10px;
  padding-top:10px;
  padding-bottom:8px;
  border-radius: 30px;
}

.item a {
  text-decoration: none;
}

.btn-setting {
  width: 36px;
  height: 36px;
}
</style>
<style>
.item .btn-group {
  display: inline-block;
}
.item .btn-setting .btn.btn-none {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin: 0px;
  padding: 0px;
  border: none;
  margin-top: -2px;
  outline: none;
}
.spacehr {
  height: 1px;
  background: #eaeaea;
  margin: 2px;
}
</style>