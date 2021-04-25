<template>
  <div :class="'SocialWelcomeContainer ' + (IsSingleColumnWidth(this.$vssWidth) ? 'FlexCol' : 'FlexRow')">
    <b-container class="WelcomePfp">
      <b-row>
        <b-col>
          <img timeout="60000" class="Portrait" alt="James Kellie" srcset="/images/Profile/Profile2021.webp" src="/images/Profile/Profile2021.jpg">
        </b-col>
      </b-row>
    </b-container>
    <div :class="'SocialWelcome FlexCol ' + (!IsSingleColumnWidth(this.$vssWidth) ? 'PadLeft' : 'AlignMiddle')">
      <div class="SocialWelcomeText">
        <h1>Hello, I'm James Kellie.</h1>
        <span class="ShortDesc">
          <i>An Australian game programmer.</i>
        </span>
      </div>
      <b-container :style="{'max-width': GetSocialDivSize(75) }" :class="'SocialElementContainer' + (!$device.isDesktopOrTablet || this.$vssWidth <= 600 ? ' SocialSmall' : ' SocialLarge')">
        <b-row>
          <b-col v-for="(item) in GetOnlyVisibleElements()" :key="item.name + item.background">
            <span v-if="item.isWelcome" :style="GetHoverStyle(item)" :class="'WelcomeSocialLineBG' + (item.name == CurrentHover ? ' IsLineHover' : '')">
              <a :href="(item.name==='Email' ? 'mailto: ' : '') + item.url" @mouseover="SetCurrentHover(item.name)" @mouseleave="ClearHover()" target="_blank" class="WelcomeSocialLink">
                <img :title="item.name" :src="item.img" class="WelcomeSocialIcon">
                <!--<span class="LinkName">{{ item.name }}</span>-->
              </a>
            </span>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
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
      CurrentHover: '',
      VisibleSocialElements: null
    }
  },
  methods: {
    SetCurrentHover (target) {
      this.CurrentHover = target
    },
    ClearHover () {
      this.CurrentHover = ''
    },
    GetOnlyVisibleElements () {
      if (this.VisibleSocialElements !== null) {
        return this.VisibleSocialElements
      }
      this.VisibleSocialElements = []
      this.VisibleSocialElements.push(SocialMedia.EMAIL)
      this.VisibleSocialElements.push(SocialMedia.LINKEDIN)
      this.VisibleSocialElements.push(SocialMedia.GITHUB)
      this.VisibleSocialElements.push(SocialMedia.DISCORD)
      return this.VisibleSocialElements
    },
    GetSocialDivSize (size) {
      if (this.VisibleSocialElements === null) {
        this.GetOnlyVisibleElements()
      }
      return (this.VisibleSocialElements.length * size) + 'px'
    },
    GetHoverStyle (item) {
      return {
        'background-color': (item.name === this.CurrentHover ? item.background : 'transparent'),
        'filter': 'drop-shadow(0 0 var(--DropShadowSocial) ' + (item.name === this.CurrentHover ? item.hoverColor : 'transparent') + ')'
      }
    }
  }
}
</script>

<style>
:root {
  --ContentPadding: 8px;
  --SharedBorderRadius: 25px;
  --PortHeight: 120px;
  --SocialIconSize: 40px;
  --SocialLinkSize: 50px;
  --DropShadowSocial: 0.3rem;
}
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
.SocialElementContainer {
  padding: 0px;
  margin: 0px;
}
.SocialElementContainer.SocialSmall {
  margin: auto !important;
  max-width: 100% !important;
}
.SocialElementContainer.SocialSmall .col .WelcomeSocialLineBG {
  margin: auto;
}
.SocialElementContainer .col {
  padding-left: 16px;
}
/* TODO This is pretty ugly, look into a better way of fading in loading objects that won't break other transitions. */
.lazyLoad.isLoading {
  opacity: 0;
}
.lazyLoad.isLoaded {
  transition: 2s;
  opacity: 1;
}
.SocialWelcomeContainer {
  border-radius: 25px;
  background-color: var(--SideNavigationBackground);
  display: flex;
  align-items: left;
  width: 100%;
  padding: 10px 10px 10px 20px;
}
.SocialWelcomeContainer > .PadLeft {
  padding-left: 1rem;
}
.SocialWelcomeContainer > .AlignMiddle {
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
h1 {
  padding-top: var(--ContentPadding);
  margin: 0;
}
.SocialWelcomeText {
  margin-bottom:0.2rem;
}
.SocialWelcomeText .PadLeft {
}
.ShortDesc {
  font-size:120%;
}
.WelcomeSocialLineBG {
  transition: 0.75s;
  border-radius: var(--SharedBorderRadius);
  border: 1px solid var(--MainBackground);
  width: var(--SocialLinkSize);
  height: var(--SocialLinkSize);
  display: flex;
  justify-content: center;
  align-items: center;
}
.WelcomeSocialIcon {
  position: relative;
  height:var(--SocialIconSize);
  width:var(--SocialIconSize);
  transition-duration: 0.75s;
}
.WelcomeSocialLink {
  overflow: hidden;
  position: relative;
  max-height:var(--SocialIconSize);
  width:var(--SocialIconSize);
}
.IsLineHover {
  border: 1px solid var(--NavigationButtonHover);
}
.WelcomeSocialLineBG:hover .WelcomeSocialIcon {
  filter:
  drop-shadow(-0.5px -0.5px 0 rgba(0,0,0, 0.5))
  drop-shadow(0.5px -0.5px 0 rgba(0,0,0, 0.5))
  drop-shadow(-0.5px 0.5px 0 rgba(0,0,0, 0.5))
  drop-shadow(0.5px 0.5px 0 rgba(0,0,0, 0.5));
}
.LinkName {
  transition-duration: 0.75s;
}
.WelcomeSocialLineBG:hover .LinkName {
  text-shadow:
  -1px -1px 0 rgba(0,0,0, 0.75),
  1px -1px 0 rgba(0,0,0, 0.75),
  -1px 1px 0 rgba(0,0,0, 0.75),
  1px 1px 0 rgba(0,0,0, 0.75);
}
</style>

<style scoped> /* Portrait */
.WelcomePfp {
  margin: auto;
  z-index: 2;
  text-align: center;
  width: calc(var(--PortHeight) + 40px);
}
.Portrait {
  margin: auto;
  width: var(--PortHeight);
  height: var(--PortHeight);
  border-radius: var(--PortHeight);
  border: 2px var(--NavigationBorderColor) solid;
}
</style>

<style scoped> /* Link */
a {
  color: White;
  font-size: 120%;
  font-weight: bold;
}
a:hover {
  text-decoration-line: none;
  height:100%;
}
.ContactLink {
  font-size: 80%;
  color:var(--NavLinkColour);
}
</style>
