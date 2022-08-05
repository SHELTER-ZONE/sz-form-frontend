<template>
  <main class="landing-page">
    <div>
      <h1 class="text-left">SZ Form</h1>
      <p class="text-left">SZ Form Description</p>
      <h2>限時活動表單</h2>
      <div v-if="appStore.eventForms.length">
        <sz-card
          class="mt-0"
          v-for="form in appStore.eventForms"
          :key="form.key"
          :data="form"
        />
      </div>
      <h2>常駐活動表單</h2>
      <div v-if="appStore.staticForms.length">
        <sz-card
          class="mt-0"
          v-for="form in appStore.staticForms"
          :key="form.key"
          :data="form"
        />
      </div>
    </div>

    <n-pagination
      v-model:page="page"
      :page-count="100"
      :on-update:page="refresh"
    />
  </main>
</template>

<script setup lang="ts">
import SzCard from '@/components/SzCard.vue'
import { ref, onMounted } from 'vue'
import { useMessage, NPagination } from 'naive-ui/es'
import { useAppStore } from '@/store'

const appStore = useAppStore()

const page = ref<Number>(1)
const message = useMessage()

onMounted(async () => {})
</script>

<style scoped lang="postcss">
h2 {
  @apply pt-45px;
}
</style>
