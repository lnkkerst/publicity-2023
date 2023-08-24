// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.scss'],
  app: {
    head: {
      viewport:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
    }
  },
  build: {
    transpile: ['gsap']
  },
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
    httpProxy: 'http://localhost:20171'
  },
  modules: [
    '@unocss/nuxt',
    'nuxt-swiper',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    'nuxt-lodash',
    '@invictus.codes/nuxt-vuetify'
  ]
});
