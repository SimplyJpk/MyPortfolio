<template>
  <div @click="SetModalImg(largeSource !== undefined ? largeSource : source)" class="ClickableDiv">
    <template v-if="lazy">
      <b-img
        :src="source"
        :alt="alt"
        :class="'ModalClickableImage' + (outline ? ' ModalClickableImageOutline' : '')"
        fluid
      />
    </template>
    <template v-else>
      <b-img
        :src="source"
        :alt="alt"
        :class="'ModalClickableImage' + (outline ? ' ModalClickableImageOutline' : '')"
        fluid
        data-not-lazy
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    source:
    {
      type: String,
      required: true
    },
    largeSource: {
      type: String,
      required: false,
      default: undefined
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    outline: {
      type: Boolean,
      required: false,
      default: true
    },
    lazy: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    SetModalImg (theSource) {
      this.$store.commit('ImageModal/EnableModal', theSource)
    }
  }
}
</script>

<style scoped>
.ClickableDiv {
  position: relative;
  height:100%;
  width:100%;
}
.ModalClickableImage {
  display: block;
  transition: 0.2s;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
}
.ModalClickableImageOutline:hover {
  cursor: pointer;
  box-shadow:
    0 0 1px 1px #46464680,
    0 0 2px 2px #5d5d5d80;
}
</style>
