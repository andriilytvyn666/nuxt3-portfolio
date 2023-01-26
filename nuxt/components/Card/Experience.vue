<template>
  <CardWide
    title="Junior UI/UX designer"
    :text="`Google LLC ‧ ${beginMsg} - ${endMsg}`"
    :logo="props.logo"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  logo: string
  company: string
  start: Date
  end: Date
}>()

const { t } = useI18n()

const beginMsg = `${t(
  `landing.shared.months.${props.start.getMonth()}`
)} ${props.start.getFullYear()}`
const endMsg = `${t(
  `landing.shared.months.${props.end.getMonth()}`
)} ${props.end.getFullYear()}`
</script>
