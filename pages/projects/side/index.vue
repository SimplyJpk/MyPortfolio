<template>
  <div class="SideProject">
    <div class="ProjectText Justify">
      <h1>Side Projects</h1>
      <p>
        Smaller projects that are/were made in my free time, or just not seen through to the end are listed below. Each project shown will have a description which will provide more information regarding the project, some of these projects may also include additional information in the form of a viewable page which will be in the form of a 'read more' tab which will take you to relevant pages/websites.
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
      ProjectData: ProjectUtil.GetProjectData(false)
    }
  }
}
</script>

<style scoped>
.SideProject {
  margin: auto;
  max-width: var(--MaxWidthForPage);
}
.ProjectText {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
