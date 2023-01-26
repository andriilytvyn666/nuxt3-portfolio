<template>
  <footer
    class="bg-dark-footer min-w-max min-h-[5rem] max-h-[5rem] flex items-center border border-t-dark-border"
  >
    <div
      class="w-[73.75rem] flex px-2 mx-auto justify-between items-center h-full"
    >
      <div class="flex flex-col text-sm text-light-unfocused">
        <span>{{ `Copyright © 2023 ${$t('landing.aboutMe.name')}` }}</span>
        <a
          class="text-light-unfocused hover:text-light"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY-NC-SA 4.0</a
        >
      </div>
      <div class="flex gap-3">
        <!-- <DropdownTheme /> -->
        <DropdownLocale />
      </div>
    </div>
  </footer>
</template>
