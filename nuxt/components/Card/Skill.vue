<template>
  <div class="card-skill">
    <div class="flex flex-col items-center gap-2">
      <nuxt-img :src="props.logo" class="w-16 h-16" alt="skillNuxt" />
      <div class="flex flex-col gap-1 pb-1 text-center text-light">
        <span class="text-xl font-bold leading-6">{{ title }}</span>
        <span class="text-sm font-medium leading-5 text-light-unfocused">{{
          $t(`landing.skills.levels.${props.level}`)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  logo: string
  level: string
}>()
</script>

<style lang="postcss">
.card-skill {
  @apply w-[8.125rem] h-[10.938rem] rounded-[0.313rem];
  @apply flex flex-col items-center justify-center;
  @apply border border-dark-click hover:border-light hover:bg-dark-hover;
}
</style>
