import Vue from 'vue'
// Swiper 6.x
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation } from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/swiper-bundle.css'
// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation } from 'swiper/core'

// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation])
// Vue.use(VueAwesomeSwiper)
