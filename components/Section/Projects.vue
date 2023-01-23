<template>
  <div class="flex flex-col gap-3">
    <SectionTitle icon="feather/layers" title="Projects" />
    <div class="grid grid-cols-4 gap-5">
      <CardProject
        v-for="i in 8"
        :key="i"
        title="nuxt3-portfolio-long-title"
        :date="new Date(2023, i)"
      />
    </div>
  </div>
</template>
