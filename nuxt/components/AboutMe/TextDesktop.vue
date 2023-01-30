<template>
  <div
    class="hidden justify-between flex-grow min-[0px]:max-[640px]:hidden min-[0px]:max-[640px]:flex-col sm:max-2xl:flex 2xl:flex sm:max-2xl:flex-col 2xl:flex-col"
  >
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-1 py-1">
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
      <div class="flex flex-col">
        <span
          class="text-base font-medium lg:max-2xl:text-xl 2xl:text-xl"
          v-for="(line, lineNumber) of getLocalizedString(
            $i18n.locale,
            about.description
          ).split('\\n')"
          :key="lineNumber"
        >
          {{ line }}
        </span>
      </div>
    </div>
    <AboutMeButtonsMobile :contacts="props.contacts" />
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
