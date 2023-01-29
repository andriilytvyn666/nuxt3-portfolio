<!-- TODO: split this giant component into subcomponents -->
TODO: imporove description text visibility on smaller screens
<template>
  <div class="flex flex-col" v-if="renderCondition">
    <div
      class="flex flex-col gap-6 mt-6 text-xl font-medium text-light"
      v-for="about in aboutMe"
      :key="about._id"
    >
      <div class="flex gap-6">
        <nuxt-img
          :src="about.photo.asset._ref"
          :alt="getLocalizedString($i18n.locale, about.name)"
          class="rounded-[0.313rem] max-w-min w-[12.434rem] h-[16rem]"
        />
        <div class="flex flex-col justify-between flex-grow">
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

              <ButtonGroup
                iconLeft="feather/columns"
                iconRight="feather/grid"
              />
            </div>
          </div>
        </div>
      </div>
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
const query: string = groq`*[_type == "about"]
{_id, photo, name, location, locationFlag, description, dreyfus, cvEn, cvUk }`

const { data } = await useSanityQuery<About[]>(query)
const aboutMe = data.value

if (aboutMe !== null && aboutMe[0] !== null)
  store.setName(getLocalizedString(locale.value, aboutMe[0].name))

const renderCondition: boolean = aboutMe !== null && aboutMe.length === 1

const getLocalizedFile = (locale: string, about: About): string => {
  if (locale === 'uk') return about.cvUk.asset._ref
  return about.cvEn.asset._ref
}
</script>
