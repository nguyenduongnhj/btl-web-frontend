<template>
    <img class="w-100"   :src="images[0]"/>
</template>


<script>
export default {
  name: 'ImageLayoutOne',
  components:{
      
  },
  props:["images"] 
}

</script>
<style scoped>
img {
    max-height: 100%;
    object-fit: cover;
    object-position: top center; 
}
</style>