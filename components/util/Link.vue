<template>
  <a :href="url" target="_blank">{{ word }}</a>
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
