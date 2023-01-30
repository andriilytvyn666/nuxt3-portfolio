<template>
  <div
    class="grid w-full grid-cols-3 gap-5 mx-auto sm:max-xl:w-full sm:max-xl:gap-5 xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 min-[0px]:max-sm:grid-cols-2 min-[0px]:max-sm:gap-16"
    v-if="props.grid && renderCondition && !store.contactsOpen"
  >
    <CardSkill
      :logo="skill.logo.asset._ref"
      :title="skill.name"
      :level="skill.level"
      v-for="skill in skills"
      :key="skill._id"
    />
  </div>
  <div
    class="flex flex-col"
    v-if="!props.grid && renderCondition && !store.contactsOpen"
  >
    <Swiper
      class="w-full"
      :slides-per-view="8"
      :space-between="20"
      :breakpoints="{
        500: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 7,
        },
        1240: {
          slidesPerView: 8,
        },
      }"
      :modules="[SwiperAutoplay]"
      :autoplay="{
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :loop="true"
    >
      <!--
        The number of skills should be at least 8 or Swiper will break and 
        will be displaying values three times in a row.
        I assume it's a nuxt-swiper plugin issue.
      -->
      <SwiperSlide v-for="skill in skills" :key="skill._id">
        <CardSkill
          :logo="skill.logo.asset._ref"
          :title="skill.name"
          :level="skill.level"
          :key="skill.name"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'

const props = defineProps<{
  grid: boolean
}>()

const store = useLandingStore()

const query = groq`*[_type == "skill"] { _id, logo, name, level }`
const { data } = useSanityQuery<Skill[]>(query)

const skills = data.value

const renderCondition: boolean = skills !== null && skills.length > 0
</script>
