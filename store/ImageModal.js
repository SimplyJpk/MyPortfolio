export const state = () => ({
  imgSource: '',
  modalIsShown: false,
  usePixel: true
})

export const mutations = {
  EnableModal (state, theSource) {
    state.imgSource = theSource
    state.modalIsShown = true
  },
  SetPixels (state, isPixels) {
    state.usePixel = isPixels
  },
  DisableModal (state) {
    state.imgSource = ''
    state.modalIsShown = false
    state.usePixel = true
  }
}
