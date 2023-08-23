// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.scss'],
  build: {
    transpile: ['gsap']
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
