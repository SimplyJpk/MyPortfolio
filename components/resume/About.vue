<template>
  <div class="About">
    <h5><u>About</u></h5>
    <!-- Quick what I do -->
    <p class="Justify">
      As a seasoned game/software programmer experimenting and learning for well over {{ YearsSince2013 }}, I bring a unique combination of technical expertise and creative flair to every project. Proficient in C#, C++, Python, and JavaScript, I am passionate about delivering innovative solutions and pushing the boundaries of what is possible. I have {{ MonthsOfCommercialExperience }} of professional experience and a <Link url="https://aie.edu.au/course/game-programming-degree/" word="Bachelor of Games and Virtual Worlds" /> from the Academy of Interactive Entertainment, which I earned in 2019 with a 6.2 GPA.
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
      return (new Date().getFullYear() - 2013) + ' years'
    },
    MonthsOfCommercialExperience () {
      // Get total number of months since Jan 2022 which will continue to increase over time
      const months = (new Date().getFullYear() - 2022) * 12 + new Date().getMonth()
      if (months < 24) {
        return months + (months > 1 ? ' months' : ' month')
      }
      const years = (new Date().getFullYear() - 2022)
      return years + (years > 1 ? ' years' : ' year')
    }
  }
}
</script>
