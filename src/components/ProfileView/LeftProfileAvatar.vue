<template>
    <div class="box-shadown profile-avatar-view-container">
         <div class="bade success ">
           Đã xác thực
        </div>
        <center>
            <div class="avatar-img" style="background-image: url('https://s.memehay.com/files/posts/20201110/meo-trang-beo-u-cuoi-voi-anh-mat-kha-o.jpg')"/>
        </center>

        <div class="profile-name">
            <span> Do ra gon </span>
        </div>
        <div class="profile-slug">
            <span> ph-xh@123 </span>
        </div>
    </div>

</template>

<style scoped>
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
 margin-top: 60px
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