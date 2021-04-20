<template>
  <div>
    <MobSizeNav v-if="!$device.isDesktopOrTablet" />
    <MobSizeNav v-else-if="this.$vssWidth <= 600" />
    <FullSizeNav v-else />
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

import FullSizeNav from '~/components/nav/FullSizeNav'
import MobSizeNav from '~/components/nav/MobSizeNav'

export default {
  components: {
    FullSizeNav,
    MobSizeNav
  },
  mixins: [VueScreenSize.VueScreenSizeMixin]
}
</script>

<style>
.NavSVGIcons {
  font-size: 100%;
  vertical-align: middle;
}
.SmlNavSVGIcons {
  font-size: 80%;
  vertical-align: middle;
}
</style>

<style scoped>
div {
  height: 100vh;
}
.DropItem {
  background: var(--SideNavigationBackground);
  width:100%;
}
a {
  color: white !important;
}
</style>
