<template>
  <div :class="!$device.isDesktopOrTablet ? 'ResumeMobile' : 'ResumePC'">
    <div>
      <span class="h1"><u>Resume</u></span>
      <span class="DLSpan">
        <a :href="CVDocumentPath + '.pdf'" download>.pdf</a>
        <a :href="CVDocumentPath + '.docx'" download>.doc</a>
      </span>
    </div>
    <About class="ResumeContainerDiv About" />
    <!-- Projects I consider interesting and of higher quality -->
    <PastProjects :projects="ResumeProjects" :useCards="!IsSingleColumnWidth(this.$vssWidth)" class="ResumeContainerDiv" />
    <!-- Additional resume details -->
    <b-container class="ResumeContents" fluid>
      <b-row v-if="$device.isDesktopOrTablet && this.$vssWidth > 600">
        <b-col>
          <TechExperience v-bind:techExperience="TechXP" class="ResumeContainerDiv" />
          <Education v-bind:education="Education" class="ResumeContainerDiv" />
          <OtherExperience class="ResumeContainerDiv" />
        </b-col>
        <b-col>
          <Employment v-bind:workHistory="WorkHistory" class="ResumeContainerDiv" />
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col>
          <TechExperience v-bind:techExperience="TechXP" class="ResumeContainerDiv" />
          <Education v-bind:education="Education" class="ResumeContainerDiv" />
          <Employment v-bind:workHistory="WorkHistory" class="ResumeContainerDiv" />
          <OtherExperience class="ResumeContainerDiv" />
        </b-col>
      </b-row>
    </b-container>
    <br>
    <div class="DownloadDiv">
      <h5><u>Download</u></h5> CV: <a :href="CVDocumentPath + '.pdf'" download>pdf</a> <a :href="CVDocumentPath + '.docx'" download>doc</a>
    </div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

import ProjectUtil from '~/assets/js/ProjectUtil'
// Resume Components
import About from '~/components/resume/About'
import PastProjects from '~/components/resume/Projects'
import Employment from '~/components/resume/Employment'
import Education from '~/components/resume/Education'
import TechExperience from '~/components/resume/TechnicalExp'
import OtherExperience from '~/components/resume/OtherExp'

export default {
  head () {
    return {
      title: process.env.MY_NAME + ' - Resume'
    }
  },
  components: {
    About,
    PastProjects,
    Employment,
    Education,
    TechExperience,
    OtherExperience
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data () {
    return {
      CVDocumentPath: '/Professional/Documents/JamesKellieCurrentCV',
      ResumeProjects: ProjectUtil.GetResumeProjectData(),
      WorkHistory: ProjectUtil.GetWorkHistory(),
      Education: ProjectUtil.GetEducationHistory(),
      TechXP: ProjectUtil.GetTechExp()
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom:1rem;
}
.ResumeContents {
  padding-left:0px;
  padding-right:0px;
}
.ResumeContents .row .col {
  margin:0px;
}
.DownloadDiv {
  text-align: center;
}

.ResumeMobile{
  text-align: left;
}
.ResumePC{
  margin:auto;
  max-width: var(--MaxWidthForPage);
  text-align: left;
}
</style>

<style scoped>
.ResumeContainerDiv {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.DLSpan {
  margin-left:0.5rem;
}
</style>
