<template>
    <div class="flex flex-row gap-4">
        <div class="flex flex-row gap-3 [&:hover>*]:text-light-hovered    ">
            <Icon name="ion:newspaper" class="custom-nav-icon" size="28" />
            <span class="custom-header-button">{{ $t('blog') }}</span>
        </div>
        <a href="mailto:lytvyn.andrii.contact@gmail.com" target=”_blank” rel="noreferrer noopener">
            <Icon name="ion:at-circle" class="custom-nav-icon" size="28" />
        </a>
        <a href="https://github.com/andriilytvyn666" target=”_blank” rel="noreferrer noopener">
            <Icon name="ion:logo-github" class="custom-nav-icon" size="28" />
        </a>
        <a href="https://www.linkedin.com/in/andrii-lytvyn-80350a226/" target=”_blank” rel="noreferrer noopener">
            <Icon name="ion:logo-linkedin" class="custom-nav-icon" size="28" />
        </a>
        <a href="https://www.behance.net/e45b410b" target=”_blank” rel="noreferrer noopener">
            <Icon name="fa-brands:behance-square" class="custom-nav-icon ml-2" size="28" />
        </a>
        <div>
            <form>
                <select v-model="locale" class="bg-dark-hovered text-light p-1">
                    <option value="en" @click="changeLocale">English</option>
                    <option value="uk" @click="changeLocale">Українська</option>
                </select>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale, setLocale, setLocaleCookie } = useI18n()

const changeLocale = () => {
    if (locale.value === 'uk') {
        setLocale('uk')
        setLocaleCookie('uk')
    } else {
        setLocale('en')
        setLocaleCookie('en')
    }

}
</script>