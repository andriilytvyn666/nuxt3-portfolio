<template>
  <footer class="bg-dark-footer min-w-max">
    <div
      class="w-[73.75rem] flex py-6 px-2 mx-auto justify-between items-center"
    >
      <span class="text-sm text-light-unfocused">{{
        $t('landing.footer.copyright', {
          year: new Date().getFullYear(),
        })
      }}</span>
      <div class="flex gap-3">
        <!-- <DropdownTheme /> -->
        <DropdownLocale />
      </div>
    </div>
  </footer>
</template>
