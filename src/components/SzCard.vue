<template>
  <n-grid class="card my-12px" x:gap="12" :cols="4">
    <n-grid-item class="m-auto heading-icon" span="1">
      ㉿
    </n-grid-item>
    <n-grid-item class="py-24px" span="3">
      <h3>1day-1knowledge</h3>
      <p>left: 1d 2h</p>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui/es'
</script>

<style scoped lang="postcss">
  h3 {
    @apply text-base font-medium;
  }

  p {
    @apply text-base font-normal;
  }

  .card {
    @apply rounded-md;
    background-color:#D9D9D9;
  }

  .heading-icon {
    @apply text-3xl font-normal
  }
</style>
