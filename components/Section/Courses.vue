<template>
    <div class="flex flex-col gap-4">
        <span class="custom-section-title text-center">{{ "Certificates" }}</span>
        <div id="skills-container"
            class="grid grid-cols-2 gap-x-5 gap-y-5">
            <ContainerCard v-for="i in 5" />
        </div>
    </div>
</template>