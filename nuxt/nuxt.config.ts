import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'

import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sanity',
  ],
  image: {
    provider: 'sanity',
    sanity: {
      projectId: 'oyqb1zv8',
    },
  },
  sanity: {
    projectId: 'oyqb1zv8',
    dataset: 'production',
    apiVersion: '2023-01-26',
    minimal: true,
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  css: ['~/assets/css/tailwind.css'],
  i18n: {
    baseUrl: 'https://andriilytvyn.pp.ua',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        name: 'English',
        iso: 'en-US',
        code: 'en',
        isCatchallLocale: true,
      },
      {
        name: 'Українська',
        iso: 'uk-UA',
        code: 'uk',
      },
    ],
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'uk'],
      messages: { en, uk },
    },
  },
})
