<template>
  <div class="button-group [&>div]:rounded-l-[0.313rem;">
    <button
      class="border-r button-group-shared bg-dark hover:text-light"
      @click="store.displayCards"
      name="buttonGrid"
      aria-label="buttonGrid"
      v-show="store.grid"
    >
      <NuxtIcon :name="props.iconLeft" class="text-xl leading-5" filled />
    </button>
    <button
      class="border-r button-group-shared bg-dark-hover text-light"
      v-show="!store.grid"
      name="buttonCards"
      aria-label="buttonCards"
    >
      <NuxtIcon :name="props.iconLeft" class="text-xl leading-5" filled />
    </button>
    <button
      class="cursor-pointer button-group-shared bg-dark-hover text-light"
      v-show="store.grid"
      name="buttonGrid"
      aria-label="buttonGrid"
    >
      <NuxtIcon :name="props.iconRight" class="text-xl leading-5" filled />
    </button>
    <button
      class="cursor-pointer button-group-shared hover:text-light"
      @click="store.displayGrid"
      v-show="!store.grid"
      name="buttonCards"
      aria-label="buttonCards"
    >
      <NuxtIcon :name="props.iconRight" class="text-xl leading-5" filled />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const props = defineProps<{
  iconLeft: string
  iconRight: string
}>()

const store = useLandingStore()
</script>

<style lang="postcss">
.button-group {
  @apply flex flex-grow justify-center items-center;
  @apply rounded-[0.313rem] max-w-min;
  @apply text-light-unfocused;
  @apply outline outline-1 outline-dark-click;
}

.button-group-shared {
  @apply flex items-center justify-center;
  @apply w-12 h-12;
  @apply box-border border-dark-click;
}
</style>
