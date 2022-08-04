<template>
  <section class="form-info">
    <h1>SZ Form</h1>
    <h2>{{ formData.name }}</h2>
    <p>{{ formData.description }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps({
  formData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped lang="postcss"></style>
