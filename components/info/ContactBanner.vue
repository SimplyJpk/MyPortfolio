<template>
  <transition
    appear
    name="ContactAppear"
  >
    <!-- Terrible way to increase the size of this div, but eh -->
    <div :class="'BannerContainer FlexCol' + (IsPlusSize(this.$vssHeight, this.$vssWidth) ? ' PlusSize' : '')">
      <b-container class="WelcomePfp">
        <b-row>
          <b-col>
            <nuxt-link to="/">
              <img timeout="60000" class="Portrait" alt="James Kellie" srcset="/images/Profile/Profile2021Close.webp" src="/images/Profile/Profile2021Close.jpg">
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
      <div :class="'SocialWelcome FlexCol AlignMiddle'">
        <span class="SocialWelcomeText">
          <h1>James Kellie</h1>
          <i>Game Programmer</i>
          <div class="ContactLink">
            <a :href="'mailto: ' + EmailUrl">
              {{ EmailUrl }}
            </a>
          </div>
        </span>
        <span v-for="(item) in SocialDetails" :key="item.name + item.background">
          <!-- We only want to show Social Elements for Welcome (Nothing like Youtube, Steam) -->
          <div v-if="item.isWelcome && item.isBannerIgnored == null" :style="{ 'background-color': (item.name == CurrentHover ? item.background : 'transparent') }" class="WelcomeSocialLineBG">
            <a :href="item.url" @mouseover="SetCurrentHover(item.name)" @mouseleave="ClearHover()" target="_blank" class="WelcomeSocialLink">
              <img :title="item.name" :src="item.img" class="WelcomeSocialIcon">
              <span class="LinkName">{{ item.name }}</span>
            </a>
          </div>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import SocialMedia from '~/assets/data/SocialMedia.js'

export default {
  name: 'SocialMediaWelcome',
  serverCacheKey () {
    return 'SocialWelcome'
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data () {
    return {
      SocialDetails: SocialMedia,
      EmailUrl: SocialMedia.EMAIL.url,
      CurrentHover: ''
    }
  },
  methods: {
    SetCurrentHover (target) {
      this.CurrentHover = target
    },
    ClearHover () {
      this.CurrentHover = ''
    }
  }
}
</script>

<style>
@keyframes styleFadeIn {
    from {
      opacity: 0;
      /* width: 0%; */
    }
    to {
      opacity: 1;
      /*width: 100%; */
    }
}
</style>

<style scoped>
/* TODO This is pretty ugly, look into a better way of fading in loading objects that won't break other transitions. */
.lazyLoad.isLoading {
  opacity: 0;
}
.lazyLoad.isLoaded {
  transition: 2s;
  opacity: 1;
}
.BannerContainer {
  top:1rem;
  position: fixed;
  align-items: center;
  width: var(--NavBarWidth);
  max-width: 100%;
  max-height:200px;
  overflow: hidden;
}
.BannerContainer > .AlignMiddle {
  text-align: center;
}
.SocialWelcome {
  z-index: 0;
  display: flex;
  justify-content:center;
  width:100%;
}
</style>

<style scoped> /* WelcomeText */
.SocialWelcomeText {
  font-size:100%;
  line-height: 0.9;
  margin-bottom:2px;
}
.SocialWelcomeText > i {
  font-size: 80%;
}
.SocialWelcomeText > h1 {
  font-size: 100%;
  margin:0;
}
.WelcomeSocialLineBG {
  transition: 0.75s;
  padding: 0px 0px 0px 0px;
  margin-left:50%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  border-radius: 15px;
  border-color: var(--MainBackground);
  width: 80%;
  height:20px;
  max-height:20px;
  overflow:hidden;
  font-size: 70%;
}
.WelcomeSocialIcon {
  height:18px;
  transition-duration: 0.75s;
}
.LinkName {
  transition-duration: 0.75s;
}
</style>

<style scoped> /* Portrait */
.WelcomePfp {
  margin: auto;
  z-index: 2;
  text-align: center;
}
.Portrait {
  margin: auto;
  width: 70px;
  border-radius: 25px;
  border: 1px var(--NavigationBorderColor) solid;
}
.ContactEmailSVG {
}
</style>

<style scoped> /* Link */
a {
  color: White;
  font-size: 120%;
  font-weight:bold;
}
a:hover {
  text-decoration-line: none;
  height:100%;
}
.ContactLink {
  margin-top:4px;
  margin-bottom:4px;
  font-size: 70%;
  position: relative;
}
.ContactLink > a {
  color:var(--NavLinkColour);
}
</style>

<style scoped>
.ContactAppear-leave-to {
  opacity: 0;
}
.ContactAppear-enter {
  opacity: 0;
  /* width: 0px;
  margin-right: var(--NavBarWidth); */
}
.ContactAppear-enter-to, .ContactAppear-leave {
  opacity: 1;
}
.ContactAppear-enter-active,
.ContactAppear-leave-active {
  transition: all 0.15s ease;
}
</style>

<style scoped>
.PlusSize .Portrait {
  width:100px;
}
.PlusSize {
  max-height:400px !important;
  font-size: 140%;
}
.PlusSize .WelcomeSocialLineBG {
  height:30px;
  max-height: 30px;
}
</style>
