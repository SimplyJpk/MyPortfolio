import Vue from 'vue'

Vue.mixin({
  methods: {
    IsSingleColumnWidth (width) {
      if (width <= 800) {
        return true
      }
      return false
    },
    IsPlusSize (height, width) {
      if (width > 1920 && height > 1000) {
        return true
      }
      return false
    }
  }
})
