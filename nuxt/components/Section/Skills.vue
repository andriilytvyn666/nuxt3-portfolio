<template>
  <div class="grid grid-cols-8 gap-5" v-if="props.grid">
    <CardSkill
      :image="skill.logo.asset._ref"
      :level="skill.level"
      :title="skill.name"
      v-for="skill in skills"
      :key="skill.name"
    />
  </div>
  <div class="flex flex-col" v-else>
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

const sanity = useSanity()

type Skill = {
  name: string
  level: string
  logo: Logo
}

type Logo = {
  asset: Asset
}

type Asset = {
  _ref: string
}

const query = groq`*[_type == "skill"]`
const { data } = await useAsyncData('skills', () =>
  sanity.fetch<Skill[]>(query)
)

const skills = data.value!
</script>
