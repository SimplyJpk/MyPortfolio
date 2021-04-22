<template>
  <div class="ContactMe">
    <b-nav class="NavBar" vertical>
      <b-nav-item :href="'mailto: ' + ContactMethod" class="ContactLink">
        <FontAwesome :icon="['fa', 'envelope']" class="NavSVGIcons" />
        {{ ContactMethod }}
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import SocialMediaMethods from '~/assets/data/SocialMedia.js'

export default {
  name: 'SocialMediaWelcome',
  data () {
    return {
      ContactMethod: SocialMediaMethods.EMAIL.url
    }
  }
}

</script>

<style scoped>
.ContactMe {
  position: fixed;
  width: 100%;
  overflow: hidden;
  width: var(--NavBarWidth);
  transition: 0.3s;
  border-bottom:1px solid;
  border-color:var(--NavigationBorderColor);
}
.ContactLink {
}

</style>
