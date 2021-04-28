<template>
  <SwiperSlide :style="'height:' + height + 'px'" class="CarouselSlide">
    <div class="SlideTitle">
      <h5>{{ title }}</h5>
      <p v-if="desc !== ''">
        {{ desc }}
      </p>
    </div>
    <div class="ImgDiv">
      <ModalImage
        v-if="!video"
        :outline="false"
        :source="imageSource"
        :largeSource="largeSource"
        :alt="alt"
        :lazy="lazy"
        class="ArtSlide"
      />
      <video v-else autoplay loop controls data-not-lazy>
        <source :src="imageSource">
      </video>
    </div>
  </SwiperSlide>
</template>

<script>
import ModalImage from '~/components/image/ImgClick'

export default {
  components: {
    ModalImage
  },
  props: {
    imageSource:
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
    title: {
      type: String,
      required: false,
      default: ''
    },
    desc: {
      type: String,
      required: false,
      default: ''
    },
    height: {
      type: Number,
      required: false,
      default: 420
    },
    video: {
      type: Boolean,
      required: false,
      default: false
    },
    lazy: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style scoped>
.SlideTitle {
  z-index: 1;
  background-color: var(--CarouselSlideTitleColour);
  width: 100%;
  max-width:100%;
  text-align: left;
  padding-left:2rem;
  position: absolute;
  top:10%;
  opacity: 0.8;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  overflow: hidden;
}
.SlideTitle h5 {
  margin-top: 2px;
  margin-bottom: 2px;
  text-shadow: 1px 1px black;
}
.CarouselSlide:hover > .SlideTitle {
  opacity: 0.15;
  transition: 0.5s;
}
p {
  margin: 0;
}

.CarouselSlide {
  cursor: pointer;
  background-color: var(--CarouselImageBackground);
  border: 1px solid black;
  border-radius: var(--CarouselSlideBorderRadius);
  overflow: hidden;
}
.CarouselSlide:hover:active {
  cursor:grabbing;
}
.ImgDiv {
  width: 100%;
  height:100%;
  border-radius: var(--CarouselSlideBorderRadius);
  position: relative;
  max-height: 100%;
  max-width: 100%;
}
.ArtSlide {
  z-index: 0;
  width: auto;
  max-width: 100%;
  margin:auto;
}
video {
  height:100%;
  width: 100%;
}
</style>
