<template>
  <CardWide
    :title="props.title"
    :text="`${props.company} ‧ ${beginMsg} - ${endMsg()}`"
    :logo="props.logo"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  title: string
  company: string
  dateOfEmployment: Date
  dateOfDismissal: Date
}>()

const { t } = useI18n()

const beginMsg = `${t(
  `landing.shared.months.${props.dateOfEmployment.getMonth()}`
)} ${props.dateOfEmployment.getFullYear()}`

// TODO: refactor message generation
const endMsg = () => {
  if (props.dateOfDismissal.getTime() === 0) {
    return t('landing.workExperience.present')
  }

  return `${t(
    `landing.shared.months.${props.dateOfDismissal.getMonth()}`
  )} ${props.dateOfDismissal.getFullYear()}`
}
</script>
