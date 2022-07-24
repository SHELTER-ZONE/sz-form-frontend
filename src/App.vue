<template>
  <Provider>
    <router-view />
  </Provider>
</template>

<script setup lang="ts">
import Provider from '@/components/Provider.vue'
</script>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full;
}

#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-gray-400 bg-szPrimary text-center;
}
</style>
