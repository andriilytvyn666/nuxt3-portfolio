<template>
  <div class="flex flex-col gap-3" v-if="renderCondition">
    <SectionTitle
      icon="feather/check-square"
      :title="$t('landing.shared.sectionNames.courses')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardCourse
        :name="course.name"
        :provider="course.provider"
        :logo="course.logo.asset._ref"
        :completionDate="new Date(course.completionDate)"
        :certificate="course.certificate.asset._ref"
        v-for="course in courses"
        :key="course.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "course"]
{_id, logo, name, provider, completionDate, certificate}`
const { data } = await useSanityQuery<Course[]>(query)

const courses = data.value
const renderCondition: boolean = courses !== null && courses.length > 0
</script>
