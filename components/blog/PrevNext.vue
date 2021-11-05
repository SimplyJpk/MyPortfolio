<template>
  <div class="PrevNext flex justify-between">
    <span v-if="prev">
      Previous:
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="font-bold text-primary hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>
    </span>
    <span v-if="next">
      <span v-if="prev"> | </span>
      Next:
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        {{ next.title }} |-&gt;
      </NuxtLink>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped>
</style>
