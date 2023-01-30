<!-- TODO: adjust footer height for smartphones -->
<!-- TODO: add smartphones breakpoints -->
<template>
  <footer
    class="bg-dark-footer min-w-max min-h-[5rem] max-h-[5rem] flex items-center border border-t-dark-border"
  >
    <div
      class="xl:w-[73.75rem] lg:w-[62rem] md:w-[46rem] sm:w-[38rem] min-[320px]:w-[20.5rem] min-[500px]:w-[29.25rem] flex px-2 mx-auto justify-between items-center h-full"
    >
      <div class="flex flex-col text-sm text-light-unfocused">
        <span>{{
          `Copyright © 2023 ${getLocalizedString(
            $i18n.locale,
            store.about.name
          )}`
        }}</span>
        <a
          class="text-light-unfocused hover:text-light w-fit"
          aria-label="CC BY-NC-SA 4.0"
          target="_blank"
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

<script setup lang="ts">
import { useLandingStore } from '~~/stores/landing'
const store = useLandingStore()
</script>
