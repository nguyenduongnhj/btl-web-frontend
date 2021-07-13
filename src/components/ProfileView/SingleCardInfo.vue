<template>
    <div class="box-shadown single-card ">
        <div class="clearfix">
            <div class="icon"> <img v-if="icon" :src="require('/src/assets/Images/profile/'+this.icon)"></div>
            <div class="text">
                <div>{{title || "Đang cập nhập ..."}}</div>
                 <div class="desc">{{sub || "Đang cập nhập ..."}}</div>
            </div>
        </div> 
        
    </div>
</template>
<script>
export default {
  name: 'SingleCardInfo',
  components: {

  },
  props:["title","sub",'icon']
}
</script>
<style scoped>
.single-card {
position: relative;
}
.single-card .icon{
width: 40px;
height: 40px;
border-radius: 20px;
background-color: #f0f0f0;
position: absolute;
}

.single-card .text{
font-weight: bold;
font-size: 14px;
margin-left:50px;
}
.single-card .text .desc {
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