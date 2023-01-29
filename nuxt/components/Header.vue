<template>
  <header
    ref="headerRef"
    class="box-border sticky top-0 z-50 h-16 w-fill bg-dark-header backdrop-blur border-b-dark-border"
  >
    <div
      class="px-1 flex justify-between items-center h-full content-center mx-auto w-[73.75rem]"
    >
      <div
        class="text-light flex items-center gap-2 text-[1.656rem] leading-8 font-bold cursor-pointer"
        @click="scrollToTop"
      >
        <nuxt-icon class="text-[2rem] leading-8" name="feather/user" filled />
        <h1>{{ $t('landing.header.logoTitle') }}</h1>
      </div>
      <nav class="text-light flex gap-4 text-[2rem]">
        <a
          :href="link.link"
          :aria-label="link.label"
          target="_blank"
          v-for="link in links"
          :key="link.label"
        >
          <nuxt-icon class="icon-link" :name="link.icon" filled />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
type link = {
  icon: string
  label: string
  link: string
}
const links: link[] = [
  {
    icon: 'header/at-circle',
    label: 'mail',
    link: 'mailto:lytvyn.andrii.contact@gmail.com',
  },
  {
    icon: 'header/logo-github',
    label: 'github',
    link: 'https://github.com/andriilytvyn666',
  },
  {
    icon: 'header/logo-linkedin',
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/andrii-lytvyn-80350a226/',
  },
  {
    icon: 'header/logo-behance',
    label: 'behance',
    link: 'https://www.behance.net/e45b410b',
  },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const headerRef = ref<HTMLDivElement | null>(null)

const handleScroll = () => {
  if (window.scrollY === 0) {
    headerRef.value?.classList.remove('border-b')
  } else {
    headerRef.value?.classList.add('border-b')
  }
}

if (process.client) {
  onBeforeMount(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
</script>

<style lang="postcss">
.icon-link {
  @apply hover:text-light-unfocused active:text-dark-icon;
}
</style>
