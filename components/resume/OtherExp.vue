<template>
  <div class="OtherExp">
    <!--
    <h4><u>Other</u></h4>
    <p class="Justify">
      A general understanding of Agile Methodologies such as <Link url="https://en.wikipedia.org/wiki/Scrum_(software_development)" word="SCRUM" /> and the <Link url="https://en.wikiversity.org/wiki/Crystal_Methods" word="Crystal Methods" />, with some limited knowledge of <Link url="https://en.wikipedia.org/wiki/    Extreme_programming" word="Extreme Programming" />.
    </p> -->
    <h5 class="Hobbies">
      <u>Hobbies & Interests</u>
    </h5>
    <p>• Bass Guitar</p>
    <p>• Geocaching</p>
    <p>• Way too much Factorio</p>
    <p>• Strategy & Management games</p>
    <p>• Hiking</p>
    <p>• Learning new things like Nuxt.js</p>
  </div>
</template>

<script>
// import Link from '~/components/util/Link'
export default {
  name: 'OtherExperience',
  serverCacheKey () {
    return 'ResumeOther'
  },
  components: {
    // Link
  }
}
</script>

<style scoped>
.Hobbies {
  margin-top:1rem;
}
p {
  margin-bottom:0.2rem;
}
.OtherExp p {
  padding-left: 1rem;
}
</style>
