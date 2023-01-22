<template>
  <CardWide :logo="props.logo" :title="props.title" :text="props.text">
    <ButtonIcon :icon="props.secondaryActionIcon" type="secondary" />
    <ButtonIcon :icon="props.primaryActionIcon" type="primary" />
  </CardWide>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  title: string
  text: string
  primaryActionIcon: string
  secondaryActionIcon: string
}>()
</script>
