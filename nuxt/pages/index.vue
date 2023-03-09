<template>
  <div class="flex flex-col gap-8" v-motion-fade-visible-once>
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-8">
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
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const store = useLandingStore()
</script>
