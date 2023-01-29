<template>
  <div class="flex flex-col items-stretch flex-grow min-h-screen">
    <Header />
    <article
      class="grid grid-cols-12 gap-5 justify-center grow w-[73.75rem] mx-auto"
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
