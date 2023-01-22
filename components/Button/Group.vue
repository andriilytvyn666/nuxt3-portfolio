<template>
  <div
    class="button-group [&>div]:border-dark-click rounded-[0.313rem] [&>div]:rounded-l-[0.313rem;"
  >
    <div
      ref="buttonLeftRef"
      class="box-border flex items-center justify-center w-12 h-12 border-r bg-dark-hover text-light"
      @click="onClickLeft"
    >
      <NuxtIcon :name="props.iconLeft" class="text-xl leading-5" filled />
    </div>
    <div
      ref="buttonRightRef"
      class="flex items-center justify-center w-12 h-12 cursor-pointer"
      @click="onClickRight"
    >
      <NuxtIcon :name="props.iconRight" class="text-xl leading-5" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconLeft: {
    type: String,
    default: 'feather/file',
    required: true,
  },
  iconRight: {
    type: String,
    default: 'feather/file',
    required: true,
  },
})

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
  @apply flex flex-grow max-w-min justify-center items-center;
  @apply outline outline-1 outline-dark-click text-light-unfocused;
  @apply border-dark-click;
}
</style>
