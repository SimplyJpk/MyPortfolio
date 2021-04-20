<template>
  <SwiperSlide class="CarouselSlide">
    <div class="CarouselInfo">
      <h3>{{ captionHeader }}</h3>
      <p>{{ captionText }}</p>
    </div>
    <div class="CarouselClickable">
      <ImgClick :source="imgUrl" :alt="captionHeader" class="CarouselImage" />
    </div>
  </SwiperSlide>
</template>

<script>
import ImgClick from '~/components/image/ImgClick'
export default {
  components: {
    ImgClick
  },
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    captionHeader:
    {
      type: String,
      required: true
    },
    captionText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.CarouselImage {
  max-height:100%;
}
.CarouselInfo {
  position: absolute;
  bottom:0;
  background-color: rgba(50, 50, 50, 0.75);
  padding-left:1rem;
  padding-right:1rem;
  padding-top:0.5rem;
  z-index: 1;
}
.CarouselSlide {
  height:700px;
}
.CarouselClickable {
  transform: translateY(2.5%);
  height:95%;
}
</style>
