<template>
  <Dropdown v-model="theme" :icon="getIconName()">
    <option value="system">System</option>
    <option value="dark">Dark</option>
    <option value="light">Light</option>
  </Dropdown>
</template>

<script setup lang="ts">
const theme = ref<string>('system')

const themes = {
  system: 'feather/monitor',
  dark: 'feather/moon',
  light: 'feather/sun',
}

const getIconName = () => {
  switch (theme.value) {
    case 'dark':
      return themes.dark
    case 'light':
      return themes.light
    default:
      return themes.system
  }
}
</script>
