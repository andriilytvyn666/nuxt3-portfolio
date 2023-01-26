<template>
  <CardWide
    :title="props.university"
    :text="detailsMsg"
    :logo="logo"
    v-for="i in 1"
    :key="i"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  university: string
  degree: string
  start: Date
  end: Date
  major: string
  logo: string
}>()

const detailsMsg = `${
  props.degree
} ‧ CS(AI) ‧ ${props.start.getFullYear()} - ${props.end.getFullYear()}`
</script>
