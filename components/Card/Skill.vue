<template>
  <div class="card-skill">
    <div class="flex flex-col gap-2">
      <nuxt-img :src="props.image" class="w-16 h-16" alt="skillNuxt" />
      <div class="flex flex-col gap-1 pb-1 text-center text-light">
        <span class="text-xl font-bold leading-6">Nuxt 3</span>
        <span class="text-base font-medium leading-5">{{
          levelUppercase
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
    validator(value: string) {
      return [
        'novice',
        'beginner',
        'competent',
        'proficient',
        'expert',
      ].includes(value)
    },
  },
})

const levelUppercase = `${props.level[0].toUpperCase()}${props.level.slice(1)}`
</script>

<style lang="postcss">
.card-skill {
  @apply w-[8.125rem] h-[10.938rem] rounded-[0.313rem];
  @apply flex flex-col items-center justify-center;
  @apply border border-dark-click hover:border-light hover:bg-dark-hover;
}
</style>
