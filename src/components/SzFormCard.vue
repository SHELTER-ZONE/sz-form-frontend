<template>
  <router-link :to="{ name: 'Form', params: { formKey: data.key } }">
    <n-grid class="card common-transition" x:gap="12" :cols="4">
      <n-grid-item class="heading-icon" span="1"> ㉿ </n-grid-item>
      <n-grid-item class="py-24px" span="3">
        <h3>{{ data.name }}</h3>
        <p v-if="data.expDate">left: 1d 2h</p>
      </n-grid-item>
    </n-grid>
  </router-link>
</template>

<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui/es'

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped lang="postcss">
.card {
  @apply border border-transparent rounded my-12px bg-white/10 text-left text-white/82 cursor-pointer;
  @apply hover:(border border-secondary-1);
}

p {
  @apply p-0;
}

.heading-icon {
  @apply text-3xl font-normal m-auto;
}
</style>
