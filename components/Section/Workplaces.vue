<template>
    <div class="flex flex-col gap-4">
        <span class="custom-section-title text-center">{{ "Work Experience" }}</span>
        <div id="skills-container"
            class="grid grid-cols-3 gap-x-5 gap-y-5">
            <ContainerCard v-for="i in 5" />
        </div>
    </div>
</template>