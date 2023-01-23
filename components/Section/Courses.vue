<template>
  <div class="flex flex-col gap-3">
    <SectionTitle icon="feather/check-square" title="Courses" />
    <div class="grid grid-cols-2 gap-5">
      <CardWideAction
        title="Programming with JavaScript"
        text="Coursera/Meta ‧ December 2022"
        actionIcon="feather/file"
        logo="/img/card/coursera.png"
        v-for="i in 4"
        :key="i"
      />
    </div>
  </div>
</template>
