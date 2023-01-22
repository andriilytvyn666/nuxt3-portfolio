<template>
  <footer class="bg-dark-footer min-w-max">
    <div class="w-[73.75rem] flex py-6 px-2 mx-auto">
      <span class="text-sm text-light-unfocused">{{
        $t('landing.footer.copyright', {
          year: new Date().getFullYear(),
        })
      }}</span>
    </div>
  </footer>
</template>
