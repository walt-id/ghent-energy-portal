export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NEOM student enrollment',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/app.css",
    "@/assets/css/core.css",
    "@/assets/css/animate.min.css",
    "@/assets/css/animations.css",
    "@/assets/css/bootstrap-icons.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module'
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/issuer-api/': 'https://wallet.walt-test.cloud',
    '/onboarding-api/': 'https://wallet.walt-test.cloud',
    '/api/': 'https://wallet.walt-test.cloud',
    '/neom/': 'http://localhost:5555'
    //'/ghent/': 'https://neom.walt-test.cloud'
    //'/issuer-api/': 'http://localhost:8080/',
    //'/onboarding-api/': 'http://localhost:8080/',
    //'/api/': 'http://localhost:8080/'
  },

  i18n: {
    /* module options */
    langDir: '~/locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', flag: 'flag-en.svg' },
      { code: 'de', iso: 'de-DE', file: 'de.js', flag: 'flag-de.svg' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js', flag: 'flag-fr.svg' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  router: {
  },

  publicRuntimeConfig: {
    copyright: process.env.COPYRIGHT || 'powered by walt.id',
    salt: process.env.SALT
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  ssr: false,
  server: {
    port: 8000
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: false,
        endpoints: {
          login: { url: '/student/portal/authorize/token', method: 'post' },
          user: { url: '/student/portal/citizen', method: 'get' },
          logout: false
        }
      }
    }
  }
}
