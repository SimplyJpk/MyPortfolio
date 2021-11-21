<template>
  <div>
    <b-container>
      <b-row>
        <b-col v-if="latestBlog.img !== undefined" cols="2">
          <NuxtLink :to="'/blog/' + latestBlog.slug">
            <b-img :src="'/images/blog/' + (latestBlog.img !== undefined ? latestBlog.img : 'no-image-found.png')" :alt="latestBlog.alt" class="BlogPreviewImage" fluid />
          </NuxtLink>
        </b-col>
        <b-col>
          <NuxtLink :to="'/blog/' + latestBlog.slug" class="BlogTitleReadMore">
            <h6><b><u>{{ latestBlog.title }}</u></b></h6>
          </NuxtLink>
          <p>
            <i>
              {{ latestBlog.longDescription }} <NuxtLink :to="'/blog/' + latestBlog.slug" class="ReadMoreLink">Read More</NuxtLink>
            </i>
            <!-- We check to make sure the blog isn't over 180 days old, if it is, we just don't show the date it was written out of fear people think people are made of free time. -->
            <span v-if="!isBlogDateStale(latestBlog.date) || (latestBlog.lastEdit !== undefined && !isBlogDateStale(latestBlog.lastEdit))" class="BlogDate">
              <!-- Include date and lastedited date -->
              <br>
              Written: {{ getHumanReadable(latestBlog.date) }}{{ latestBlog.lastEdit !== undefined ? ' | Last edited: ' + getHumanReadable(latestBlog.lastEdit) : '' }}
            </span>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    latestBlog: {
      type: Object,
      required: true
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
      const options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('en-GB', options)
    }
  }
}
</script>

<style scoped>
.BlogPreviewImage {
  max-height: 128px;
}
.BlogDate {
  font-size: 80%;
  color: #999;
}
.ReadMoreLink{
  font-size: 80%;
}
.BlogTitleReadMore {
  color: white;
}
</style>
