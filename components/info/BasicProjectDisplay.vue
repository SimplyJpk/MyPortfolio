<template>
  <div class="ProjectWindow">
    <img :alt="imgAlt" :srcset="fastImage" :src="imgSource" class="SplashProject">
    <p class="ProjectName TitleFont">
      {{ projectText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgAlt: {
      type: String,
      default: ''
    },
    fastImage: {
      type: String,
      default: ''
    },
    imgSource: {
      type: String,
      required: true
    },
    projectText: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.lazyLoad > .isLoading {
  opacity: 0;
}
.lazyLoad > .isLoaded {
  transition: 1s;
  opacity: 1;
}
</style>

<style scoped>
.SplashProject {
  display: flex;
  width:100%;
  min-width: 200px;
  max-width: 300px;
  min-height: 200px;
  max-height: 300px;
  border-radius: 0px;
  padding: 0px;
  border: 1px solid #38383832;
  transition: 1s;
  opacity: 1;
  animation: fadeIn ease 0.5s;
}
.ProjectName {
  margin-top:0.5rem;
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
  background-color: transparent;
  width:100%;
  transition-duration: inherit;
  animation: fadeIn ease 1.5s;
}
.ProjectWindow {
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
  width:auto;
  color:white;
  min-width: 200px;
  min-height: 200px;
  background-color: #222222;
  border-radius: 15px 15px 15px 15px;
  text-shadow: 1px 2px #161616 ;
  text-align: center;
  transition-duration: 0.5s;
  animation: fadeIn ease 0.25s;
  overflow: hidden;
}
/* Hovers */
.ProjectWindow:hover {
  /*border: 1px solid #2e2e2e;*/
}
/*.ProjectWindow:hover > .SplashProject {
  border-radius: 30px 30px 30px 30px;
} */
.ProjectWindow:hover > .ProjectName {
  text-shadow: 1px 2px #161616 ;
  background-color: #213140;
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
</style>
