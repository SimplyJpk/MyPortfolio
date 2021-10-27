<template>
  <transition name="FooterAppear" appear>
    <!-- PC Footer -->
    <footer v-if="$device.isDesktopOrTablet && this.$vssWidth > 600" class="FooterBox PCFooter">
      <FooterContent />
    </footer>
    <!-- Mobile Footer -->
    <footer v-else class="FooterBox MobFooter">
      <FooterContent />
    </footer>
  </transition>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import FooterContent from '~/components/global/FooterContent'

export default {
  name: 'Footer',
  serverCacheKey () {
    return 'Footer'
  },
  components: {
    FooterContent
  },
  mixins: [VueScreenSize.VueScreenSizeMixin]
}
</script>

<style scoped>
.TitleFont {}
.FooterBox {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
footer {
  font-size: var(--FooterFontSize);
  text-align: center;
  position: fixed;
  background-color: #1E1E1E;
  height: var(--FooterHeight);
  top: calc(100% - var(--FooterHeight));
  color:white;
}

.PCFooter {
  width:calc(100% - var(--NavBarWidth));
}
.MobFooter {
  width:100%;
  font-size: calc(5px + (12 - 5) * ((100vw - 120px) / (400 - 120)));
}
.FooterText {
  max-height: var(--FooterHeight);
  overflow: hidden;
  width:50%;
}
.FooterAppear-enter-to, .NavAppear-leave {
  opacity: 1;
}
.FooterAppear-enter, .appear-leave-to {
  /* transform: translateY(var(--FooterHeight)); */
  opacity: 0;
}
.FooterAppear-enter-active,
.FooterAppear-leave-active {
  transition: all var(--NavTransitionAppear) ease;
}
</style>
