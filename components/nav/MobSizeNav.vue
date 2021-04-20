<template>
  <transition name="appear" appear>
    <div class="NavStyle">
      <b-nav class="NavMenu">
        <b-nav-item class="NavMargin MobMainNavItem" to="/">
          <FontAwesome :icon="['fa', 'home']" class="SmlNavSVGIcons" />
          Home
        </b-nav-item>
        <b-nav-item class="NavMargin MobMainNavItem" to="/resume">
          <FontAwesome :icon="['fa', 'user-tie']" class="SmlNavSVGIcons" />
          Resume
        </b-nav-item>
        <!--
        <b-nav-item class="NavMargin MobMainNavItem" to="/blog" no-prefetch>
          <FontAwesome :icon="['fa', 'comment-alt']" class="SmlNavSVGIcons" />
          Blog
        </b-nav-item> -->
        <!-- <b-nav-item class="NavMargin MobMainNavItem" to="/projects" no-prefetch>
          <font-awesome-icon :icon="['fa', 'file-alt']" class="SmlNavSVGIcons" />
          Projects
        </b-nav-item> -->
      </b-nav>
      <b-nav class="NavMenu">
        <div class="NavMargin DropStyle">
          <b-nav-item-dropdown
            id="ProfessionalDrop"
            class="DropMenuNav"
            text="Professional"
            lazy
          >
            <span v-for="(item) in ProfessionalData" :key="item.name">
              <b-dropdown-item class="DropItem">
                <nuxt-link
                  :to="item.readMore"
                  class="NavButton NavSubLink"
                >
                  {{ item.navTitle != undefined ? item.navTitle : item.name }}
                </nuxt-link>
              </b-dropdown-item>
            </span>
          </b-nav-item-dropdown>
        </div>
        <div class="NavMargin DropStyle">
          <b-nav-item-dropdown
            id="SideDrop"
            class="DropMenuNav"
            text="Hobby"
            lazy
            no-prefetch
          >
          <!-- TODO make side pages? Not really important..
            <span v-for="(item) in SideData" :key="item.name">
              <b-dropdown-item class="DropItem">
                <nuxt-link
                  :to="item.readMore"
                  class="NavButton NavSubLink"
                  no-prefetch
                >
                  {{ item.navTitle != undefined ? item.navTitle : item.name }}
                </nuxt-link>
              </b-dropdown-item>
            </span> -->
          </b-nav-item-dropdown>
        </div>
      </b-nav>
    </div>
  </transition>
</template>

<script>
import ProjectUtil from '~/assets/js/ProjectUtil'

export default {
  components: {
  },
  data () {
    return {
      ProfessionalData: ProjectUtil.GetProfessionalNavItems(),
      SideData: ProjectUtil.GetSideNavItems()
    }
  }
}
</script>

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

.NavStyle {
  z-index: 4;
  width: 100%;
  height: var(--MobNavHeight);
  position: fixed;
  top:0px;
  left: 0px;
  background: #1e1e1e;
  text-align: center;
}
.NavMenu {
  flex-direction: row;
  width:100%;
}
.NavMargin {
  margin: auto;
}
.DropStyle {
  background: #343434;
  width:50%;
  border-left: 2px solid #292929;
  border-right: 2px solid #292929;
}
.DropStyle > a {
  height:30px;
}
.NavButton {
  width: 100%;
  color: white;
}
.MobMainNavItem {
  flex:26%;
  overflow: hidden;
}
.MobMainNavItem > .nav-link{
  font-size:100%;
  height:40px;
}

</style>

<style scoped>
.appear-enter,
.appear-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
.appear-enter-active,
.appear-leave-active {
  transition: all var(--NavTransitionAppear) ease;
}
</style>
