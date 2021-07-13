<template>
    <div class="box-shadown profile-avatar-view-container">
         <div class="bade success ">
           Đã xác thực
        </div>
        <center>
            <div class="avatar-img" :style="`background-image: url('${getAvatar(data&&data.avatar)}')`"/>
        </center>

        <div class="profile-name">
            <span> {{ data && data.full_name}} </span>
        </div>
        <div class="profile-slug">
            <span> {{roleText()}} </span>
        </div>
        <hr style="margin: 10px -16px;background:#858585">
         <div class="flow-card clearfix">
            <div class="icon"> <img src="@/assets/Images/profile/ic_flow.png"> </div>
            <div class="text">
                <div>{{ (data && data.total_followings) || "0"}}</div>
                 <div class="desc">Người theo dõi</div>
            </div>
            <b-button v-if="!hideFlowButton && !isFlow" @click="flow" class="btn-flow" size="md" variant="success"> Theo dõi</b-button>
             <b-button v-if="!hideFlowButton && isFlow" @click="flow" class="btn-flow" size="md" variant="warning"> Bỏ Theo dõi</b-button>
        </div> 
        

    </div>

</template>

<script>
import { buildAvatarUrl } from "@/network/ApiProvider";

export default {
  name: 'LeftProfileAvatar',
  components: {

  },
  props: ["data","hideFlowButton","isFlow"],
  methods: {
    roleText(){
       return   (this.data && this.data.roles &&(this.data.roles.indexOf("TUTOR") >= 0 )) ?"Đẹp troai" : "Người dùng"
    },
    getAvatar(url) {
      return buildAvatarUrl(url).replace(/\\/g,"/");
    },
    flow() {
      this.$emit("flow",this.data._id)
    }
  }
}
</script>


<style scoped>
.btn-flow {
    position: absolute;
    top: 7px;
    right: 5px;
    font-size: 12px;
}
.profile-avatar-view-container{
background-color: white;
border-radius: 8px;
padding:16px; 
min-height: 200px;
}

.profile-avatar-view-container .bade{
display: inline-block;
font-size: 12px;
padding:2px;
border-radius: 4px;
background-color: gray;
float: right;
}

.bade.success {
background-color: #EBFAF2;
color:#33CC7F
}

.profile-avatar-view-container .avatar-img {
width:150px; 
height: 150px;
 border-radius:75px;
 background-position: center;
 background-size:cover;
 margin-top: 40px
}
.profile-avatar-view-container .profile-name{
margin-top: 24px;
font-size: 16px;
font-weight: 800;
color: #333333;
text-align: center;
}
.profile-avatar-view-container .profile-slug {
margin-top: 5px;
font-size: 14px;
font-weight: 400;
color: #858585;
text-align: center;
}
</style>

<style scoped>
.flow-card {
position: relative;
}
.flow-card .icon{
width: 40px;
height: 40px;
border-radius: 20px;
background-color: #f0f0f0;
position: absolute;
}

.flow-card .text{
font-weight: bold;
font-size: 14px;
margin-left:50px;
}
.flow-card .text .desc {
font-weight: 400;
font-size: 12px;
color:#858585
}

.icon{
  padding: 8px
}
.icon img{
width:100%;
height: 100%;

}

</style>