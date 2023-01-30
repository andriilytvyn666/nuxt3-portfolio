<template>
  <div class="flex flex-col h-full gap-3 sm:max-2xl:hidden 2xl:hidden">
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
    <SanityFile :asset-id="getLocalizedFile($i18n.locale, about)">
      <template #default="{ src }">
        <ButtonText
          :text="$t('landing.aboutMe.downloadCV')"
          :link="src"
          icon="feather/download"
          name="downloadCV"
        />
      </template>
    </SanityFile>
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
