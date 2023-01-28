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
      >
        <nuxt-icon class="text-[2rem] leading-8" name="feather/user" filled />
        <h1>{{ $t('landing.header.logoTitle') }}</h1>
      </div>
      <nav class="text-light flex gap-4 text-[2rem]">
        <button name="mail" aria-label="mail">
          <nuxt-icon class="icon-link" name="header/at-circle" filled />
        </button>
        <button name="github" aria-label="github">
          <nuxt-icon class="icon-link" name="header/logo-github" filled />
        </button>
        <button name="linkedin" aria-label="linkedin">
          <nuxt-icon class="icon-link" name="header/logo-linkedin" filled />
        </button>
        <button name="behance" aria-label="behance">
          <nuxt-icon class="icon-link" name="header/logo-behance" filled />
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
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
