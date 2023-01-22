<template>
  <div class="button-group [&>div]:rounded-l-[0.313rem;">
    <div
      ref="buttonLeftRef"
      class="border-r button-group-left bg-dark-hover"
      @click="onClickLeft"
    >
      <NuxtIcon :name="props.iconLeft" class="text-xl leading-5" filled />
    </div>
    <div
      ref="buttonRightRef"
      class="cursor-pointer button-group-right"
      @click="onClickRight"
    >
      <NuxtIcon :name="props.iconRight" class="text-xl leading-5" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconLeft: string
  iconRight: string
}>()

const buttonLeftRef = ref()
const buttonRightRef = ref()
const buttonBgClass = 'bg-dark-hover'

const onClickLeft = () => {
  buttonRightRef.value.classList.remove(buttonBgClass)
  buttonLeftRef.value.classList.add(buttonBgClass)
  buttonLeftRef.value.classList.remove('cursor-pointer')
  buttonRightRef.value.classList.add('cursor-pointer')
  buttonRightRef.value.classList.remove('text-light')
  buttonLeftRef.value.classList.add('text-light')
}
const onClickRight = () => {
  buttonLeftRef.value.classList.remove(buttonBgClass)
  buttonRightRef.value.classList.add(buttonBgClass)
  buttonRightRef.value.classList.remove('cursor-pointer')
  buttonLeftRef.value.classList.add('cursor-pointer')
  buttonLeftRef.value.classList.remove('text-light')
  buttonRightRef.value.classList.add('text-light')
}
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

.button-group-left {
  @apply button-group-shared;
  @apply text-light  hover:bg-dark-hover;
}

.button-group-right {
  @apply button-group-shared;
  @apply hover:text-light;
}
</style>
