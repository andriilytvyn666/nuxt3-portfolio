<template>
  <div class="flex flex-col gap-3" v-if="projects.length > 0">
    <SectionTitle
      icon="feather/layers"
      :title="$t('landing.shared.sectionNames.projects')"
    />
    <div class="grid grid-cols-4 gap-5">
      <CardProject
        v-for="project in projects"
        :image="project.image.asset._ref"
        :key="project.name"
        :title="project.name"
        :date="new Date(project.date)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const sanity = useSanity()

type Project = {
  name: string
  link: string
  date: Date
  image: Logo
}

type Logo = {
  asset: Asset
}

type Asset = {
  _ref: string
}

const query = groq`*[_type == "project"]`
const { data } = await useAsyncData('projects', () =>
  sanity.fetch<Project[]>(query)
)

const projects = data.value!
</script>
