<template>
    <div class="bg-dark">
        <div class="grid grid-cols-12 gap-5 justify-center mx-auto" style="width: 1180px;">
            <div class="col-span-12 flex flex-col min-h-screen">
                <Header />
                <div class="min-h-max text-light flex flex-col">
                    <slot />
                </div>
                <Footer class="bottom-0 w-fill" />
            </div>
        </div>
    </div>
</template>