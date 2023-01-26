<template>
  <Dropdown
    v-model="$i18n.locale"
    @update:model-value="updateLocaleCookie"
    icon="feather/globe"
  >
    <option v-if="$i18n.locale === 'en'" value="en">English</option>
    <option value="uk">Українська</option>
    <option v-if="$i18n.locale === 'uk'" value="en">English</option>
  </Dropdown>
</template>

<script setup lang="ts">
const { locale, setLocale, setLocaleCookie } = useI18n()

const updateLocaleCookie = () => {
  setLocaleCookie(locale.value)
  setLocale(locale.value)
}
</script>
