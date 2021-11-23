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
  plugins: [
    '~/plugins/axios',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
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
};
