export default {
  server: {
    port: 4000,
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
    '~/plugins/axios-accessor.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
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
    strategies: {
      provider: {
        scheme: 'local',
        endpoints: {
          login: { url: 'providers/login', method: 'post', propertyName: 'data.access_token' },
          user: { url: 'providers/user', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  }
};
