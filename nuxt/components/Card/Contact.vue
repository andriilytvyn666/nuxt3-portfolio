<template>
  <CardWideDoubleAction
    :logo="props.logo"
    primary-action-icon="feather/clipboard"
    secondary-action-icon="feather/message-circle"
    :title="props.name"
    :text="props.contact"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  name: string
  contact: string
}>()
</script>
