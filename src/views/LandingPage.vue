<template>
  <main class="landing-page">
    <n-layout class="h-full">
      <n-space vertical class="px-30px pt-50px pb-75px">
        <h1>
          SZ Form
        </h1>
        <p>
          SZ Form Description
        </p>
        <h2>
          限時活動表單
        </h2>
        <sz-card class="mt-0" />
        <sz-card />
        <h2>
          常駐活動表單
        </h2>
        <sz-card class="mt-0" />
        <sz-card />
      </n-space>
    </n-layout>
    <sz-footer />
  </main>
</template>

<script setup lang="ts">
import { NSpace, NLayout } from 'naive-ui/es'
import SzCard from '@/components/SzCard.vue'
import SzFooter from '@/components/SzFooter.vue'
</script>

<style scoped lang="postcss">
.landing-page {
  @apply h-full;
}

h1 {
  @apply text-xl font-bold py-12px;
}

p {
  @apply text-base py-12px;
}

h2 {
  @apply text-lg font-medium py-12px pt-45px;
}
</style>
