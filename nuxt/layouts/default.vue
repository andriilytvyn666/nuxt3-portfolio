<template>
  <div
    class="h-screen min-[0px]:max-[500px]:flex min-[500px]:max-2xl:hidden 2xl:hidden items-center justify-center p-16 gap-4 flex-col"
    v-motion-fade-visible-once
  >
    <span class="text-light text-xl font-medium">(｡╯︵╰｡)<br /></span>
    <!-- <nuxt-icon class="text-light text-4xl" name="feather/x" filled /> -->
    <span class="text-light text-xl font-medium text-center">
      Mobile version is not ready yet.
    </span>
    <div class="h-min">
      <SanityFile :asset-id="getLocalizedFile($i18n.locale, about)">
        <template #default="{ src }">
          <ButtonText
            :text="$t('landing.aboutMe.downloadCV')"
            :link="src"
            icon="feather/download"
            name="downloadCV"
          />
        </template>
      </SanityFile>
    </div>
  </div>
  <div
    class="flex flex-col items-stretch flex-grow min-h-screen min-[0px]:max-[499px]:hidden"
    v-motion-fade-visible-once
  >
    <Header />
    <article
      class="grid grid-cols-12 gap-5 justify-center grow xl:w-[73.75rem] lg:w-[62rem] md:w-[46rem] sm:w-[38rem] min-[500px]:w-[29.25rem] min-[320px]:w-[20.5rem] mx-auto"
    >
      <div class="flex flex-col col-span-12">
        <slot />
        <div class="h-16"></div>
      </div>
    </article>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const store = useLandingStore()
const about = computed(() => store.about)
store.fetchAbout()

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
})

const { t } = useI18n()

useServerSeoMeta({
  title: t('landing.meta.title'),
  description: t('landing.meta.description'),
  author: t('landing.meta.author'),
  ogTitle: t('landing.meta.title'),
  ogDescription: t('landing.meta.description'),
  twitterTitle: t('landing.meta.author'),
  twitterDescription: t('landing.meta.description'),
  twitterCard: 'summary_large_image',
  ogImage: 'https://andriilytvyn.pp.ua/opengraph_image.webp',
  twitterImage: 'https://andriilytvyn.pp.ua/opengraph_image.webp',
  // TODO: change colorScheme meta after light theme finished
  colorScheme: 'normal',
  robots: 'all noarchive',
  charset: 'utf-8',
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [
    ...(i18nHead.value.link || []),
    { rel: 'icon', type: 'image/png', href: 'favicon.png' },
  ],
  meta: [...(i18nHead.value.meta || [])],
})
</script>
