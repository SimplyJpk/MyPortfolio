<template>
  <div class="gallery-container">
    <h2 v-if="title !== ''">
      {{ title }}
    </h2>
    <b-container :style="containerStyle" class="gallery-container__gallery">
      <slot />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'GalleryContainer',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    }
  },
  computed: {
    containerStyle () {
      return {
        width: this.width
      }
    }
  }
}
</script>

<style scoped>
.gallery-container {
  display: block;
}
.gallery-container__gallery {
}
</style>
