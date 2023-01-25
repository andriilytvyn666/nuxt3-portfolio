<template>
  <div class="flex flex-col gap-3">
    <SectionTitle
      icon="feather/briefcase"
      :title="$t('landing.shared.sectionNames.experience')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardExperience
        company="Google LLC"
        logo="google"
        title="Junior UI/UX designer"
        :start="new Date(2023, 0)"
        :end="new Date(2023, 5)"
        v-for="i in 3"
        :key="i"
      />
    </div>
  </div>
</template>
