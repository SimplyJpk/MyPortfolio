<template>
  <article class="blogPost">
    <b-container fluid>
      <b-row>
        <b-col class="blogHead">
          <i>
            <PrevNext :prev="prev" :next="next" />
          </i>
          <div>
            <h1><b><u>{{ article.title }}</u></b></h1>
            <p><i>{{ article.description }}</i></p>
            <nuxt-content :document="article" />
            <p v-if="!isBlogDateStale(article.date) || !isBlogDateStale(article.edited)" class="lastEdited">
              Written: {{ getHumanReadable(article.date) }} <span v-if="article.edited !== undefined"> | Last Edited: {{ getHumanReadable(article.edited) }}</span>
            </p>
          </div>
        </b-col>
        <b-col cols="2" class="PreviewImage">
          <b-img :src="getImgPath(article)" :alt="article.alt" fluid />
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script>
import PrevNext from '~/components/blog/PrevNext'
export default {
  components: {
    PrevNext
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    getImgPath (articleData) {
      return '/images/blog/' + (articleData.img !== undefined ? articleData.img : 'no-image-found.png')
    },
    isBlogDateStale (date) {
      date = new Date(date)
      // Crude safety
      if (date === undefined || date == null) {
        return true
      }
      const difference = date.getTime() - new Date().getTime()
      const days = Math.ceil(difference / (1000 * 3600 * 24))
      return (days > 180)
    },
    getHumanReadable (date) {
      const options = { weekday: 'short', day: 'numeric', year: 'numeric', month: 'short' }
      return new Date(date).toLocaleDateString('en-GB', options)
    }
  }
}
</script>

<style scoped>
.blogHead {
  margin: 0;
}
.PreviewImage {
  border-radius: 32px;
  background-color: var(--SideNavigationBackground);
  height: fit-content;
  max-width: 256px;
  margin: 0;
}
</style>

<style>
hr {
  border: 2px solid var(--SideNavigationBackground);
}
code {
  background-color: var(--SideNavigationBackground);
  border: 2px solid var(--NavigationButtonHover);
  padding: 5px;
  color: whitesmoke;
}
</style>
