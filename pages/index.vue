<template>
  <PageWrapper>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-6">
          <SectionAboutMe :contacts="store.contactsOpen" />
          <SectionContacts v-if="store.contactsOpen" />
          <SectionSkills :grid="store.grid" v-else />
        </div>
        <SectionProjects />
        <SectionExperience />
        <SectionCourses />
        <SectionEducation />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const store = useLandingStore()
</script>
