<script>
import NavigationTopBar from "@/components/Common/NavigationTopBar.vue"
export default {
  components: { 
    NavigationTopBar
  }
};
</script>

<template>
  <div>
  <NavigationTopBar/>
    <div id="app-container">
    <slot />
    </div>
  </div>
</template>

<style  >
#app-container { 
margin: 20px 0px 0px 0px;
}
</style>