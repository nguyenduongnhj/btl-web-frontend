<template>
    <div :class="classDisable">
        <div class="title" :style="{'font-size':(size||10)+'px'}">{{ title }}</div>
        <slot/>
    </div>
</template>
<style scoped>
.input-info-box {
    border: 0.5px solid #ADADAD;
    border-radius: 8px;
    padding:5px 10px;
    color:#858585;
    margin-bottom: 10px;
}
.input-info-box  .title {
    font-size: 10px;
    color:#333333;
    font-weight: bold;
}
.input-info-box.disable {
    background: #F3F3F3;
}
</style>
<script> 
export default {
  name: 'InputInfoBox',
  props: ['title','disable', 'size'],  
  computed: {
    classDisable(){
        if (this.disable){
            return "input-info-box disable" 
        }
         return "input-info-box" 
    }
  }
}
</script>