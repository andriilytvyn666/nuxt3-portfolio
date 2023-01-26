<template>
  <div class="grid grid-cols-2 gap-5">
    <CardWideDoubleAction
      logo="/img/card/telegram.png"
      primary-action-icon="feather/clipboard"
      secondary-action-icon="feather/message-circle"
      title="Telegram"
      text="@andriilytvyn666"
      v-for="i in 2"
      :key="i"
    />
  </div>
</template>
