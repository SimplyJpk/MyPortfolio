import ProjectData from '~/assets/data/ProjectSummaries.js'
import WorkHistory from '~/assets/data/WorkHistory.js'
import EducationHistory from '~/assets/data/Education.js'
import TechXP from '~/assets/data/TechExp.js'

const ProjectUtil = {
  GetProfessionalNavItems (OnlyShown = false) {
    const ProjectLinks = []
    for (let index = 0; index < ProjectData.length; index++) {
      if (ProjectData[index].isNav === true && ProjectData[index].isProfessional === true) {
        if (!OnlyShown || ProjectData[index].isShown) {
          ProjectLinks.push(ProjectData[index])
        }
      }
    }
    return ProjectLinks
  },
  GetSideNavItems (OnlyShown = false) {
    const ProjectLinks = []
    for (let index = 0; index < ProjectData.length; index++) {
      if (ProjectData[index].isNav === true && ProjectData[index].isProfessional === false) {
        if (!OnlyShown || ProjectData[index].isShown) {
          ProjectLinks.push(ProjectData[index])
        }
      }
    }
    return ProjectLinks
  },
  GetAllProjectData () {
    const ProjectLinks = []
    for (let index = 0; index < ProjectData.length; index++) {
      if (ProjectData[index].isShown === true) {
        ProjectLinks.push(ProjectData[index])
      }
    }
    return ProjectLinks
  },
  GetProjectData (isProfessional) {
    const ProjectLinks = []
    for (let index = 0; index < ProjectData.length; index++) {
      if (ProjectData[index].isShown === true && ProjectData[index].isProfessional === isProfessional) {
        ProjectLinks.push(ProjectData[index])
      }
    }
    return ProjectLinks
  },
  GetResumeProjectData () {
    const ProjectLinks = []
    for (let index = 0; index < ProjectData.length; index++) {
      if (ProjectData[index].isShown === true && ProjectData[index].isProfessional === true) {
        ProjectLinks.push(ProjectData[index])
      }
    }
    return ProjectLinks
  },
  // Work History
  GetWorkHistory () {
    const History = []
    for (let index = 0; index < WorkHistory.length; index++) {
      History.push(WorkHistory[index])
    }
    return History
  },
  GetEducationHistory () {
    const Education = []
    for (let index = 0; index < EducationHistory.length; index++) {
      Education.push(EducationHistory[index])
    }
    return Education
  },
  GetTechExp () {
    const Experience = []
    for (let index = 0; index < TechXP.length; index++) {
      Experience.push(TechXP[index])
    }
    return Experience
  }
}

export default ProjectUtil
