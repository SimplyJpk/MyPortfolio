<template>
  <div class="CharacterTextContainer">
    <h5><b>{{ characterData.name }}</b></h5>
    <p>
      <b>Card Description</b>: {{ characterData.story.Desc }}
    </p>
    <div class="CharacterDataBox">
      <Symbology :characterName="characterData.name" :symbologyData="characterData.story.Symbology" style="flex: 30%;" />
      <Skills :skillData="characterData.skills" style="flex: 40%;" />
      <CardImage v-if="!IsSingleColumnWidth(this.$vssWidth)" :currentCard="characterData.name" style="flex:30%; min-width:30%;" />
    </div>
    <div class="MobileRotatingCard">
      <CardImage v-if="IsSingleColumnWidth(this.$vssWidth)" :currentCard="characterData.name" />
    </div>
    <p>
      <b>Concept</b>: {{ characterData.story.Concept }}
    </p>
    <p>
      <b>Features</b>:<br> <span v-for="line in characterData.story.Features" :key="line">- {{ line }}<br></span>
    </p>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

import Symbology from '~/components/projects/doomed/tabs/Symbology'
import Skills from '~/components/projects/doomed/tabs/Skills'
import CardImage from '~/components/projects/doomed/tabs/CardImages'

export default {
  /* TODO look into Caching, is this even working? */
  name: 'DoomedCharacterTabs',
  serverCacheKey: props => props.characterData.name,
  components: {
    Symbology,
    Skills,
    CardImage
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  props: {
    characterData:
    {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h5 {
  margin-top:0.5rem;
}
.CharacterDataBox {
  display: flex;
  margin-bottom:1.5rem;
}
.MobileRotatingCard {
  text-align: center;
  margin: 0 auto;
  margin-bottom:1rem;
}
</style>

<style>
.row > div {
  margin: auto;
}
</style>
