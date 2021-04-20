<template>
  <div class="About">
    <h5><u>About</u></h5>
    <!-- Quick what I do -->
    <p class="Justify">
      An active and striving game/software developer that enjoys tinkering with the available tools by creating new things by challenging what is already familiar. With frequent and active experience during the last {{ YearsSince2013 }} years using languages such as C#, C++ and some modding languages such as SourcePawn for the SourceEngine and small GameJam sized projects.
    </p>
    <!-- Where I Studied -->
    <p class="Justify">
      I have completed two short courses in 2013 and 2014 and completed the <Link url="https://aie.edu.au/course/game-programming-degree/" word="Bachelor of Games and Virtual Worlds" /> with a GPA of 6.2 at the Academy of Interactive Entertainment in 2019.
    </p>
    <!-- What I know -->
    <p class="Justify">
      With a competent understanding of C# and C++, and experience using markup languages, database entry, style sheets and other common industry tools such as XML, JSON, HTML, PHP, SQL and Version Control. I've also done some relevant programming work for my Team Fortress 2 server making plugins and learning new things like <Link url="https://www.nuxtjs.org" word="NUXT" /> to make a website.
    </p>
  </div>
</template>

<script>
import Link from '~/components/util/Link'
export default {
  name: 'ResumeAboutMe',
  serverCacheKey () {
    return 'ResumeAbout'
  },
  components: {
    Link
  },
  computed: {
    YearsSince2013 () {
      return (new Date().getFullYear() - 2013)
    }
  }
}
</script>
