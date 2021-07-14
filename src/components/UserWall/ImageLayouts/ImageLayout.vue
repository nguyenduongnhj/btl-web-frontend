<template>
    <div class="image-container w-100">
    <ImageLayoutOne v-if="images.length == 1" :images="images" />
    <ImageLayoutTwo v-if="images.length == 2" :images="images" />
    <ImageLayoutThree v-if="images.length > 2" :images="images" />
    
    </div>
</template>


<script>
import ImageLayoutOne from "./ImageLayoutOne.vue"
import ImageLayoutTwo from "./ImageLayoutTwo.vue"
import ImageLayoutThree from "./ImageLayoutThree.vue"
export default {
  name: 'ImageLayout',
  components:{
      ImageLayoutOne,
      ImageLayoutTwo,
      ImageLayoutThree
  },
  props:["images"] 
}

</script>

<style scoped>
.image-container{
    background-color: #f2efdf;
    overflow: hidden;
    text-align: center; 
}
</style>