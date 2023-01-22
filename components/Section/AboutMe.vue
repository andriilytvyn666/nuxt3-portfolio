<template>
  <div class="flex gap-6 mt-6 text-xl font-medium text-light">
    <img
      src="~/assets/img/photo.png"
      alt="Photo"
      class="rounded-[0.313rem] max-w-min h-[16rem]"
    />
    <div class="flex flex-col justify-between flex-grow">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1 py-1">
          <span class="text-2xl font-bold">{{
            $t('landing.aboutMe.name')
          }}</span>
          <span class="flex items-center gap-2 text-light-unfocused">
            <img
              src="~/assets/img/emojiFlagUkraine.png"
              alt="Ukraine Flag"
              class="h-6"
            />
            {{ $t('landing.aboutMe.location') }}
          </span>
        </div>
        <div>
          <p class="font-medium whitespace-pre-line">
            {{ $t('landing.aboutMe.description') }}
          </p>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex gap-4">
          <ButtonText
            :text="$t('landing.aboutMe.downloadCV')"
            icon="feather/download"
          />
          <ButtonText
            :text="$t('landing.aboutMe.contactMe')"
            icon="feather/message-circle"
            type="primary"
          />
        </div>
        <div class="grow"></div>
        <div class="flex gap-4">
          <ButtonText
            :text="$t('landing.aboutMe.aboutSkillLevels')"
            icon="feather/info"
          />
          <ButtonGroup iconLeft="feather/columns" iconRight="feather/grid" />
        </div>
      </div>
    </div>
  </div>
</template>
