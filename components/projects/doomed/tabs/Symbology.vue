<template>
  <b-container class="SymbologyContainer">
    <b-row>
      <b-col cols="12" class="ExtraPadding">
        <b>Symbology</b>
      </b-col>
    </b-row>
    <b-row v-for="(n, index) in symbologyData.length" :key="symbologyData + n" class="SymbolText">
      <b-col cols="12">
        - {{ symbologyData[index] }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CardSymbology',
  serverCacheKey (props) {
    return props.characterName
  },
  props: {
    symbologyData:
    {
      type: Array,
      required: true
    },
    characterName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.SymbologyContainer {
}
.ExtraPadding {
  padding-bottom:1rem;
}
.SymbolText {
  margin-bottom:1.75rem;
}
</style>
