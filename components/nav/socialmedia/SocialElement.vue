<template>
  <div :style="{ 'background-color': socialData.background }" class="SocialMedia">
    <a :href="socialData.url" target="_blank"><img :title="socialData.name" :src="socialData.img" class="SocialButton"></a>
  </div>
</template>

<script>
export default {
  props: {
    socialData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.SocialMedia {
  border-radius: 50% 50% 50% 50%;
  margin-left:5px;
  margin-right:5px;
  padding:5%;
  width: 35px;
  height:35px;
  opacity: 0.25;
  transition-property: opacity, box-shadow;
  transition-duration: 0.66s;
}

.PlusSize .SocialMedia {
  width:50px;
  height:50px;
}

.SocialMedia:hover {
  opacity: 1;
  box-shadow: 4px 4px #181818;
}
.SocialButton {
  width: 100%;
  height:100%;
  vertical-align: 50%;
}
</style>
