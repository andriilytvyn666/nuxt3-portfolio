<template>
  <div class="dropdown">
    <nuxt-icon :name="props.icon" class="dropdown-icon left-3" filled />
    <select class="dropdown-select" :value="modelValue" @input="handleInput">
      <slot />
    </select>
    <nuxt-icon
      name="custom/dropdown-arrows"
      class="dropdown-icon right-3"
      filled
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  modelValue?: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', payload: string): void
}>()

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style lang="postcss">
.dropdown {
  @apply text-light-unfocused bg-dark text-sm;
  @apply rounded-[0.313rem] overflow-hidden border border-dark-border;
  @apply max-w-[9.188rem];
  @apply flex relative items-center;
}

.dropdown-select {
  @apply appearance-none focus-visible:outline-none;
  @apply px-9 bg-dark h-8;
}

.dropdown-icon {
  @apply absolute pointer-events-none;
}
</style>
