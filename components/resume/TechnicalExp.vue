<template>
  <div class="TechExp">
    <h4><u>Technical Experience</u></h4>
    <div v-for="(Type) in techExperience" :key="Type.key">
      <b-container class="TableContents" fluid>
        <b-row class="TechXPRow">
          <div>
            <h5 class="TechTypeName">
              {{ Type.name }}
            </h5>
            <i v-if="Type.desc !== ''" class="TechDescription">{{ Type.desc }}</i>
            <div v-for="(Item) in Type.content" :key="Type.key+Item.name" class="TechUsedName">
              <u>{{ Item.name }}</u><br>
              <div class="TechContent">
                <b-container v-for="(subItemContent, index) in Item.content" :key="Type.key+Item.name+subItemContent">
                  <b-row v-if="(index % 2) == 0">
                    <b-col v-if="(index % 2) == 0">
                      • {{ subItemContent[0] }}
                    </b-col>
                    <b-col v-if="(index + 1) < Item.content.length">
                      • {{ Item.content[index+1][0] }}
                    </b-col>
                  </b-row>
                </b-container>
                <!-- <span v-if="subItemContent == Item.content[Item.content.length-1]"> &</span>
                  <span v-else-if="subItemContent != Item.content[0]">,</span>
                  <span v-if="subItemContent.length == 2"><Link :url="subItemContent[1]" :word="subItemContent[0]" /></span>
                  <span v-else>{{ subItemContent[0] }}</span> -->
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// import Link from '~/components/util/Link'
export default {
  name: 'TechnicalExperience',
  serverCacheKey () {
    return 'ResumeTechnical'
  },
  components: {
    // Link
  },
  props: {
    techExperience:
    {
      type: Array,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.row > div {
  width:100%;
}
.TechContent {
  margin-bottom:0;
}
.TechContent .col {
  margin-top:0.2rem;
  margin-bottom:0.1rem;
}
.TechTypeName {
  margin-top:0.25rem;
  margin-bottom:0;
}
.TechXPRow {
  margin-bottom:0.5em;
}
.TechDescription {
}
.TechUsedName {
  margin-top:0.2rem;
  margin-bottom:0;
}
.left {
  float: left;
}
.right {
  float:right;
}
</style>
