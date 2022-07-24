<template>
  <n-config-provider id="app-provider" :theme="darkTheme">
    <n-message-provider>
      <slot />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui/es'
</script>

<style scoped lang="postcss">
#app-provider {
  @apply h-full w-full overflow-y-auto;
}
</style>
