<template>
  <PageWrapper>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-6">
          <SectionAboutMe :contacts="store.contactsOpen" />
          <SectionContacts v-show="store.contactsOpen" />
          <SectionSkills :grid="store.grid" v-show="!store.contactsOpen" />
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
