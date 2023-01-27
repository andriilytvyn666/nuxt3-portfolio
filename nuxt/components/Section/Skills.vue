<template>
  <div class="grid grid-cols-8 gap-5" v-if="props.grid && renderCondition">
    <CardSkill
      :image="skill.logo.asset._ref"
      :level="skill.level"
      :title="skill.name"
      v-for="skill in skills"
      :key="skill.name"
    />
  </div>
  <div class="flex flex-col" v-if="!props.grid && renderCondition">
    <Swiper
      class="w-full"
      :slides-per-view="8"
      :space-between="20"
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
      <SwiperSlide v-for="skill in skills" :key="skill.name">
        <CardSkill
          :image="skill.logo.asset._ref"
          :level="skill.level"
          :title="skill.name"
          :key="skill.name"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  grid: boolean
}>()

const query = groq`*[_type == "skill"] { _id, logo, name, level }`
const { data } = useSanityQuery<Skill[]>(query)

const skills = data.value
const renderCondition: boolean = skills !== null && skills.length > 0
</script>
