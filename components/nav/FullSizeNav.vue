<!-- TODO Bit messy how we handle screen size, not important, but we could clean this up a fair bit -->
<template>
  <div :class="'NavConfig' + (IsPlusSize(this.$vssHeight, this.$vssWidth) ? ' PlusSize' : '')">
    <div class="ContainerColour" />
    <ContactBanner v-if="this.$route.path !== '/'" not-lazy-data />
    <!-- <MailMe /> -->
    <div class="ContainerStyle">
      <b-nav :class="'NavBar ' + HowLow()" vertical>
        <b-nav-item @click="NavClick" :class="'NavButton MainButton' + CurrentRoute('/')" to="/">
          <FontAwesome :icon="['fa', 'home']" class="NavSVGIcons" />
          <span class="VerticalFix" />{{ (this.$route.path === '/' ? 'Home' : 'Back') }}
        </b-nav-item>
        <b-nav-item @click="NavClick" :class="'NavButton MainButton' + CurrentRoute('/resume')" to="/resume">
          <FontAwesome :icon="['fa', 'user-tie']" class="NavSVGIcons" />
          <span class="VerticalFix" />Resume
        </b-nav-item>
        <b-nav-item @click="NavClick" :class="'NavButton MainButton' + CurrentRoute('/blog')" to="/blog">
          <FontAwesome :icon="['fa', 'comment-alt']" class="NavSVGIcons" />
          <span class="VerticalFix" />Blog
        </b-nav-item>
        <b-nav-item @click="NavClick" v-if="this.$vssHeight > NavMinSize" :class="'NavButton MainButton' + CurrentRoute('/projects/professional')" to="/projects/professional" no-prefetch>
          <FontAwesome :icon="['fa', 'file-alt']" class="NavSVGIcons" />
          <span class="VerticalFix" />Professional
        </b-nav-item>
        <b-nav-item
          @click="NavClick"
          v-for="(item) in ProfessionalData"
          :key="item.name"
          :to="item.readMore"
          :class="'NavButton SubButton' + CurrentRoute(item.readMore)"
        >
          <span class="VerticalFix" />- {{ item.navTitle != undefined ? item.navTitle : item.name }}
        </b-nav-item>
        <b-nav-item @click="NavClick" v-if="this.$vssHeight > NavMinSize" :class="'NavButton MainButton' + CurrentRoute('/projects/side')" to="/projects/side" no-prefetch>
          <FontAwesome :icon="['fa', 'gamepad']" class="NavSVGIcons" />
          <span class="VerticalFix" />Side
        </b-nav-item>
        <b-nav-item @click="NavClick" v-if="this.$vssHeight > NavMinSize" :class="'NavButton MainButton' + CurrentRoute('/randomprojects')" to="/randomprojects" no-prefetch>
          <FontAwesome :icon="['fa', 'mug-hot']" class="NavSVGIcons" />
          <span class="VerticalFix" />Past
        </b-nav-item>
      </b-nav>
    </div>
    <Social v-if="this.$vssHeight > 750" />
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

import Social from '~/components/nav/socialmedia/Social'
import ProjectUtil from '~/assets/js/ProjectUtil'
// import MailMe from '~/components/info/MailMe'
import ContactBanner from '~/components/info/ContactBanner/'

