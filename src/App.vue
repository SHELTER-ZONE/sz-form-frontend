<template>
  <Provider class="flex flex-col">
    <Navbar />
    <router-view class="flex-1 common-width !mt-[50px]" />
    <SzFooter />
  </Provider>
</template>

<script setup lang="ts">
import Provider from '@/components/Provider.vue'
import SzFooter from '@/components/SzFooter.vue'
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
  @apply text-gray-400 bg-primary-1 text-center;
}
</style>
