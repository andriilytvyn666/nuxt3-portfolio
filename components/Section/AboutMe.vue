<!-- <template>
    <div class="flex flex-row gap-12 items-ceter">
        <img src="~/assets/img/profilePicture.png" alt="Profile Picture" class="rounded custom-image-shadow"
            style="width: 256px; height: 256px">
        <div class="flex flex-col justify-center items-start gap-4">
            <div class="flex flex-col">
                <span class="text-light font-bold" style="font-size: 32px">{{ $t('name') }}</span>
                <div class="flex flex-row gap-2">
                    <img src="~/assets/img/ukraineFlag.png" alt="Ukraine Flag">
                    <span class="font-medium text-light-alt text-xl">{{ $t('location') }} </span>
                </div>
            </div>
            <pre class="text-light-alt font-semibold font-sans " style="font-size: 22px">{{ $t('about') }}</pre>
        </div>
    </div>
</template> -->

<template>
    <div class="text-light flex gap-6 text-xl font-medium mt-6">
        <img src="~/assets/img/photo.png" alt="Photo" class="rounded-[5px] max-w-min h-[256px]" />
        <div>
            <div class="flex flex-col gap-6">
                <div class="py-1 flex flex-col gap-1">
                    <span class="text-2xl font-bold">Andrii Lytvyn</span>
                    <span class="text-light-unfocused flex gap-2 items-center ">
                        <img src="~/assets/img/emojiFlagUkraine.png" alt="Ukraine Flag" class="h-6" />
                        Lviv, Ukraine
                    </span>
                </div>
                <div>
                    <p class="font-medium">
                        I’m 3rd year CS/AI student.<br/>
                        I like to create great designs and other things too.<br/>
                        Web development and UI/UX design are my main interests.
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>