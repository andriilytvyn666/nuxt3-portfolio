<template>
  <CardWide :logo="props.logo" :title="props.title" :text="props.text">
    <ButtonIcon
      @click="$emit('click:secondary')"
      :link="props.secondaryLink"
      :name="`${props.title}-secondary`"
      :icon="props.secondaryActionIcon"
      type="secondary"
    />
    <ButtonIcon
      @click="$emit('click:primary')"
      :link="props.primaryLink"
      :name="`${props.title}-primary`"
      :icon="props.primaryActionIcon"
      type="primary"
    />
  </CardWide>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  title: string
  text: string
  primaryActionIcon: string
  secondaryActionIcon: string
  primaryLink?: string
  secondaryLink?: string
}>()

defineEmits(['click:secondary', 'click:primary'])
</script>
