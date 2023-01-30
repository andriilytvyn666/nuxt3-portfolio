<template>
  <div
    class="min-[0px]:max-sm:flex min-[0px]:max-sm:flex-col sm:max-2xl:hidden 2xl:hidden"
  >
    <div
      class="flex flex-col gap-1 py-1 min-[0px]:max-sm:items-center min-[0px]:max-sm:pb-"
    >
      <h2 class="text-2xl font-bold">
        {{ getLocalizedString($i18n.locale, about.name) }}
      </h2>
      <h3 class="flex items-center gap-2 text-light-unfocused">
        <nuxt-img
          :src="about.locationFlag.asset._ref"
          :alt="getLocalizedString($i18n.locale, about.location)"
          class="w-6 h-6"
        />
        {{ getLocalizedString($i18n.locale, about.location) }}
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const props = defineProps<{
  contacts: boolean
}>()

const store = useLandingStore()
const about = computed(() => store.about)
store.fetchAbout()
</script>
