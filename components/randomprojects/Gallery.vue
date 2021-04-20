<!-- Bad rushed component to just display some details, this could have been made into a more reuable container but heck -->
<template>
  <div>
    <client-only>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </client-only>
    <ul>
      <li
        v-for="(thumb, thumbIndex) in images"
        :key="thumbIndex"
        @click="index = thumbIndex"
        class="ImageSpace"
      >
        <img :title="thumb.title" :alt="thumb.title" :src="thumb.url" class="GallerySmallImage">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    images:
    {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      index: null
    }
  }
}
</script>

<style scoped>
.ImageSpace {
  max-height: 200px;
  max-width: 200px;
  height:200px;
  overflow: hidden;
  display:inline-block;
  margin-right:5px;
  position: relative;
}
.GallerySmallImage {
  height: 100%;
  width: 100%;
}
.GallerySmallImage:hover {
  cursor: pointer;
}
</style>
