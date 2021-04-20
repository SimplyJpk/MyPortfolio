<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <nuxt-link :to="url">{{ word }}</nuxt-link>
</template>

<script>
export default {
  props: {
    url:
    {
      type: String,
      required: true
    },
    word:
    {
      type: String,
      required: true
    }
  }
}
</script>
