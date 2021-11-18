<template>
  <div class="FixedPreview">
    <b-img :src="'/images/blog/' + (article.img !== undefined ? article.img : 'no-image-found.png')" :alt="article.alt" fluid />
    <b><u>{{ article.title }}</u></b>
    <br>
    <span v-for="link of article.toc" :key="link.id">
      <NuxtLink :class="'TOC ' + getNavClassFromDepth(link.depth)" :to="`#${link.id}`">
        {{ link.text }}
      </NuxtLink>
      <br>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
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
