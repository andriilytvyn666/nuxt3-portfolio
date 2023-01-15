<template>
    <div class="flex flex-row gap-12 items-ceter">
        <img src="~/assets/img/profilePicture.png" alt="Profile Picture" class="rounded custom-image-shadow"
            style="width: 256px; height: 256px">
        <div class="flex flex-col justify-center items-start gap-4">
            <div class="flex flex-col">
                <span class="text-light font-bold" style="font-size: 32px">Andrii Lytvyn</span>
                <div class="flex flex-row gap-2">
                    <img src="~/assets/img/ukraineFlag.png" alt="Ukraine Flag">
                    <span class="font-medium text-light-alt text-xl">Lviv, Ukraine</span>
                </div>
            </div>
            <pre class="text-light-alt font-semibold font-sans " style="font-size: 22px">
{{ "I’m third-year student of CS/AI at Lviv Polytechnic National University.\nI love to build beautiful and enjoyable user interfaces and designs.\nAt the moments I’m learning UI/UX design and Nuxt.js."}}
            </pre>
        </div>
    </div>
</template>