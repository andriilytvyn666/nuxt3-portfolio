<template>
  <header
    ref="headerRef"
    class="box-border sticky top-0 z-50 h-16 w-fill bg-dark-header backdrop-blur border-b-dark-click"
  >
    <div
      class="px-1 flex justify-between items-center h-full content-center mx-auto w-[73.75rem]"
    >
      <div
        class="text-light flex items-center gap-2 text-[1.656rem] leading-8 font-bold"
      >
        <nuxt-icon class="text-[2rem] leading-8" name="feather/user" filled />
        <span>{{ $t('landing.header.logoTitle') }}</span>
      </div>
      <nav class="flex text-light gap-4 text-[2rem]">
        <nuxt-icon name="header/at-circle" filled />
        <nuxt-icon name="header/logo-github" filled />
        <nuxt-icon name="header/logo-linkedin" filled />
        <nuxt-icon name="header/logo-behance" filled />
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
