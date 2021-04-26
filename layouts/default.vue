<template>
  <div class="FullContainer">
    <NavManager />
    <div :class="'SiteBox' + ($device.isDesktopOrTablet && this.$vssWidth > 600 ? ' PCBox' : '')">
      <!-- Depending on Platform and Screenwidth we adjust some visuals to fit content better -->
      <nuxt :class="$device.isDesktopOrTablet && this.$vssWidth > 600 ? 'PCSiteContainer' : 'MobSiteContainer'" />
      <br>
      <Footer />
    </div>
    <!-- A bad modal for images, TODO maybe replace this with the gallery plugin since it could easily be used for this. -->
    <ImageModal />
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

import ImageModal from '~/components/image/ImgModal.vue'

import Footer from '~/components/global/WebFooter.vue'
import NavManager from '~/components/nav/NavManager.vue'

export default {
  components: {
    Footer,
    NavManager,
    ImageModal
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  head () {
    return {
      title: 'James Kellie\'s Website!'
    }
  }
}
</script>

<style>
.FlexCol {
  flex-direction: column;
}
.FlexRow {
  flex-direction: row;
}
/* TODO Delete this */
.WIP {
  color: red;
}
</style>

<style>
body {
  background: var(--MainBackground);
  font-family: var(--TextFont);
  color: white;
}

html {
  font-family: var(--TextFont);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: GrayScale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

p {
  font-family: 'Karla';
}

h1 {
  font-size: 2rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* TODO May cause problems for some screens? Look into that. */
img {
  image-rendering: -webkit-optimize-contrast;
}
</style>

<style scoped>
.PCSiteContainer{
  padding-top: var(--SiteTopMargin);
  position: relative;
  margin: 0 auto;
  padding-bottom:20px;
  padding-left: 4%;
  padding-right: 4%;
}
.MobSiteContainer {
  position: relative;
  margin: 0 auto;
  padding-top: calc(var(--MobNavHeight) + 1rem);
  padding-bottom:20px;
  padding-left: 4%;
  padding-right: 4%;
  /* width: 95% !important;

  padding-left: 0px;
  padding-right: 0px;
  padding-top: calc(var(--MobNavHeight) + 1rem);
  margin: 0 auto;
  padding-bottom:20px; */
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.page-enter {
  transition-duration: 0ms;
}
.page-leave-to {
  transition-duration: 75ms;
  opacity: 0;
}

.FullContainer {
  display: flex;
  width:100%;
  margin:auto;
}
.SiteBox {
  width:100%;
}
.PCBox {
  max-width: calc(100% - var(--NavBarWidth));
}
</style>
