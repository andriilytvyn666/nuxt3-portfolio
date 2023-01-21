<template>
  <div :class="getClass()">
    <NuxtIcon class="text-xl leading-5" :name="props.icon" filled />
    <span>{{ props.text }}</span>
  </div>
</template>

<script setup land="ts">
const props = defineProps({
  text: {
    type: String,
    default: 'Default',
    required: true,
  },
  icon: {
    type: String,
    default: 'feather/file',
    required: true,
  },
  type: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'close'].includes(value)
    },
    default: 'secondary',
    required: true,
  },
})

const getClass = () => {
  switch (props.type) {
    case 'primary':
      return {
        'custom-button-text-primary': true,
        'custom-button-text-secondary': false,
        'custom-button-text-close': false,
      }
    case 'close':
      return {
        'custom-button-text-primary': false,
        'custom-button-text-secondary': false,
        'custom-button-text-close': true,
      }
    default:
      return {
        'custom-button-text-primary': false,
        'custom-button-text-secondary': true,
        'custom-button-text-close': false,
      }
  }
}
</script>

<style lang="postcss">
.internal-button-text {
  @apply flex gap-2 pl-5 pr-[1.125rem] max-w-min py-3 items-center;
  @apply rounded-[0.313rem] text-base font-medium whitespace-nowrap;
}

.custom-button-text-primary {
  @apply internal-button-text internal-button-primary;
}

.custom-button-text-secondary {
  @apply internal-button-text internal-button-secondary;
}

.custom-button-text-close {
  @apply internal-button-text internal-button-close;
}
</style>
