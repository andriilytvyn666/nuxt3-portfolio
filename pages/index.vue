<template>
  <PageWrapper>
    <div class="flex flex-col gap-4">
      <SectionAboutMe />
      <div class="flex gap-3">
        <ButtonText
          text="Contact me"
          icon="feather/message-circle"
          type="primary"
        />
        <ButtonText
          text="Download CV"
          icon="feather/download"
          type="secondary"
        />
        <ButtonIcon icon="feather/file" type="primary" />
        <ButtonIcon icon="feather/message-circle" type="secondary" />
        <ButtonIcon icon="feather/x" type="close" />
        <ButtonText text="Close" icon="feather/x" type="close" />
      </div>
      <!-- <SectionAboutMe />
      <SectionAboutMe />
      <SectionAboutMe />
      <SectionAboutMe />
      <SectionAboutMe />

      <SectionSkills /> -->
    </div>
    <div class="flex flex-col gap-12">
      <!-- <SectionProjects />
      <SectionCourses />
      <SectionWorkplaces />
      <SectionEdu /> -->
    </div>
  </PageWrapper>
</template>
