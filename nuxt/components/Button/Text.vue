<template>
  <a :href="props.link" target="_blank" class="flex w-full h-full no-underline">
    <button :name="props.name" @click="$emit('click')" :class="getClass()">
      <NuxtIcon class="text-xl leading-5" :name="props.icon" filled />
      <span>{{ props.text }}</span>
    </button>
  </a>
</template>

<script setup land="ts">
const props = defineProps({
  link: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
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

// TODO: use conditional rendering instead os switch statement
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
  @apply flex gap-2 pr-5 pl-[1.125rem] max-h-12 min-h-[3rem] items-center;
  @apply w-full  sm:max-2xl:max-w-min 2xl:max-w-min;
  @apply justify-center sm:max-2xl:justify-start 2xl:justify-start;
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
