<template>
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
</template>