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
    <p>• Playing Bass Guitar</p>
    <p>• Geocaching and Exploring the Outdoors</p>
    <p>• Strategy and Management Games</p>
    <p>• Hiking and Adventure</p>
    <p>• Participating in Park Runs (5km)</p>
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
