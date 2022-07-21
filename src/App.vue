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
</style>
