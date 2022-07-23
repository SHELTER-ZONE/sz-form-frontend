<template>
  <n-config-provider id="app-provider" :theme="lightTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <slot />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, lightTheme, GlobalThemeOverrides } from 'naive-ui/es'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    textColor2: "#000000"
  },
}
</script>

<style scoped lang="postcss">
#app-provider {
  @apply h-full w-full;
}
</style>
