<!-- TODO: split this giant component into subcomponents -->
<!-- TODO: imporove description text visibility on smaller screens -->
<template>
  <div class="flex flex-col" v-if="renderCondition">
    <div class="flex flex-col gap-6 mt-6 text-xl font-medium text-light">
      <div
        class="flex gap-8 min-[0px]:max-sm:flex-col min-[0px]:max-sm:items-center"
      >
        <nuxt-img
          :src="about!.photo.asset._ref"
          :alt="getLocalizedString($i18n.locale, about!.name)"
          class="rounded-[0.313rem] max-w-min w-[16rem] h-[16rem]"
        />
        <AboutMeTextDesktop :contacts="contacts" />
        <AboutMeTextMobile :contacts="contacts" />
      </div>
      <AboutMeButtonsDesktop :contacts="contacts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const props = defineProps<{
  contacts: boolean
}>()

const store = useLandingStore()
const { locale } = useI18n()
// TODO: move fetching code in separate function to avoid duplication

const about = computed(() => store.about)
store.fetchAbout()

const renderCondition: boolean = about !== null
</script>
