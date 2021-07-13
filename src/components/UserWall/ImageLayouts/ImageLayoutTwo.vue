<template>
 
     <b-row>
    <b-col style="padding:1px"> <img class="w-100"  :src="images[0]"/></b-col>
    <b-col style="padding:1px"> <img class="w-100"  :src="images[1]"/></b-col> 
  </b-row>
</template>


<script>
export default {
  name: 'ImageLayoutTwo',
  components:{
      
  },
  props:["images"] 
}

</script>
<style scoped>
img {
    max-height: 600px;
    object-fit: cover;
    object-position: top; 
    margin: 0px -10px;
}

</style>