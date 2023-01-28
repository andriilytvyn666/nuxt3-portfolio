<template>
  <div class="flex flex-col gap-3" v-if="renderCondition">
    <SectionTitle
      icon="feather/briefcase"
      :title="$t('landing.shared.sectionNames.experience')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardExperience
        :logo="experience.logo.asset._ref"
        :title="experience.title"
        :company="experience.company"
        :dateOfEmployment="new Date(experience.dateOfEmployment)"
        :dateOfDismissal="handleDismissalDate(experience)"
        v-for="experience in experiences"
        :key="experience._id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "experience"]
{ _id, logo, title, company, dateOfEmployment, dateOfDismissal}`

const { data } = await useSanityQuery<Experience[]>(query)

const experiences = data.value
const renderCondition: boolean = experiences !== null && experiences.length > 0

// TODO: refactor date handling
const handleDismissalDate = (experience: Experience): Date => {
  if (experience.dateOfDismissal === undefined) return new Date(0)
  return new Date(experience.dateOfDismissal)
}
</script>
