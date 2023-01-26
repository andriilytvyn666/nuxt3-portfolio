<template>
  <div class="flex flex-col gap-3" v-if="courses.length > 0">
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
        v-for="course in courses"
        :key="course.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const sanity = useSanity()

type Course = {
  name: string
  provider: string
  completionDate: Date
  logo: Logo
}

type Logo = {
  asset: Asset
}

type Asset = {
  _ref: string
}

const query = groq`*[_type == "course"]`
const { data } = await useAsyncData('course', () =>
  sanity.fetch<Course[]>(query)
)

const courses = data.value!
</script>
