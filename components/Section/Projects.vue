<template>
    <div class="flex flex-col gap-4">
        <span class="custom-section-title text-center">{{ "Projects" }}</span>
        <div class="grid grid-cols-2 gap-5">
            <ContainerArticleCard v-for="i in 4" />
        </div>
    </div>
</template>