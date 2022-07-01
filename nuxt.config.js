require('dotenv').config()

export default {
  components: true,
  ssr: false,
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'James Kellie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'full-name', content: 'James Kellie' },
      { hid: 'full-full-name', content: 'James P Kellie' },
      { hid: 'nickname', content: 'SimplyJpk' }
    ],
    noscript: [
      { href: 'https://fonts.googleapis.com/css2?family=Duru+Sans&family=Inconsolata&family=Karla&display=swap', rel: 'stylesheet', type: 'text/css' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Duru+Sans&family=Inconsolata&family=Karla&display=swap' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Duru+Sans&family=Inconsolata&family=Karla&display=swap', as: 'Style', onload: 'this.onload=null;this.rel=\'stylesheet\'' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#181818' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css'
    /* '~assets/css/fonts.css' */
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/Styler',
    '~/plugins/lightGallery.client.js',
    '~/plugins/AwesomeSwiper.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/router-extras',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
    // '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/robots',
    '@nuxt/content',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    ['nuxt-fontawesome',
      {
        component: 'FontAwesome',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faHome', 'faUserTie', 'faCommentAlt', 'faFileAlt', 'faGamepad', 'faWindowClose', 'faMugHot', 'faEnvelope']
          }
        ]
      }],
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      polyfill: true,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '', // '/images/default-image.jpg',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      }
    }],
    '@nuxtjs/sitemap'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: process.isDev
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/Professional/*', '/fonts/*', '/dragdrop/*']
  },
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: false,
    components: [
      'b-nav',
      'b-nav-item',
      'b-nav-item-dropdown',
      'b-dropdown-item',
      'b-img',
      'b-container',
      'b-row',
      'b-col',
      'b-tabs',
      'b-tab',
      'b-card', 'b-card-header', 'b-card-text', 'b-card-title', 'b-card-footer'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /* analyze: true, */
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient, isDev }) {
      if (isClient) {
      }
    },
    babel: {
      compact: true
    }
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        // Doomed from the beginning
        {
          name: 'doomedShort',
          path: '/doomed',
          component: resolve(__dirname, 'pages/projects/professional/doomedbeginning')
        }, {
          name: 'doomedShort2',
          path: '/doomedbeginning',
          component: resolve(__dirname, 'pages/projects/professional/doomedbeginning')
        },
        // Nevergreen
        {
          name: 'nevergreenShort',
          path: '/nevergreen',
          component: resolve(__dirname, 'pages/projects/professional/nevergreen')
        },
        // Overseer
        {
          name: 'questOverseerShort',
          path: '/overseer',
          component: resolve(__dirname, 'pages/projects/professional/questoverseer')
        }, {
          name: 'questOverseer2Short',
          path: '/questoverseer',
          component: resolve(__dirname, 'pages/projects/professional/questoverseer')
        },
        // Resume
        {
          name: 'resumeShort',
          path: '/cv',
          component: resolve(__dirname, 'pages/resume')
        }
      )
    }
  },
  serverMiddleware: [
    // '~/middleware/redirects.js'
  ],
  sitemap: {
    hostname: 'https://simplyjpk.com',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**',
      '/dl/'
    ]
  },
  generate: {
    // TODO, this should be automatic in nuxt.js@2.14 : Look into this when time permits
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('articles').only(['slug', 'date']).sortBy('date', 'desc').fetch()

      return files.map(file => '/blog/' + file.slug)
    }
  }
}
