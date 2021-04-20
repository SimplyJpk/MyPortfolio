<template>
  <div class="ProfProject">
    <div class="ProjectText Justify">
      <h1>Professional Projects</h1>
      <p>
        Projects that were made for assignments during my UNI years, or to completion at a quality I deem acceptable to be judged. On this page a short description is provided and an Elevator Pitch to sum up expectations of the project. Most of these projects also have their own pages which goes more in-depth about the project, the reasons for it and includes more relevant media.
      </p>
    </div>
    <ProjectDisplay :visibleProjects="ProjectData" />
  </div>
</template>

<script>
import ProjectUtil from '~/assets/js/ProjectUtil'
import ProjectDisplay from '~/components/projects/ProjectDisplay'

export default {
  components: {
    ProjectDisplay
  },
  data () {
    return {
      ProjectData: ProjectUtil.GetProjectData(true)
    }
  }
}
</script>

<style scoped>
.ProfProject {
  margin: auto;
  max-width: var(--MaxWidthForPage);
}
.ProjectText {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
