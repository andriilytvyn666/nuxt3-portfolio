<template>
  <PageWrapper>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-6">
        <SectionAboutMe />
        <SectionSkills />
        <div class="flex flex-row gap-5">
          <CardWide
            title="Programming with JavaScript"
            text="Coursera ⸱ December 2022"
            logo="/img/card/nulp.png"
          /><CardWideAction
            title="Programming with JavaScript"
            text="Coursera ⸱ December 2022"
            actionIcon="feather/file"
            logo="/img/card/coursera.png"
          />
          <CardWideDoubleAction
            title="Programming with JavaScript"
            text="Coursera ⸱ December 2022"
            primaryActionIcon="feather/clipboard"
            secondaryActionIcon="feather/message-circle"
            logo="/img/card/telegram.png"
          />
        </div>
        <!-- <button
          class="px-4 py-2 border rounded-md text-light w-min whitespace-nowrap border-dark-border"
        >
          Click Me!
        </button> -->
      </div>
    </div>
    <div class="flex flex-col gap-12">
      <!-- <SectionProjects />
      <SectionCourses />
      <SectionWorkplaces />
      <SectionEdu /> -->
    </div>
  </PageWrapper>
</template>
