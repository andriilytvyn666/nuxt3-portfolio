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
  ],
  vite: {
    plugins: [eslintPlugin()],
  },
  css: ['~/assets/css/tailwind.css'],
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      useCookie: false,
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
