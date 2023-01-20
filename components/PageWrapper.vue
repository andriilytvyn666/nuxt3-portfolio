<template>
    <div class="flex flex-col flex-grow items-stretch min-h-screen">
        <Header />
        <article class="grid grid-cols-12 gap-5 justify-center grow w-[1180px] mx-auto">
            <div class="col-span-12 flex flex-col">
                <slot />
            </div>
        </article>
        <Footer />
    </div>
</template>