<template>
    <div id="nav-top">
        <div style="float:right;padding:3px">
            <b-button href="/#/" class="btn" variant="default">{{$t("login")}}</b-button>
            <b-button href="/#/register" class="btn" variant="success">{{$t("register")}}</b-button>
        </div>
     </div>
</template>
<style scoped>
#nav-top {
width:100%;
position: fixed;
top:0px;
left: 0px;
height: 40px;
background: #ffffff;
box-shadow: 0px 2px 10px rgba(0, 0, 0,0.08);
z-index: 9999;
}
.btn{

padding: 5px !important;
border-radius: 2px !important;
}
</style>