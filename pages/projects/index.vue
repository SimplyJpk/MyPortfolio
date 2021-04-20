<template>
  <div class="ProjectDisplay">
    <div v-for="(item) in ProjectData" :key="item.id + item.name">
      <ProjectInfo :project="item" />
    </div>
  </div>
</template>

<script>
import ProjectUtil from '~/assets/js/ProjectUtil'
import ProjectInfo from '~/components/projects/ProjectInfoWindow'

export default {
  components: {
    ProjectInfo
  },
  data () {
    return {
      ProjectData: ProjectUtil.GetAllProjectData()
    }
  }
}
</script>

<style>
</style>
