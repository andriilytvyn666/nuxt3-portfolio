<template>
  <SanityFile :asset-id="certificate">
    <template #default="{ src }">
      <CardWideAction
        :actionLink="src"
        :title="props.name"
        :text="`${props.provider} ‧ ${completionDateMsg}`"
        actionIcon="feather/file"
        :logo="logo"
      />
    </template>
  </SanityFile>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  name: string
  provider: string
  completionDate: Date
  certificate: string
}>()

const { t } = useI18n()

const completionDateMsg = `${t(
  `landing.shared.months.${props.completionDate.getMonth()}`
)} ${props.completionDate.getFullYear()}`
</script>
