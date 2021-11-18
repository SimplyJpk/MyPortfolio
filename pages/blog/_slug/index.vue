<template>
  <article class="blogPost">
    <b-container fluid>
      <b-row>
        <b-col cols="10" class="blogHead">
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
          <BlogTOC :article="article" />
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script>
import PrevNext from '~/components/blog/PrevNext'
import BlogTOC from '~/components/blog/BlogTOC'
export default {
  components: {
    PrevNext,
    BlogTOC
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const imgPath = article.img

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      imgPath,
      prev,
      next
    }
  },
  methods: {
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
  height: fit-content;
  padding-bottom: 0.5rem;
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
h2 {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 2px;
}
h3 {
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 2px;
}
</style>
