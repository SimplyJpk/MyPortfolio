<template>
  <div class="ProjectDisplay">
    <ProjectInfo v-for="(item) in visibleProjects" :key="item.id + item.name" :project="item" />
  </div>
</template>

<script>
import ProjectInfo from '~/components/projects/ProjectInfoWindow'

export default {
  components: {
    ProjectInfo
  },
  props: {
    visibleProjects:
    {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.ProjectDisplay {
}
</style>
