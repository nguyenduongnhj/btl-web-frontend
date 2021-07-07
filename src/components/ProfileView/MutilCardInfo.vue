<template>
    <div class="box-shadown mutil-card-info">
         <div v-if="showViewMore" class="action"> Xem thêm </div>
        <div class="title">{{title}}</div>
        <div class="content">
            <div v-for="x in data" :key="x.title">
            <div v-if="x.title" class="title">{{x.title}}</div>
            <div v-for="k in x.data" :key="k.title" class="clearfix item">
                <div class="icon"> </div>
                <div class="text">
                    <div>{{k.title}}</div>
                    <div class="desc">{{k.sub}}</div>
                </div>
            </div> 
             </div>
            
        </div>
    </div>
</template>
<script>
export default {
  name: 'MutilCardInfo',
  components: {

  },
  props:["showViewMore","title","data"]
}
</script>

<style scoped>
.mutil-card-info .title {
font-size: 14px;
color: #333333;
font-weight: bold;
padding-bottom: 5px;
}
.mutil-card-info .content{
font-size: 12px;
color: #666666;
font-weight: 400;
}

.mutil-card-info .content {
position: relative;
}
.mutil-card-info .content .icon{
width: 40px;
height: 40px;
border-radius: 20px;
background-color: #f0f0f0;
position: absolute;
}

.mutil-card-info .content .text{
font-weight: bold;
font-size: 14px;
margin-left:50px;
}
.mutil-card-info .content .text .desc {
font-weight: 400;
font-size: 12px;
color:#858585
}
.mutil-card-info .content .title {
    font-weight: 800;
    font-size: 13px;
    padding: 6px 0px;
    color: #666666
}

.mutil-card-info .action {
    float: right;
    font-size: 12px;
    color: #33CC7F
}
.mutil-card-info  .item{
    padding-bottom: 10px;
    font-size: 13px;
}
</style>