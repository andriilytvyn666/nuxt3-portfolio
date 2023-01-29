<template>
  <CardWideDoubleAction
    :secondary-link="props.link"
    :logo="props.logo"
    primary-action-icon="feather/clipboard"
    secondary-action-icon="feather/message-circle"
    :title="props.name"
    :text="props.contact"
    @click:primary="copyToClipboard(props.contact)"
  />
</template>

<script setup lang="ts">
// TODO: review and refactor when possible interactivity code to use emits
const props = defineProps<{
  logo: string
  name: string
  contact: string
  link?: string
}>()
</script>
