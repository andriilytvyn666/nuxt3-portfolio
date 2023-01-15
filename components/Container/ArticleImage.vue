<template>
    <div @mouseover="isSourceVisible = !isSourceVisible" @mouseleave="isSourceVisible = !isSourceVisible" class="relative">
        <img src="~/assets/img/testImage.jpg" class="rounded" alt="Article Image" />
        <div v-if="isSourceVisible"
            class="flex flex-row justify-center items-center content-center px-3 py-2 rounded font-medium gap-2.5 text-light bg-imagesource w-fit absolute bottom-4 left-4">
            <Icon name="ion:image" size="20" />
            <span class="custom-imagesource-text">Image by John Doe</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSourceVisible: false
        }
    }
}
</script>