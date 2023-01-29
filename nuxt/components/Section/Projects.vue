<template>
  <div class="flex flex-col gap-3" v-if="renderCondition">
    <SectionTitle
      icon="feather/layers"
      :title="$t('landing.shared.sectionNames.projects')"
    />
    <div class="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      <CardProject
        v-for="project in projects"
        :key="project.name"
        :image="project.image.asset._ref"
        :name="project.name"
        :updateDate="new Date(project.updateDate)"
        :link="project.link"
      />
      <CardProject
        v-for="project in projects"
        :key="project.name"
        :image="project.image.asset._ref"
        :name="project.name"
        :updateDate="new Date(project.updateDate)"
        :link="project.link"
      />
      <CardProject
        v-for="project in projects"
        :key="project.name"
        :image="project.image.asset._ref"
        :name="project.name"
        :updateDate="new Date(project.updateDate)"
        :link="project.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "project"] { _id, name, link, updateDate, image }`
const { data } = await useSanityQuery<Project[]>(query)

const projects = data.value
const renderCondition: boolean = projects !== null && projects.length > 0
</script>
