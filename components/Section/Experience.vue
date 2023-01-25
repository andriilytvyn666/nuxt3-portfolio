<template>
  <div class="flex flex-col gap-3">
    <SectionTitle
      icon="feather/briefcase"
      :title="$t('landing.shared.sectionNames.experience')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardWide
        title="Junior UI/UX designer"
        :text="`Google LLC ‧ ${beginMsg} - ${endMsg}`"
        logo="/img/card/google.png"
        v-for="i in 3"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const beginDate = new Date(2022, 12)
const endDate = new Date(2023, 5)

const beginMsg = `${t(
  `landing.shared.months.${beginDate.getMonth()}`
)} ${beginDate.getFullYear()}`
const endMsg = `${t(
  `landing.shared.months.${endDate.getMonth()}`
)} ${endDate.getFullYear()}`
</script>
