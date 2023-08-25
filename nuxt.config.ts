// https://nuxt.com/docs/api/configuration/nuxt-config

import { variants } from '@catppuccin/palette';
import type { ThemeDefinition } from 'vuetify';

const catppucinMochaTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: variants.mocha.base.hex,
    surface: variants.mocha.mantle.hex,
    primary: variants.mocha.lavender.hex,
    secondary: variants.mocha.mauve.hex,
    error: variants.mocha.red.hex,
    info: variants.mocha.blue.hex,
    success: variants.mocha.green.hex,
    warning: variants.mocha.yellow.hex,
    text: variants.mocha.text.hex
  }
};

const catppuccinLatteTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: variants.latte.base.hex,
    surface: variants.latte.mantle.hex,
    primary: variants.latte.lavender.hex,
    secondary: variants.latte.mauve.hex,
    error: variants.latte.red.hex,
    info: variants.latte.blue.hex,
    success: variants.latte.green.hex,
    warning: variants.latte.yellow.hex,
    text: variants.latte.text.hex
  }
};

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
    '@invictus.codes/nuxt-vuetify',
    'nuxt-headlessui'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: catppucinMochaTheme,
          light: catppuccinLatteTheme,
          system: catppucinMochaTheme
        }
      }
    }
  }
});
