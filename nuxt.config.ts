import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed

const config: NuxtConfig = {
  head: {
    title: "Helium Artworks - La meilleure banque d'images africaines",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [ //inclue les scripts en pied de page de façon normale
      {
        type: 'text/javascript',
        src: '/js/lib/jquery.min.js',
        async: true,
      },
      {
        type: 'text/javascript',
        src: '/js/app.js',
        body: true,
        defer: true,
      },
    ]
  },


  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyCJHdP_gGztB4PRnmf0ZpMP_f51B9413qQ",
      authDomain: "heliumtechnologie.firebaseapp.com",
      projectId: "heliumtechnologie",
      storageBucket: "heliumtechnologie.appspot.com",
      messagingSenderId: "308031069362",
      appId: "1:308031069362:web:78294bd7596bb8048d7dab",
      measurementId: "G-4Z983E5JMG"
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChanged',
        },
        ssr: true,
        emulatorPort: isDev && useEmulators ? 9099 : undefined,
        disableEmulatorWarnings: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
      functions: {
        emulatorPort: isDev && useEmulators ? 12345 : undefined,
      },
      storage: {
        emulatorPort: isDev && useEmulators ? 9199 : undefined,
        emulatorHost: 'localhost',
      },
      database: {
        emulatorPort: isDev && useEmulators ? 9000 : undefined,
      },
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'goToLupasGithub',
            url: 'https://github.com/lupas',
          },
          {
            action: 'goToModuleGithub',
            url: 'https://github.com/nuxt-community/firebase-module',
          },
        ],
        fcmPublicVapidKey:
          'BCeRz8oNd5bL8bI8NwklZsR8Sn7qIiKN5jEg4BQYnanMU0JSg9aPDqEY7_gb2GEjl90v-Q0SVfaJKsURTcOdkaE',
      },
    },
  },

  modules: ['@nuxtjs/pwa'],
  plugins: [
    // '~/plugins/lazyMode', dev update
    { src: '~plugins/vuemasonry.js' },
    { src: '~plugins/vue-lazyload.js' },
    { src: '~plugins/spectrecss.js' },
    { src: '~plugins/vuesax.js' },

  ],

  css: [
    "~assets/css/fonts.css",
    "~assets/css/app.min.css",
    "~assets/css/icons.css",
  ],

  build: {},

  /*
   ** Nuxt.js Middleware
   */
  router: {
    middleware: ['testMiddleware'],
  },

  pwa: {
    manifest: {
      name: "Helium Artworks",
      lang: "fr",
      short_name: "Helium Artworks",
      description: "Tous les médias africaines, comme vous le vloulez pour vos projets créatives !"
    },
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: process.env.NODE_ENV === 'development',
    },
    meta: {
      mobileAppIOS: true,
      name: "Helium Artworks",
      author: "Helium Technologie",
      lang: "fr",
      ogType: "website",
      ogName: "Helium Artworks"
    },
    icon: {
      source: '/logo_500.png',
      filename: "logo_500.png",
      icons: [
        {
          src: `/icon.png`,
          size: "144x144",
          type: "image/png"
        }, {
          src: `/apple-touch-icon.png`,
          size: "128x128",
          type: "image/png"
        }, {
          src: `/apple-touch-icon.png`,
          size: "152x152",
          type: "image/png"
        }, {
          src: `/apple-touch-icon.png`,
          size: "180x180",
          type: "image/png"
        }, {
          src: `/apple-touch-icon.png`,
          size: "192x192",
          type: "image/png"
        }, {
          src: `/apple-touch-icon.png`,
          size: "256x256",
          type: "image/png"
        }
      ]
    }

  },
}
export default config


