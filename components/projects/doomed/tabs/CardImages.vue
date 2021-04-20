<template>
  <div class="CharacterImage" data-not-lazy>
    <img
      v-bind="mainProps"
      :src="GetPathSource()"
      :style="'transform: rotateY('+cardRotation+'deg)'"
      class="CardImg"
    >
  </div>
</template>

<script>
export default {
  name: 'DoomedGameCard',
  serverCacheKey: props => props.currentCard,
  props: {
    currentCard:
    {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mainProps: {
        'z-index': 1,
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#7c6c5080'
      },
      cardRotation: 0,
      cardRotationDelay: 0,
      currentCardType: 0,
      cardDir: 1,
      animationVar: null
    }
  },
  computed: {
    images () {
      return {
        'Fool': {
          face: {
            path: '/images/Projects/DoomedFromTheBeginning/FinalCards/Fool_Card.jpg'
          },
          stat: {
            path: '/images/Projects/DoomedFromTheBeginning/FinalCards/Fool_Stats.jpg'
          }
        },
        'Tower': {
          face: {
            path: '/images/Projects/DoomedFromTheBeginning/FinalCards/Tower_Card.jpg'
          },
          stat: {
            path: '/images/Projects/DoomedFromTheBeginning/FinalCards/Tower_Stats.jpg'
          }
        },
        'Justice': {
          face: {
            path: '/images/Projects/DoomedFromTheBeginning/FinalCards/Justice_Card.jpg'
          },
          stat: {
            path: '/images/Projects/DoomedFromTheBeginning/FinalCards/Justice_Stats.jpg'
          }
        },
        back: '/images/Projects/DoomedFromTheBeginning/FinalCards/Card_Back.jpg'
      }
    }
  },
  mounted () {
    this.animationVar = window.setInterval(this.RotateCard, 15)
  },
  beforeDestroy () {
    if (this.animationVar !== null) {
      clearInterval(this.animationVar)
    }
  },
  methods: {
    RotateCard () {
      if (this.cardRotationDelay > 0) {
        this.cardRotationDelay--
      } else {
      // We itterate the cards rotation in one direction or the other
        if (this.cardDir > 0) { this.cardRotation++ } else { this.cardRotation-- }
        // Check if we need to change the cards image or Direction
        if (this.cardRotation > 89 || this.cardRotation < 0) {
        // Change card Type
          if (this.cardRotation > 89) { this.currentCardType++ }
          this.cardDir = -this.cardDir
          this.cardRotationDelay += 15
          if (this.currentCardType > 2) { this.currentCardType = 0 }
        }
      }
    },
    GetPathSource () {
      switch (this.currentCardType) {
        case 0: return this.images[this.currentCard].face.path
        case 1: return this.images[this.currentCard].stat.path
        case 2: return this.images.back
      }
    }
  }
}
</script>

<style scoped>
.CharacterImage {
  position: relative;
  width:100%;
  min-height:300px;
  max-width:200px;
  margin:auto;
  max-width:100%;
  min-width: 120px;
}
.CharacterImage > img {
  image-rendering: -webkit-optimize-contrast;
  min-height:240px;
  max-height: 300px;
  box-shadow:
    0 0 3px 3px #F8FF8C66,  /* inner white */
    0 0 6px 6px #F8FF8C66, /* middle magenta */
    0 0 12px 12px #F8FF8C1A; /* outer cyan */
    min-width: 120px;
}
</style>
