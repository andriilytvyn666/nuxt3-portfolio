<template>
  <Dropdown v-model="locale" icon="feather/globe">
    <option value="en">English</option>
    <option value="uk">Українська</option>
  </Dropdown>
</template>

<script setup lang="ts">
const locale = ref<string>('en')
</script>
