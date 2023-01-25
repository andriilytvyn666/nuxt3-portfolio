<template>
  <div class="flex flex-col gap-3">
    <SectionTitle
      icon="feather/book"
      :title="$t('landing.shared.sectionNames.education')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardWide
        title="Lviv Polytechnic National University"
        :text="`${$t(
          'landing.shared.academicDegrees.bachelor'
        )} ‧ CS(AI) ‧ 2020 - 2024`"
        logo="/img/card/nulp.png"
        v-for="i in 1"
        :key="i"
      />
    </div>
  </div>
</template>