export default {
  components: {
    Social,
    ContactBanner
    // MailMe
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data () {
    return {
      ProfessionalData: ProjectUtil.GetProfessionalNavItems(true),
      SideData: ProjectUtil.GetSideNavItems(true),
      NavMinSize: 500
    }
  },
  methods: {
    // Probably the worst form of animation, but this was zero effort.
    NavClick (e) {
      if (e.srcElement.className.includes(' ClickAnimation')) {
        return
      }
      e.srcElement.className += ' ClickAnimation'
      setTimeout(function () {
        if (e.srcElement.className.includes(' ClickAnimation')) {
          e.srcElement.className = e.srcElement.className.replace(' ClickAnimation', '')
        }
      }, 200)
    },
    HowLow () {
      if (this.$vssHeight < 540) {
        return 'LowererNav'
      } else if (this.$vssHeight < 770) {
        return 'LowerNav'
      }
      return ''
    },
    CurrentRoute (routeName) {
      if (this.$route.path === routeName) {
        return ' CurrentRoute'
      }
      return ''
    }
  }
}
</script>

<style scoped>
:root {
  --NavMinSize: 400px;
}
/* Buttons */
.NavButton {
  overflow: hidden;
  width: var(--NavBarWidth);
  transition: 0.3s;
  transition-property: height, padding-left, font-size, margin-top;
  border-top:1px solid;
  border-color:var(--NavigationBorderColor);
  animation: 0.5s ease-in 0s 1 styleNavAppear ;
  animation-fill-mode: forwards;
}
.NavButton > a {
  overflow: hidden;
  /* Helps to prevent weird overflow from size changes. */
  width:120%;
  height:100%;
  padding-left:var(--NavLinkLeftPadding);
  padding-top: 0px;
  padding-bottom: 0px;
}
@keyframes styleNavAppear {
    from {
      max-height: 0px;
      opacity: 0;
      /* width: 0%; */
    }
    to {
      max-height: var(--NavBarElementHeight);
      opacity: 1;
      /*width: 100%; */
    }
}
.CurrentRoute {
  background-color: var(--MainBackground);
}

.ClickAnimation {
  animation: onClick 0.15s 1;
}
@keyframes onClick {
    0% {
        transform: scale(1, 1);
        font-size: 100%;
    }
    50% {
        transform: scale(1.2, 1.2);
        font-size: 115%;
    }
    100% {
      transform: scale(1, 1);
        font-size: 100%;
    }
}
.VerticalFix {
  height: 100%;
  vertical-align: middle;
  display: inline-block;
}
.NavButton:hover {
  transition: 0.2s;
  background-color: var(--NavigationButtonHover);
  padding-left: calc(var(--NavLinkLeftPadding) * 2);
}
/* Buttons that don't have children */
.MainButton {
  height:calc(var(--NavBarElementHeight) * 0.9);
}
/* Buttons that may have Sub Items */
.SecondaryButton {
  height:calc(var(--NavBarElementHeight) * 0.75);
}
/* Sub Items */
.SubButton {
  height:calc(var(--NavBarElementHeight) * 0.5);
  opacity: 1 !important;
  min-height: 28px;
  font-size: 80%;
}

.LowerNav {
  margin-top: 30px;
  transition: 0.3s;
}
.LowererNav {
  margin-top: 50px;
  transition: 0.3s;
}
</style>

<style scoped>
a:link {
  color: var(--NavLinkColour);
  text-shadow: 0px 0px 1px var(--NavLinkShadow);
}
a:visited {
  color: var(--NavLinkColour);
  text-shadow: 0px 0px 1px var(--NavLinkShadow);
}
a:hover {
  color: var(--NavLinkHover);
  text-shadow: 0px 0px 1px var(--NavLinkShadow);
}
a:active {
  color: var(--NavLinkClick);
  text-shadow: 0px 0px 1px var(--NavLinkShadow);
}
.NavConfig {
  opacity: 1;
  width: var(--NavBarWidth);
  margin-right: 0px;
  top:0px;
  overflow-x: hidden;
  background: var(--SideNavigationBackground);
  border-right: 1px solid #2f2f2f32;
}
.ContainerColour {
  width:inherit;
  height:100%;
  position:fixed;
  z-index: 0;
  background: var(--SideNavigationBackground);
}
.NavBar {
  overflow-x: hidden;
  width:inherit;
  position: fixed;
  font-family: var(--TitleFont);
  top: 50%;
  transform:translateY(-40%);
}
.NavBar:last-child {
  border-bottom:1px solid;
  border-color:var(--NavigationBorderColor);
}
.ContainerStyle {
  width:inherit;
  position: inherit;
  opacity: 0;
  animation: 1s linear  0.25s 1 NavShow ;
  animation-fill-mode: forwards;
}
@keyframes NavShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.FlexPlease {
  display:flex;
  flex-direction:column;
}
</style>

<style scoped>
/* My poorly made > 1080p display solution */
.PlusSize .NavBar {
  top: 55%;
}
.PlusSize .ContainerStyle {
  font-size:160%;
}
.PlusSize .NavButton {
  padding-left:20px;
}
</style>
