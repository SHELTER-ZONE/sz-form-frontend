<template>
  <section class="form-info">
    <h1 class="flex items-center justify-start gap-[8px]">
      <router-link to="/">
        <n-icon :size="30" class="pt-[7px]"><ChevronLeft /></n-icon>
      </router-link>
      {{ formData.name }}
    </h1>

    <p>{{ formData.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { ChevronLeft } from '@vicons/carbon'
import { NIcon } from 'naive-ui/es'

defineProps({
  formData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped lang="postcss"></style>
