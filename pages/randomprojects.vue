<template>
  <div class="Project">
    <div class="ProjectText Justify">
      <h1>Random Old Projects</h1>
      <p>
        I've been programming for well over 10 years, picking up some ideas and making them into something as an attempt to either learn from or understand something. This page exists as an attempt to highlight some of the more interesting things I've produced, which might not be the most practical projects or even of good quality as they were made as a means to learn and not really with any end goal. I've included images, and of course, a short description of these projects below.
      </p>
      <div>
        <b-tabs card pills vertical class="ProjectCard">
          <b-tab
            v-for="item in ProjectData"
            :key="item.id"
            :title="item.name"
            class="ProjectCardTab"
          >
            <b-card-header><b>{{ item.name }}:</b> {{ item.cardName }}</b-card-header>
            <b-card-text class="ProjectText">
              <div>
                <span style="float: left">Language: {{ item.language }}</span>
                <span style="float: right">Date: {{ item.date }}</span>
                <br>
                <br>
                <Gallery v-if="item.imgPath != null" :images="item.imgPath" />
                <span v-if="!Array.isArray(item.shortDescription)">
                  {{ item.shortDescription }}
                </span>
                <span v-else>
                  <p v-for="(paragraph, index) in item.shortDescription" :key="item.name + item.shortDescription + index">
                    {{ paragraph }}
                  </p>
                </span>
                <span v-if="item.funFact != null">Fun Fact: {{ item.funFact }}</span>
                <br>
                <br>
              </div>
            </b-card-text>
            <!-- <b-carousel
              :interval="4000"
              controls
              class="ProjectImages"
            >
              <b-carousel-slide
                v-for="path in item.imgPath"
                :key="item.id + path.compressed"
                class="ProjectSlide"
              > -->
            <!-- <ImgClick :source="path.compressed" :largeSource="path.uncompressed" :alt="item.alt" /> -->
            <!-- </b-carousel-slide>
            </b-carousel> -->
            <!-- <b-card-img-lazy :src="item.imgPath" alt="Image" class="ProjectCardImage" fluid-grow />-->
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHistory from '~/assets/data/OldProjects'
import Gallery from '~/components/randomprojects/Gallery'
// import ImgClick from '~/components/image/ImgClick'

export default {
  components: {
    Gallery
    // ImgClick
  },
  data () {
    return {
      ProjectData: ProjectHistory
    }
  }
}
</script>

<style scoped>
.Project {
  margin: auto;
  max-width: calc(var(--MaxWidthForPage) * 1.2);
}
.ProjectText {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.ProjectCard {
  max-height:720px;
  max-width: 1280px;
}
.ProjectCardImage {
  margin: auto;
  max-height:720px;
}
.ProjectCardTab {
  padding-top:0;
  width: 100%;
}
.ProjectText {
  padding-left:20px;
}
.ProjectSlide {
  width:100%;
}
</style>

<style>
.carousel-caption {
  z-index: 0;
  height:100%;
  left:10%;
  right:10%;
  width: calc(100% - 20%);
}
.ProjectCard > .col-auto {
  margin:0 0;
}
</style>
