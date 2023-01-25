<template>
  <div class="flex flex-col gap-3">
    <SectionTitle
      icon="feather/check-square"
      :title="$t('landing.shared.sectionNames.courses')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardCourse
        name="Programming with JavaScript"
        provider="Coursera/Meta"
        logo="coursera"
        :completionDate="new Date(2022, 11)"
        v-for="i in 4"
        :key="i"
      />
    </div>
  </div>
</template>
