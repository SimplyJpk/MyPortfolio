<template>
  <div class="SimpGallary">
    <client-only>
      <!-- <LightGallery -->
      <!--   :images="images" -->
      <!--   :index="SimpGallaryindex" -->
      <!--   :disable-scroll="true" -->
      <!--   @close="SimpGallaryindex = null" -->
      <!-- /> -->
      <span
        v-for="(thumb, thumbIndex) in images"
        :key="thumbIndex"
        @click="SetModalImg(thumb.large)"
        class="ImageSpace"
      >
        <div class="GalleryTitle">
          <span>{{ thumb.title }}</span><br>
        </div>
        <div class="GalleryTitle Environment">
          <span>{{ thumb.env }}</span>
        </div>
        <ImgClick :alt="thumb.title" :source="thumb.url" :largeSource="thumb.large" class="GallerySmallImage" />
      </span>
    </client-only>
  </div>
</template>

<script>
import ImgClick from '~/components/image/ImgClick'
export default {
  components: {
    ImgClick
  },
  props: {
    images:
    {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    SetModalImg (source) {
      this.$store.commit('ImageModal/EnableModal', source)
      this.$store.commit('ImageModal/SetPixels', false)
    }
  }
}
</script>

<style scoped>
.ClickOut {
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: inherit;
}
.GalleryTitle {
  transform: translateY(210px);
  position: absolute;
  max-width:100%;
  text-align: left;
  overflow: hidden;
  padding-left: 1rem;
  padding-right:6px;
  border-radius: 0px 10px 10px 0px;
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0,0,0, 0.2);
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  font-size:80%;
  transition: 0.5s;
  z-index: 1;
}
.ImageSpace:hover .GalleryTitle {
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 0.4;
}
.GalleryTitle.Environment {
  transform: translateY(230px);
  font-size:70%;
}
.SimpGallary {
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
}
.ImageSpace {
  background-color: var(--SideNavigationBackground);
  border-radius: 25px;
  max-width: 256px;
  width:256px;
  height:256px;
  overflow: hidden;
  display:flex;
  flex: 30%;
  margin:auto;
  margin-bottom: 1rem;
}

@media (max-width: 1100px) {
  .ImageSpace {
  flex: 50%;
  max-width: 256px;
  }
}
.GallerySmallImage {
  height: inherit;
  width: inherit;
}
.GallerySmallImage:hover {
  cursor: pointer;
}
</style>

<style>
.GallerySmallImage .lazyLoad {
  opacity: 0;
}
.GallerySmallImage .lazyLoad.isLoaded {
  transition: 1s;
  opacity: 1;
}
</style>
