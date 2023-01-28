<template>
  <div class="flex flex-col items-stretch flex-grow min-h-screen">
    <Header />
    <article
      class="grid grid-cols-12 gap-5 justify-center grow w-[73.75rem] mx-auto"
    >
      <div class="flex flex-col col-span-12">
        <slot />
        <div class="h-16"></div>
      </div>
    </article>
    <Footer />
  </div>
</template>
