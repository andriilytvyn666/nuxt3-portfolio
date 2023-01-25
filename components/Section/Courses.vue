<template>
  <div class="flex flex-col gap-3">
    <SectionTitle
      icon="feather/check-square"
      :title="$t('landing.shared.sectionNames.courses')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardWideAction
        title="Programming with JavaScript"
        :text="`Coursera/Meta ‧ ${completionMsg}`"
        actionIcon="feather/file"
        logo="/img/card/coursera.png"
        v-for="i in 4"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const completionDate = new Date(2023, 5)

const completionMsg = `${t(
  `landing.shared.months.${completionDate.getMonth()}`
)} ${completionDate.getFullYear()}`
</script>
