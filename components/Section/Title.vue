<template>
  <div class="flex items-center gap-3 pl-2 text-2xl text-light">
    <nuxt-icon :name="props.icon" class="font-bold" filled />
    <span class="text-2xl font-bold">{{ props.title }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
}>()
</script>
