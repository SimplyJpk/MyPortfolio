<template>
  <b-container class="CharacterInfoTable">
    <b-row>
      <b-col v-if="!UseCondensedFormat()" cols="4" />
      <b-col cols="2" class="ExtraPadding">
        <b>Skills</b>
      </b-col>
      <b-col cols="2" />
    </b-row>
    <b-row v-for="(n, index) in skillData.length" :key="n">
      <b-col v-if="!UseCondensedFormat()" cols="4">
        {{ skillData[index][0] }}
      </b-col>
      <b-col cols="2">
        <img :srcset="ImageOrganizer.GetIcon(skillData[index][0]) + '.webp'" :src="ImageOrganizer.GetIcon(skillData[index][0]) + '.png'" :alt="skillData[index][0]" class="SkillIcon">
      </b-col>
      <b-col cols="2">
        {{ skillData[index][1] }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import ImageOrganizer from '~/assets/data/imageData/ImageDataOrganizer'

export default {
  mixins: [VueScreenSize.VueScreenSizeMixin],
  props: {
    skillData:
    {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      ImageOrganizer
    }
  },
  methods: {
    UseCondensedFormat () {
      if (this.$vssWidth <= 800) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
.ExtraPadding {
  padding-bottom:0.25rem;
}
.CharacterInfoTable {
  border-left: solid 2px var(--NavigationBorderColor);
  text-align: left;
}
.SkillIcon {
  height:50px;
  width:50px;
  padding: 2px;
  image-rendering: -webkit-optimize-contrast;
}
</style>
