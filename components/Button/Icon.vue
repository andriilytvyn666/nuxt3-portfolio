<template>
  <div :class="getClass()">
    <NuxtIcon class="text-xl leading-5" :name="props.icon" filled />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: 'file',
    required: true,
  },
  type: {
    type: String,
    validator(value: string) {
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
        'custom-button-icon-primary': true,
        'custom-button-icon-secondary': false,
        'custom-button-icon-close': false,
      }
    case 'close':
      return {
        'custom-button-icon-primary': false,
        'custom-button-icon-secondary': false,
        'custom-button-icon-close': true,
      }
    default:
      return {
        'custom-button-icon-primary': false,
        'custom-button-icon-secondary': true,
        'custom-button-icon-close': false,
      }
  }
}
</script>

<style lang="postcss">
.internal-button-icon {
  @apply flex items-center justify-center w-[2.688rem] h-[2.688rem];
  @apply rounded-[0.313rem] text-base font-medium whitespace-nowrap;
}

.custom-button-icon-primary {
  @apply internal-button-icon internal-button-primary;
}

.custom-button-icon-secondary {
  @apply internal-button-icon internal-button-secondary;
  @apply hover:bg-grad-blue-click active:bg-grad-blue-hover hover:outline-light;
}

.custom-button-icon-close {
  @apply internal-button-icon internal-button-close;
}
</style>
