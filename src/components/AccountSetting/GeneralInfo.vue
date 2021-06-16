<template>
    <div class="box-shadown general-info">
        <h2>Thông tin chung </h2>
  
        <b-row>
            <b-col  xs='12' sm="12" md="6" :class="screen_small"> 
                <div class="profile-avatar-view">
                    <center>
                    <div class="avatar-img" style="background-image: url('https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-anh-1.jpg')"/>
                    </center> 
                    <div class="bade success element">
                    Đã xác thực
                    </div>
                    <div class="element"> 
                    <b-button variant="outline-success" > Đổi ảnh đại diện</b-button>
                    </div>
                </div>
            </b-col>
            <b-col xs='12'  sm="12" md="6">
             <br/>
              <InputInfoBox title="Họ và tên"  >
                <input class="input"/>
              </InputInfoBox>
             
               <InputInfoBox title="Số điện thoại" :disable="true">
                <input class="input"/>
              </InputInfoBox>
               <InputInfoBox title="Địa chỉ email" >
                <input class="input"/>
              </InputInfoBox>
                <InputInfoBox title="Giới tính"  >
                <input class="input" placeholder="Tin ddax "/>
              </InputInfoBox>
              <InputInfoBox title="Ngày sinh" >
                <input class="input" placeholder="Tin ddax "/>
              </InputInfoBox>
               <InputInfoBox title="Địa chỉ" >
                <input class="input" placeholder="Tin ddax "/>
              </InputInfoBox>
                
             </b-col>
           

            <div style="margin-left:-5px">
            <b-col style="display:flex;" xs="12" md="6" > 
                <br/>
                <b-button block class="btn-action" variant="success" >Lưu thông tin</b-button>
                <b-button block class="btn-action" variant="default" disabled>Xác thực email</b-button>
            </b-col>
            </div>
        </b-row>
       
       
    </div>
</template>
 
<style scoped>

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


.profile-avatar-view  .element {
    margin-top:10px !important
} 

 .btn-action {
margin: 5px;
}
.profile-avatar-view {
background-color: white;
border-radius: 8px;
padding:16px; 
min-height: 200px;
text-align: center;
}

.profile-avatar-view .bade{
display: inline-block;
font-size: 12px;
padding:2px;
border-radius: 4px;
background-color: gray;
 margin:auto;
}

.bade.success {
background-color: #EBFAF2;
color:#33CC7F
}

.profile-avatar-view .avatar-img {
width:150px; 
height: 150px;
 border-radius:75px;
 background-position: center;
 background-size:cover;
 margin-top: 0px
}
 
.general-info{
    padding: 20px;
} 
.general-info h2 {
font-size: 16px;
color: #333333;
font-weight: bold;
padding-bottom: 5px;
}

.general-info .input{
    outline: none;
    border: none;
    background: transparent;
    color: #888888
}
</style>


<script>
import InputInfoBox from './InputInfoBox.vue' 
export default {
  name: 'GeneralInfo',
  components: {
    InputInfoBox
  },
  computed: {
    screen_small() {
   
        return "profile-avatar-container-float"
    },
}
}
</script>
