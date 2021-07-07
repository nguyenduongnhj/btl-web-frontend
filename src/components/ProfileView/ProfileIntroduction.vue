<template>
    <div class="box-shadown profile-introduction">
        <div v-if="!hideTitle" class="title">Giới thiệu về {{(data && data.full_name)|lastWord}}</div>
         <div class="content">  {{data && data.profile && data.profile.introduce}}</div>
    </div>
</template>
<script>
export default {
  name: 'ProfileIntroduction',
  components: {

  },
  props:["data","hideTitle"]
}
</script>

<style scoped>
.profile-introduction .title {
font-size: 14px;
color: #333333;
font-weight: bold;
}
.profile-introduction .content{
font-size: 12px;
color: #666666;
font-weight: 400;
}
</style>