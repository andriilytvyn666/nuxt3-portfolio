<template>
  <div class="card-wide-action">
    <div class="flex gap-[0.875rem] items-center overflow-hidden">
      <nuxt-img
        :src="props.logo"
        :alt="props.title"
        class="w-[3rem] h-[3rem] rounded-[0.313rem]"
      />
      <div
        class="flex flex-col self-stretch justify-between overflow-hidden text-light"
      >
        <span class="text-lg font-medium truncate">{{ props.title }}</span>
        <span class="text-base font-medium truncate text-light-unfocused">{{
          props.text
        }}</span>
      </div>
    </div>
    <div class="flex gap-3 [&>div]:shrink-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string
  title: string
  text: string
}>()
</script>

<style lang="postcss">
.card-wide-action {
  @apply flex items-center justify-between gap-[0.875rem];
  @apply h-[4.75rem] pr-[0.875rem] pl-4;
  @apply border border-dark-border hover:border-light rounded-[0.313rem];
  @apply min-w-[16rem] hover:bg-dark-hover w-full;
}
</style>
