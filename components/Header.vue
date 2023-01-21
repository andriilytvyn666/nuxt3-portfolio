<template>
    <header ref="headerRef"
        class="h-16 w-fill bg-dark-header sticky top-0 z-50 backdrop-blur box-content border-b-dark-click">
        <div class="px-1 flex justify-between items-center h-full content-center mx-auto w-[1180px]">
            <div class="text-light flex items-center gap-2 text-[26.5px] leading-8 font-bold">
                <nuxt-icon class="text-[32px] leading-8" name="feather/user" filled />
                <span>Portfolio</span>
            </div>
            <nav class="flex text-light gap-4 text-[32px]">
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