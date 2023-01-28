<template>
  <CardWide
    :title="props.schoolName"
    :text="detailsMsg"
    :logo="logo"
    v-for="i in 1"
    :key="i"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  schoolName: string
  major: string
  degree: string
  enrollmentDate: Date
  graduationDate: Date
}>()

const detailsMsg = `${props.degree} ‧ ${
  props.major
} ‧ ${props.enrollmentDate.getFullYear()} - ${props.graduationDate.getFullYear()}`
</script>
