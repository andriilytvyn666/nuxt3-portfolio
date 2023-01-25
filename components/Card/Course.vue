<template>
  <CardWideAction
    title="Programming with JavaScript"
    :text="`${props.provider} ‧ ${completionDateMsg}`"
    actionIcon="feather/file"
    :logo="`/img/card/${logo}.png`"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  provider: string
  name: string
  logo: string
  completionDate: Date
}>()

const { t } = useI18n()

const completionDateMsg = `${t(
  `landing.shared.months.${props.completionDate.getMonth()}`
)} ${props.completionDate.getFullYear()}`
</script>
