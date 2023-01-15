<template>
    <div class="flex flex-col items-start rounded custom-article-card overflow-hidden">
        <div
            class="bg-dark overflow-hidden flex flex-grow flex-col justify-center items-center self-stretch custom-article-card-image">
            <img src="~/assets/img/testImage.jpg" class="object-cover flex-grow" alt="Image">
        </div>
        <div class="flex flex-col justify-center self-stretch p-5 bg-card">
            <span class="text-light-alt custom-card-date">6 October 2022</span>
            <span class="text-light whitespace-nowrap truncate custom-card-title">Top 5 UI/UX design tips in Figma and
                Adobe XD for beginers and professional designers. New. Updated.</span>
            <span class="text-light-alt whitespace-nowrap truncate custom-card-subtitle">This is article short
                description. Not so short actually. Really loooooooooooooooooooooooooong text.</span>
            <div class="flex flex-row gap-2.5 mt-3 w-full flex-wrap">
                <ButtonTag />
                <ButtonTag />
                <ButtonTag />
            </div>
        </div>
    </div>
</template>