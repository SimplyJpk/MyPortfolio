<template>
  <div>
    <template v-if="error.statusCode === 404">
      <h1>
        Page not found
      </h1>
      <p>
        Hopefully because you made a typo and not because of a bad link.
      </p>
    </template>
    <template v-else>
      <h1>
        An error occurred
      </h1>
      <p>
        Sorry about that.
      </p>
    </template>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
