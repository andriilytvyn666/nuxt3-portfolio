<template>
  <div @click="$emit('click')" :class="getClass()">
    <NuxtIcon class="text-xl leading-5" :name="props.icon" filled />
    <span>{{ props.text }}</span>
  </div>
</template>

<script setup land="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'close'].includes(value)
    },
    default: 'secondary',
  },
})

defineEmits(['click'])

const getClass = () => {
  switch (props.type) {
    case 'primary':
      return {
        'button-text-primary': true,
        'button-text-secondary': false,
        'button-text-close': false,
      }
    case 'close':
      return {
        'button-text-primary': false,
        'button-text-secondary': false,
        'button-text-close': true,
      }
    default:
      return {
        'button-text-primary': false,
        'button-text-secondary': true,
        'button-text-close': false,
      }
  }
}
</script>

<style lang="postcss">
.internal-button-text {
  @apply flex gap-2 pr-5 pl-[1.125rem] max-w-min max-h-12 items-center;
  @apply rounded-[0.313rem] text-base font-medium whitespace-nowrap;
}

.button-text-primary {
  @apply internal-button-text internal-button-primary;
}

.button-text-secondary {
  @apply internal-button-text internal-button-secondary;
}

.button-text-close {
  @apply internal-button-text internal-button-close;
}
</style>
