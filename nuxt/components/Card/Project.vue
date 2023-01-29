<template>
  <div class="card-project">
    <nuxt-img
      :src="props.image"
      :alt="props.name"
      class="max-h-[9.813rem] h-full max-w-[17.375rem] w-full"
    />
    <div class="card-project-bottom">
      <div class="flex flex-col overflow-hidden">
        <span class="text-xl truncate text-light">{{ props.name }}</span>
        <span class="text-base truncate text-light-unfocused">{{
          `${monthName} ${props.updateDate.getFullYear()}`
        }}</span>
      </div>
      <!-- TODO: Add action on click -->
      <ButtonIcon
        :link="props.link"
        :name="`${props.name}-open`"
        class="shrink-0"
        icon="feather/arrow-right"
        type="primary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  name: string
  updateDate: Date
  link: string
}>()

const { t } = useI18n()

const monthName = t(`landing.shared.months[${props.updateDate.getMonth()}]`)
</script>

<style lang="postcss">
.card-project {
  @apply max-h-[14.375rem] h-full;
  @apply rounded-[0.313rem] overflow-hidden;
  @apply border border-dark-border hover:border-light;
  @apply bg-dark hover:bg-dark-hover;
}

.card-project-bottom {
  @apply max-h-[4.438rem] py-[0.594rem] px-[0.875rem];
  @apply flex items-center justify-between gap-2;
}
</style>
