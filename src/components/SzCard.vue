<template>
  <n-grid class="card" x:gap="12" :cols="4">
    <n-grid-item class="heading-icon" span="1">
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
.card {
  @apply rounded my-12px bg-white/10 text-left text-white/82 cursor-pointer;
}

p {
  @apply p-0;
}

.heading-icon {
  @apply text-3xl font-normal m-auto;
}
</style>
