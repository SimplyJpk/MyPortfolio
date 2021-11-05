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
          <div class="FixedPreview">
            <b-img :src="getImgPath(article)" :alt="article.alt" fluid />
            <b><u>{{ article.title }}</u></b>
            <br>
            <span v-for="link of article.toc" :key="link.id">
              <NuxtLink :class="'TOC ' + getNavClassFromDepth(link.depth)" :to="`#${link.id}`">
                {{ link.text }}
              </NuxtLink>
              <br>
            </span>
          </div>
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
      return 'https://www.jameskellie.dev/images/blog/' + (articleData.img !== undefined ? articleData.img : 'no-image-found.png')
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
    },
    getNavClassFromDepth (depth) {
      switch (depth) {
        case 1:
          return 'dp1'
        case 2:
          return 'dp2'
        case 3:
          return 'dp3'
        case 4:
          return 'dp4'
      }
      return ''
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

/* Move div in from offscreen over 2 seconds */
.FixedPreview {
  animation: fadeIn 1s;
  animation-fill-mode: forwards;
}
/* fadeIn Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.FixedPreview {
  position: fixed;
  border-radius: 32px;
  background-color: var(--SideNavigationBackground);
  height: fit-content;
  padding-bottom: 0.5rem;
  max-width: 256px;
  padding: 15px;
}
.dp2 {
  margin-left: 0rem;
}
.dp3 {
  margin-left: 0.75rem;
}
.dp4 {
  margin-left: 1.5rem;
}
.TOC {
  font-size:70%;
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
