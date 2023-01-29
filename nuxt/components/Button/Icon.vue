<template>
  <!-- TODO: refactor this to avoid copy & paste -->
  <a :href="props.link" target="_blank">
    <button
      :name="props.name"
      :aria-label="props.name"
      @click="$emit('click')"
      :class="getClass()"
    >
      <NuxtIcon class="text-xl leading-5" :name="props.icon" filled />
    </button>
  </a>
  <!-- <div v-else>
    <button
      :name="props.name"
      :aria-label="props.name"
      @click="$emit('click')"
      :class="getClass()"
    >
      <NuxtIcon class="text-xl leading-5" :name="props.icon" filled />
    </button>
  </div> -->
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  icon: string
  type: string
  link?: string
}>()

defineEmits(['click'])

const getClass = () => {
  switch (props.type) {
    case 'primary':
      return {
        'button-icon-primary': true,
        'button-icon-secondary': false,
        'button-icon-close': false,
      }
    case 'close':
      return {
        'button-icon-primary': false,
        'button-icon-secondary': false,
        'button-icon-close': true,
      }
    default:
      return {
        'button-icon-primary': false,
        'button-icon-secondary': true,
        'button-icon-close': false,
      }
  }
}
</script>

<style lang="postcss">
.internal-button-icon {
  @apply flex items-center justify-center w-[2.688rem] h-[2.688rem];
  @apply rounded-[0.313rem] text-base font-medium whitespace-nowrap;
}

.button-icon-primary {
  @apply internal-button-icon internal-button-primary;
}

.button-icon-secondary {
  @apply internal-button-icon internal-button-secondary;
  @apply hover:bg-grad-blue-click hover:outline-light;
  @apply active:bg-grad-blue-hover;
}

.button-icon-close {
  @apply internal-button-icon internal-button-close;
}
</style>
