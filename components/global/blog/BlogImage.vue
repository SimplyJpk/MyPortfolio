<template>
  <b-col @click="SetModalImg(image)" :cols="cols" class="blog-image">
    <b-img :src="image" :alt="alt" :style="containerStyle" class="gallery-img" />
    <span v-if="alt != undefined && alt != ''" class="tooltiptext">{{ alt }}</span>
  </b-col>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    cols: {
      type: Number,
      required: false,
      default: 4
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    maxHeight: {
      type: Number,
      required: false,
      default: 400
    }
  },
  computed: {
    containerStyle () {
      return {
        maxHeight: this.maxHeight + 'px'
      }
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
.blog-image img {
  display:block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  margin: auto;
}
.blog-image img:hover {
  box-shadow:
    0 0 1px 1px #46464680,
    0 0 2px 2px #5d5d5d80;
}
.blog-image:hover {
  cursor: pointer;
}

.isLoading {
  opacity: 0;
}
.isLoaded {
  transition: 1s;
  opacity: 1;
}

.gallery-img:hover + .tooltiptext {
  visibility: visible;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.blog-image .tooltiptext {
  visibility: hidden;
  width: 100%;
  background-color: #00000080;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
}

.blog-image .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #00000080 transparent;
}
</style>
