<template>
  <div class="flex flex-col gap-3">
    <SectionTitle
      icon="feather/book"
      :title="$t('landing.shared.sectionNames.education')"
    />
    <div class="grid grid-cols-2 gap-5">
      <CardEducation
        logo="nulp"
        university="Lviv Polytechnic National University"
        major="CS/AI"
        :degree="`${$t('landing.shared.academicDegrees.bachelor')}`"
        :start="new Date(2020, 0)"
        :end="new Date(2024, 0)"
      />
    </div>
  </div>
</template>
