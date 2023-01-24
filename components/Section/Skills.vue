<template>
  <div class="grid grid-cols-8 gap-5" v-if="props.grid">
    <CardSkill
      v-for="i in 3"
      :key="i"
      image="/img/skillNuxt.png"
      level="novice"
    />
    <CardSkill
      v-for="i in 3"
      :key="i"
      image="/img/skillNuxt.png"
      level="beginner"
    />
    <CardSkill
      v-for="i in 3"
      :key="i"
      image="/img/skillNuxt.png"
      level="competent"
    />
    <CardSkill
      v-for="i in 3"
      :key="i"
      image="/img/skillNuxt.png"
      level="proficient"
    />
    <CardSkill
      v-for="i in 3"
      :key="i"
      image="/img/skillNuxt.png"
      level="expert"
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
      <SwiperSlide v-for="i in 3" :key="i">
        <CardSkill image="/img/skillNuxt.png" level="novice" />
      </SwiperSlide>
      <SwiperSlide v-for="i in 3" :key="i">
        <CardSkill image="/img/skillNuxt.png" level="beginner" />
      </SwiperSlide>
      <SwiperSlide v-for="i in 3" :key="i">
        <CardSkill image="/img/skillNuxt.png" level="competent" />
      </SwiperSlide>
      <SwiperSlide v-for="i in 3" :key="i">
        <CardSkill image="/img/skillNuxt.png" level="proficient" />
      </SwiperSlide>
      <SwiperSlide v-for="i in 3" :key="i">
        <CardSkill image="/img/skillNuxt.png" level="expert" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  grid: boolean
}>()
</script>
