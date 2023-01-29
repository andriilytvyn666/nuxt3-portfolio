<template>
  <CardWide :logo="props.logo" :title="props.title" :text="props.text">
    <ButtonIcon
      :link="props.actionLink"
      :name="title"
      :icon="props.actionIcon"
      type="primary"
    />
  </CardWide>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  title: string
  text: string
  actionIcon: string
  actionLink: string
}>()
</script>
