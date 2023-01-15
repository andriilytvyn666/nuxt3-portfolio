<template>
    <div class="flex flex-col gap-4">
        <span class="custom-section-title text-center">Skills</span>
        <div class="flex flex-row custom-carousel-adjustments">
            <div
                class="custom-swiper-prev flex items-center justify-center bg-card hover:bg-card-hovered active:bg-card h-full w-16 rounded mr-5">
                <Icon name="ion:chevron-left" size="24" />
            </div>
            <Swiper class="w-full" :slides-per-view="8" :space-between="20" :modules="[SwiperNavigation, SwiperVirtual, SwiperAutoplay]"
                :navigation="{ nextEl: '.custom-swiper-next', prevEl: '.custom-swiper-prev', hideOnClick: true }"
                :autoplay="{delay: 1000, disableOnInteraction: false}"
                :loop="true">
                <SwiperSlide v-for="slide in 20" :key="slide">
                    <ContainerSkillCard style="flex: 0 0 auto" />
                </SwiperSlide>
            </Swiper>
            <div
                class="custom-swiper-next flex items-center justify-center bg-card hover:bg-card-hovered active:bg-card h-full w-16 rounded ml-5">
                <Icon name="ion:chevron-right" size="24" />
            </div>
        </div>
        <div class="flex flex-row justify-between">
            <ButtonAboutRating />
            <ButtonShowMore />
        </div>

    </div>


</template>


<style>
#skills-container::-webkit-scrollbar {
    display: none;
}

.custom-carousel-adjustments {
    width: 1340px;
    margin-left: -80px;
}
</style>