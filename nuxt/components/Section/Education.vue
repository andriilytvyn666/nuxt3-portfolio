<template>
  <div class="flex flex-col gap-3" v-if="renderCondition">
    <SectionTitle
      icon="feather/book"
      :title="$t('landing.shared.sectionNames.education')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardEducation
        :logo="school.logo.asset._ref"
        :schoolName="getLocalizedString($i18n.locale, school.schoolName)"
        :major="school.major"
        :degree="$t(`landing.shared.academicDegrees.${school.degree}`)"
        :enrollmentDate="new Date(school.enrollmentDate)"
        :graduationDate="new Date(school.graduationDate)"
        v-for="school in education"
        :key="school._id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "education"]
{ _id, logo, schoolName, major, degree, enrollmentDate, graduationDate }`

const { data } = await useSanityQuery<Education[]>(query)

const education = data.value
const renderCondition: boolean = education !== null && education.length > 0
</script>
