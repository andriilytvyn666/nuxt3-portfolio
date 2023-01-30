<template>
  <div class="hidden sm:max-2xl:flex 2xl:flex flex-row min-h-[3rem]">
    <div class="flex gap-4">
      <SanityFile :asset-id="getLocalizedFile($i18n.locale, about)">
        <template #default="{ src }">
          <ButtonText
            class="sm:hidden md:flex"
            :text="$t('landing.aboutMe.downloadCV')"
            :link="src"
            icon="feather/download"
            name="downloadCV"
          />
          <ButtonText
            class="md:hidden sm:flex"
            text="CV"
            :link="src"
            icon="feather/download"
            name="downloadCV"
          />
        </template>
      </SanityFile>
      <ButtonText
        :text="$t('landing.aboutMe.contactMe')"
        name="close"
        icon="feather/x"
        type="close"
        @click="store.closeContacts"
        v-show="props.contacts"
      />
      <ButtonText
        :text="$t('landing.aboutMe.contactMe')"
        name="contactMe"
        icon="feather/message-circle"
        type="primary"
        @click="store.openContacts"
        v-show="!props.contacts"
      />
    </div>
    <div class="grow"></div>
    <div class="flex gap-4" v-if="!store.contactsOpen">
      <SanityFile :asset-id="about.dreyfus.asset._ref">
        <template #default="{ src }">
          <ButtonText
            class="sm:max-lg:hidden"
            :text="$t('landing.aboutMe.aboutSkillLevels')"
            :link="src"
            name="aboutSkillLevels"
            icon="feather/info"
          />
        </template>
      </SanityFile>

      <ButtonGroup iconLeft="feather/columns" iconRight="feather/grid" />
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
