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
    <!-- <Swiper
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
          image="/img/skillNuxt.png"
          :level="skill.level"
          :title="skill.name"
        />
      </SwiperSlide>
    </Swiper> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  grid: boolean
}>()

const sanity = useSanity()

type Skill = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  name: string
  level: string
  logo: Logo
}

type Logo = {
  _type: string
  asset: Asset
}

type Asset = {
  _ref: string
  _type: string
}

const query = groq`*[_type == "skill"]`
const { data } = await useAsyncData('skills', () =>
  sanity.fetch<Skill[]>(query)
)

const skills = data.value!
</script>
