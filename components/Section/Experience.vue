<template>
  <div class="flex flex-col gap-3">
    <SectionTitle icon="feather/briefcase" title="Work Experience" />
    <div class="grid grid-cols-2 gap-5">
      <CardWide
        title="Junior UI/UX designer"
        text="Google LLC ‧ December 2022 - June 2023"
        logo="/img/card/google.png"
        v-for="i in 3"
        :key="i"
      />
    </div>
  </div>
</template>
