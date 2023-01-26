<template>
  <div class="flex flex-col gap-3" v-if="jobs.length > 0">
    <SectionTitle
      icon="feather/briefcase"
      :title="$t('landing.shared.sectionNames.experience')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardExperience
        :company="job.company"
        :logo="job.logo.asset._ref"
        :title="job.name"
        :start="new Date(job.startDate)"
        :end="new Date(job.endDate)"
        v-for="job in jobs"
        :key="job.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const sanity = useSanity()

type Job = {
  name: string
  company: string
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

const query = groq`*[_type == "experience"]`
const { data } = await useAsyncData('experience', () =>
  sanity.fetch<Job[]>(query)
)

const jobs = data.value!
</script>
