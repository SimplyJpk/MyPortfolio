<template>
  <div>
    <div class="BlogIntroduction">
      <h1>Another Blog</h1>
      <p>Overtime I intend to do small blog updates with things I'm learning, explaining something cool, or just to rant about the decisions i've made. Like many other solo blog spaces, I imagine this will sometimes go months between updates, but sometimes we need those moments to refresh and just enjoy the ride.</p>
      <br>
    </div>
    <b-container fluid>
      <nuxt-link :to="'/blog/' + item.slug" v-for="(item, index) in articleList" :key="index" class="PreviewContainer">
        <b-row>
          <b-col cols="2" class="PreviewImage">
            <b-img
              :src="getImgPath(item)"
              :alt="item.title"
              class="previewImg"
              fluid
            />
          </b-col>
          <b-col class="PreviewExplain">
            <h6><b><u>{{ item.title }}</u></b></h6>
            <p>
              {{ item.longDescription }}
            </p>
          </b-col>
        </b-row>
      </nuxt-link>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articleList = await $content('articles')
      .only(['title', 'alt', 'img', 'slug', 'longDescription', 'date', 'lastEdit'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articleList
    }
  },
  methods: {
    getImgPath (articleData) {
      return '/images/blog/' + (articleData.img !== undefined ? articleData.img : 'no-image-found.png')
    }
  }
}
</script>

<style scoped>
.PreviewContainer .row {
  margin-bottom: 4pt;
}
.PreviewImage {
  border-radius: 32px;
  background-color: var(--SideNavigationBackground);
  height: auto;
  max-width: 200px;
}

.PreviewExplain {
  margin: 0;
  margin-top: 4pt;
  margin-bottom: 4pt;
}

a {
  color: white;
}

a:hover {
  text-decoration: none;
}
</style>
