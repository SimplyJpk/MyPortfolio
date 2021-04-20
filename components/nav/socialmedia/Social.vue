<template>
  <div class="SocialContainer">
    <div :style="{ 'opacity': NameOpacity}" class="SocialName">
      {{ SocialName }}
    </div>
    <div class="SocialIcons">
      <div v-for="(item) in SocialDetails" :key="item.name">
        <SocialElement
          v-if="item.isShown"
          :social-data="item"
          @mouseover.native="MouseOver(item.name)"
          @mouseleave.native="MouseLeave()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SocialData from '~/assets/data/SocialMedia.js'
import SocialElement from '~/components/nav/socialmedia/SocialElement'

export default {
  components: {
    SocialElement
  },
  data () {
    return {
      SocialDetails: SocialData,
      SocialName: 'Online Presence',
      NameOpacity: 0.6
    }
  },
  methods: {
    MouseOver (arg) {
      this.SocialName = arg
      this.NameOpacity = 0.90
    },
    MouseLeave () {
      this.SocialName = 'Online Presence'
      this.NameOpacity = 0.6
    }
  }
}
</script>

<style>
.SocialName {
  text-shadow: 1px 1px #181818;
  transition: 0.5s;
  position: relative;
  top:-30px;
}
.SocialContainer {
  z-index: 2;
  display: flex;
  justify-content: center;
  width: var(--NavBarWidth);
  position:fixed;
  bottom:30px;
}

.PlusSize .SocialContainer {
  bottom:50px;
}

.SocialIcons {
  display: inherit;
  position:inherit;
}
</style>
