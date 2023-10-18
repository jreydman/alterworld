// https://nuxt.com/docs/api/configuration/nuxt-config
import {preprocessCSS} from "vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
  },
  tailwindcss: {
    exposeConfig: true,
  },
  css: [
    'normalize.css/normalize.css',
  ]
});
