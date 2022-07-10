<template>
  <div class="ProjectWindow">
    <ImgClick v-if="project.imgIconPath !== undefined" :source="project.imgIconPath + '.webp'" :largeSource="project.imgIconPath + '.jpg'" :alt="project.name" class="projectSplash" />
    <h2 class="projectTitle">
      {{ project.name }}
    </h2>
    <h5 v-if="project.date !== '' && project.productionPeriod !== ''" class="projectDate TitleFont">
      Created During: {{ project.date }}<br>Duration: {{ project.productionPeriod }}
    </h5>
    <h5 v-else-if="project.date !== ''" class="projectDate">
      Created During: {{ project.date }}<br>
    </h5>
    <h5 v-else-if="project.productionPeriod !== ''" class="projectDate">
      project Duration: {{ project.productionPeriod }}<br>
    </h5>
    <p v-if="project.shortDescription !== ''">
      <b>Description</b>: {{ project.shortDescription }}
    </p>
    <p v-if="project.gamePitch !== ''">
      <b>Elevator Pitch</b>: {{ project.gamePitch }}
    </p>
    <p v-if="project.readMore !== ''" class="projectReadMore">
      <nuxt-link v-if="project.isReadMoreLocal === true" :to="project.readMore">
        Read More...
      </nuxt-link>
      <a v-else :href="project.readMore">Read More...</a>
    </p>
  </div>
</template>

<script>
import ImgClick from '~/components/image/ImgClick'

export default {
  name: 'ProjectInformation',
  serverCacheKey (props) {
    return props.name
  },
  components: {
    ImgClick
  },
  props: {
    project:
    {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.ProjectWindow {
  position: relative;
  width:100%;
  max-width: 100%;
  margin-bottom: 25px;
  color:white;
  background-color: #24242480;
  border-radius: 15px 15px 15px 15px;
  border: 0.25rem solid #17171780;
  text-shadow: 1px 1px #171717 ;
  text-align: justify;
  text-justify:inter-word;
  height:auto;
  padding:1rem;
  overflow: hidden;
}
.projectSplash {
  margin-left: 1rem;
  margin-bottom: 0.25rem;
  min-width:200px;
  width:40%;
  max-height: 400px;
  height:250px;
  float:right;
  border-radius: 15px 15px 15px 15px;
  border: 0.125rem solid #1e1e1e;
}
.projectReadMore {
  float: left;
  position:absolute;
  bottom:5px;
  margin-bottom:0px;
}
</style>
