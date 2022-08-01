<template>
  <main class="landing-page">
    <div>
      <h1 class="text-left">SZ Form</h1>
      <p class="text-left">SZ Form Description</p>
      <h2>限時活動表單</h2>
      <sz-card class="mt-0" />
      <sz-card />
      <h2>常駐活動表單</h2>
      <sz-card class="mt-0" />
      <sz-card />
    </div>
  </main>
</template>

<script setup lang="ts">
import SzCard from '@/components/SzCard.vue'
</script>

<style scoped lang="postcss">
h2 {
  @apply pt-45px;
}
</style>
