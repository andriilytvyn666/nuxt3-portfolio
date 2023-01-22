<template>
  <div class="flex flex-col gap-4">
    <Swiper
      class="w-full"
      :slides-per-view="8"
      :space-between="20"
      :modules="[SwiperNavigation, SwiperVirtual, SwiperAutoplay]"
      :autoplay="{ delay: 1000, disableOnInteraction: false }"
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
