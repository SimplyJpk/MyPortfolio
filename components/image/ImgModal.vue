<template>
  <div v-if="this.$store.state.ImageModal.modalIsShown" @click="DisableModal()" class="ImgModal">
    <FontAwesome :icon="['fa', 'window-close']" class="ModalCloseButton" />
    <div class="ImgContainer">
      <img :src="this.$store.state.ImageModal.imgSource" :class="'ModalImage' + (this.$store.state.ImageModal.usePixel ? ' Pixels' : '')" fluid>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    DisableModal () {
      this.$store.commit('ImageModal/DisableModal')
    }
  }
}
</script>

<style scoped>
@keyframes AppearAnimation {
  from {opacity: 0;}
  to {opacity: 1;}
}

.ImgModal {
  animation: 0.4s AppearAnimation forwards;
  position: fixed;
  width:100%;
  height:100%;
  z-index: 10;
  user-select: none;
}
.ImgContainer {
  position: absolute;
  background-color: var(--ImageModalBackground);
  border: solid var(--ImageModalBorder);
  border-width: 0.25rem;
  border-radius: 2rem;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  width:100%;
  height:100%;
}
.ModalImage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height:100%;
  max-width: 90%;
  max-height: 90%;
  border: 4px solid var(--BorderColour);
}

.Pixels {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
.ModalCloseButton {
  transition-property: color, opacity;
  transition-duration: 0.33s;
  position: absolute;
  z-index: 3;
  font-size:250%;
  right:6.5%;
  top:6%;
  opacity: 0.5;
  color: white;
}
.ModalCloseButton:hover {
  color:#ff6666;
  opacity: 1;
  cursor: pointer;
}
</style>
