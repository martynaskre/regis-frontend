export default {
  server: {
    port: process.env.SERVER_PORT,
  },
  router: {
    middleware: 'reset-errors',
  },
  head: {
    title: 'Regis',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  css: [
  ],
  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
      '~assets/scss/app.scss',
    ]
  },
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/notifications', mode: 'client' },
    { src: '~/plugins/convert-form-data', mode: 'client' },
    { src: '~/plugins/unwrap', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
  ],
  modules: [
  ],
  build: {
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  auth: {
    redirect: {
      login: '/auth',
      logout: '/auth',
      home: '/'
    },
    strategies: {
      provider: {
        scheme: 'local',
        token: {
          property: 'data.access_token',
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: 'providers/login', method: 'post' },
          user: { url: 'providers/user', method: 'get' },
          logout: false,
        },
      },
      client: {
        scheme: 'local',
        token: {
          property: 'data.access_token',
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: 'clients/login', method: 'post' },
          user: { url: 'clients/user', method: 'get' },
          logout: false,
        },
      },
    },
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400],
      },
      'Reem Kufi': {
        wght: [400],
      },
      Roboto: {
        wght: [400],
      },
    },
  },
};
