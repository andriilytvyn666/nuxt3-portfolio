<template>
  <div class="flex gap-6 mt-6 text-xl font-medium text-light">
    <nuxt-img
      :src="about.photo.asset._ref"
      class="rounded-[0.313rem] max-w-min h-[16rem]"
    />
    <div class="flex flex-col justify-between flex-grow">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1 py-1">
          <span class="text-2xl font-bold">{{ about.name }}</span>
          <span class="flex items-center gap-2 text-light-unfocused">
            <nuxt-img
              :src="about.locationFlag.asset._ref"
              alt="Ukraine Flag"
              class="h-6"
            />
            {{ about.location }}
          </span>
        </div>
        <div class="flex flex-col">
          <span
            class="font-medium"
            v-for="(line, lineNumber) of about.description.split('\\n')"
            :key="lineNumber"
          >
            {{ line }}
          </span>
        </div>
      </div>
      <div class="flex flex-row min-h-[3rem]">
        <div class="flex gap-4">
          <ButtonText
            :text="$t('landing.aboutMe.downloadCV')"
            icon="feather/download"
          />
          <ButtonText
            :text="$t('landing.aboutMe.contactMe')"
            icon="feather/x"
            type="close"
            @click="store.closeContacts"
            v-show="props.contacts"
          />
          <ButtonText
            :text="$t('landing.aboutMe.contactMe')"
            icon="feather/message-circle"
            type="primary"
            @click="store.openContacts"
            v-show="!props.contacts"
          />
        </div>
        <div class="grow"></div>
        <div class="flex gap-4" v-if="!store.contactsOpen">
          <ButtonText
            :text="$t('landing.aboutMe.aboutSkillLevels')"
            icon="feather/info"
          />
          <ButtonGroup iconLeft="feather/columns" iconRight="feather/grid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const props = defineProps<{
  contacts: boolean
}>()

const store = useLandingStore()

const sanity = useSanity()

type About = {
  name: string
  photo: Image
  locationFlag: Image
  description: string
  location: string
}

type Image = {
  asset: Asset
}

type Asset = {
  _ref: string
}

const query = groq`*[_type == "about"]`
const { data } = await useAsyncData('about', () => sanity.fetch<About[]>(query))

const about = data.value![0]
console.log(about.description.split('\\n'))
</script>
