<template>
  <div class="flex flex-col gap-3" v-if="education.length > 0">
    <SectionTitle
      icon="feather/book"
      :title="$t('landing.shared.sectionNames.education')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardEducation
        :logo="item.logo.asset._ref"
        :university="item.name"
        :major="item.major"
        :degree="$t(`landing.shared.academicDegrees.${item.degree}`)"
        :start="new Date(item.startDate)"
        :end="new Date(item.endDate)"
        v-for="item in education"
        :key="item.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const sanity = useSanity()

type Education = {
  name: string
  major: string
  degree: string
  startDate: Date
  endDate: Date
  logo: Logo
}

type Logo = {
  asset: Asset
}

type Asset = {
  _ref: string
}

const query = groq`*[_type == "education"]`
const { data } = await useAsyncData('education', () =>
  sanity.fetch<Education[]>(query)
)

const education = data.value!
</script>
