<template>
  <CardWideAction
    :title="props.name"
    :text="`${props.provider} ‧ ${completionDateMsg}`"
    actionIcon="feather/file"
    :logo="logo"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  name: string
  provider: string
  completionDate: Date
}>()

const { t } = useI18n()

const completionDateMsg = `${t(
  `landing.shared.months.${props.completionDate.getMonth()}`
)} ${props.completionDate.getFullYear()}`
</script>
