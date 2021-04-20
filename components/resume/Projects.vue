<template>
  <div class="PastProjects">
    <h4><u>Past Projects</u></h4>
    <b-container v-for="(item) in projects" :key="item.name" class="TableContents" fluid>
      <b-row class="PastProjectRow">
        <b-col class="ProjectNameAndImage">
          <div v-if="useCards" class="ProjectLink">
            <b-card bg-variant="transparent" class="ProjectCard">
              <b-card-header>
                <b-card-title :title="item.title" class="ProjectTitle" title-tag="h6" />
              </b-card-header>
              <!-- Pretty ugly, here we check if the Project was clicked and we expand if true, if not, we check if we're hovering over the item, and if so we Peek the container instead of opening 400px container in their face -->
              <img :alt="item.name" :src="item.imgIconPath + '.jpg'" :class="'CardImg'">
            </b-card>
          </div>
          <div v-else>
            <nuxt-link :to="item.readMore">
              {{ item.title }}
            </nuxt-link>
          </div>
        </b-col>
        <b-col :class="'RoleTransition RoleFull'">
          <div v-if="useCards" class="ProjectLink">
            <b-card :class="'ProjectCardTitle'" bg-variant="transparent">
              <b-card-header>
                <b-card-title :title="item.role" title-tag="h6" />
              </b-card-header>
              <!-- TODO Work out decent way to shrink container when closing, this 'works' but it removes the text as well which isn't ideal. -->
              <div class="ProjectCardDesc">
                <div :class="'ProjectDesc ShowContent'">
                  <b-card-text class="CardText Justify">
                    <b>Project Period</b>: {{ item.productionPeriod }}<br><br>
                    <b>Game Pitch</b>: {{ item.gamePitch }}
                  </b-card-text>
                  <b-card-footer class="CardFooter">
                    <nuxt-link :to="item.readMore">
                      Read More
                    </nuxt-link>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </div>
          <div v-else>
            {{ item.role }}
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ResumeProjects',
  serverCacheKey () {
    return 'ResumeProjects'
  },
  props: {
    projects:
    {
      type: Array,
      required: true
    },
    useCards: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {/*
      SelectedProject: null,
      HoverProject: null,
      HoverTimer: null */
    }
  }/*,
  methods: {
    isSameProject (name, other) {
      if (name === other) {
        return true
      }
      return false
    },
    SetClickProject (project) {
      if (project === '') {
        clearTimeout(this.HoverTimer)
        this.HoverTimer = null
        return
      }
      if (this.SelectedProject !== project) {
        this.SelectedProject = project
      } else if (this.SelectedProject !== null) {
        // If a project has been selected and the hover timer is active
        if (this.HoverTimer !== null && this.SelectedProject === project) {
          return
        }
        this.SelectedProject = null
      }
      if (this.HoverTimer !== null) {
        clearTimeout(this.HoverTimer)
        this.HoverTimer = null
      }
    },
    SetHoverProject (project) {
      if (this.SelectedProject !== project) {
        this.HoverProject = project
        if (this.HoverTimer === null) {
          this.HoverTimer = setTimeout(function (scope) { scope.SetClickProject(project) }, 700, this)
        }
      }
    },
    HoverLeave () {
      if (this.HoverTimer !== null) {
        clearTimeout(this.HoverTimer)
        this.HoverTimer = null
        this.HoverProject = null
      }
    },
    ShouldPeek (project) {
      if (this.HoverProject === project) {
        return true
      }
      return false
    }
  } */
}
</script>

<style>
@keyframes CardFooterFade {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<style scoped>
.ProjectLink {
  height:100%;
}
h4 {
  margin-bottom: 1rem;
}
.TableContents {
  text-align: left;
}
.PastProjectRow {
  padding: 0;
  margin: 0;
  padding-bottom:0.25rem;
  border-top: 1px solid #343434;
}
.PastProjectRow > .col {
  padding: 0;
  margin: 0;
}
.TableContents:last-child {
  border-bottom: 1px solid #343434;
}
.ProjectCard {
  min-height:96px;
  border-right: 0px;
}
.card-body {
  padding:0;
  height:auto;
}
.card-header {
  padding-bottom:0px;
}
.CardImg {
  image-rendering: -webkit-optimize-contrast;
  vertical-align: top;
  max-width: 100%;
  width:100%;
  height: 300px;
  max-height:300px;
  transition: 0.9s;
}
.PeekContent {
  transition: 0.5s;
  height:50px;
}
.ClosedContent {
  height:0px;
  transition: 0.5s;
}
.ProjectCardInfo {
  overflow: hidden;
  position: relative;
}
.RoleTransition {
  margin-top:0px;
  transition: 1s;
}
.RoleFull {
}
.ProjectTitle {
  color: white ;
  text-shadow: 2px 1px black;
}
.ProjectNameAndImage {
  overflow: hidden;
}
/*
.ProjectTitle:hover {
  text-decoration: underline;
  cursor: pointer;
} */
/*
.ProjectCardDesc {
  display: inline-block;
  padding-top:1rem;
  animation: styleScaleIn 1.40s;
  animation-fill-mode: forwards;
  max-height: 100%;
  overflow: hidden;
} */
.CardText {
  padding-left:1rem;
  padding-right:1rem;
}
.CardFooter {
  width:100%;
  position: absolute;
  bottom:0px;
  text-align:right;
  animation: CardFooterFade 1.40s;
  animation-fill-mode: forwards;
}
/* A terrible solution to the difference in size when scaling the height of Project Image and Text */
.DescBoost {
  transition: 0.5s !important;
}
.ProjectDesc {
  overflow: hidden;
  transition: 0.9s;
  display: inline-block;
  padding-top:1rem;
  max-height: 100%;
  overflow: hidden;
}
.ShowContent {
  /* TODO Terrible way to align this, do better. */
  height:293px;
}
.HideContent {
  height:0px;
}
</style>
