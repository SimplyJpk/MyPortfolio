<template>
  <div class="SimpGallary">
    <client-only>
      <span
        v-for="(thumb, thumbIndex) in images"
        :key="thumbIndex"
        class="ImageSpace"
      >
        <a v-if="readMore && thumb.readMore !== undefined" :href="thumb.readMore" :target="thumb.newTab !== undefined ? '_blank' : '_self'" class="MoreInfo">
          <img src="/images/Social/info.svg">
        </a>
        <div @click="SetModalImg(thumb.large)" class="GalleryTitle">
          <span>{{ thumb.title }}</span><br>
        </div>
        <div @click="SetModalImg(thumb.large)" class="GalleryTitle Environment">
          <span>{{ thumb.env }}</span>
        </div>
        <!-- This has to be the single worst thing I've added to this website, maybe one day fix it. -->
        <div :class="'SkelGallerySmallImageLoader'" />
        <b-img
          @click="SetModalImg(thumb.large)"
          :src="thumb.url"
          :alt="thumb.title"
          :class="'SkelGallerySmallImage'"
          fluid
        />
      </span>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    images:
    {
      type: Array,
      required: true
    },
    readMore: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      isLoaded: {
      }
    }
  },
  methods: {
    SetModalImg (source) {
      this.$store.commit('ImageModal/EnableModal', source)
      this.$store.commit('ImageModal/SetPixels', false)
    },
    ImgLoaded (image) {
      this.isLoaded[image] = true
    }
  }
}
</script>

<style scoped>
.MoreInfo {
  position: absolute;
  z-index: 8;
  width: 32px;
  height: 32px;
  top:8px;
  right: 8px;
  opacity: 0.5;
  transition: 1s;
}
.MoreInfo > img {
  width: 100%;
  height: 100%;
}
.MoreInfo:hover {
  opacity: 1;
  text-shadow: 2px 2px;
}

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
  z-index: 4;
  cursor: pointer;
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
  flex-direction: row;
  justify-content: center;
}
.ImageSpace {
  position: relative;
  background-color: var(--SideNavigationBackground);
  border-radius: 25px;
  max-width: var(--GallerySizeWidth);
  width:var(--GallerySizeWidth);
  height:var(--GallerySizeWidth);
  overflow: hidden;
  display:flex;
  flex: 30%;
  margin:auto;
  margin: 1rem;
}

@media (max-width: 1100px) {
  .ImageSpace {
  flex: 50%;
  max-width: var(--GallerySizeWidth);
  }
}
.SkelGallerySmallImage {
  height: inherit;
  width: inherit;
}
.SkelGallerySmallImage:hover {
  cursor: pointer;
}
</style>

<style>
/* If I was a smarter man I'd have made something that'll work with everything, but this does look better that nothing on home page. */
.SkelGallerySmallImageLoader {
  z-index: 0;
  content: '';
  display: block;
  position: absolute;
  left: var(--GallerySizeWidth);
  top: 0;
  height: 100%;
  width: var(--GallerySizeWidth);
  background: linear-gradient(to right, transparent 0%, var(--NavigationButtonHover) 25%, transparent 75%);
  animation: lazy_skeleton_load 1.0s cubic-bezier(0.4, 0.0, 0.1, 1) infinite;
}
.SkelGallerySmallImage.lazyLoad.isLoaded::before {
  opacity: 0;
  background: none;
  left: 0px;
  width: 0%;
  height: 0%;
}
.SkelGallerySmallImage.lazyLoad.isLoaded {
  z-index: 1;
  animation: lazy_skeleton;
  animation-duration: 2s;
  margin: auto;
}

@keyframes lazy_skeleton_load {
    from {
        left: -256px;
    }
    to   {
        left: 100%;
    }
}
@keyframes lazy_skeleton {
  0% {
    opacity: 0;
    width: 0%;
    height: 0%;
  }
  25% {
    width: 100%;
    height: 100%;
  }
  100% {
    opacity: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
