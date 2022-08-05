<template>
  <main class="landing-page">
    <div>
      <div class="text-left">
        <h1>SZ Form</h1>
        <p>SZ Form Description</p>
      </div>
      <div>
        <h2 class="text-left">限時活動表單</h2>
        <FormList
          :loading="appStore.formsLoading"
          :formList="appStore.eventForms"
        />
      </div>
      <div>
        <h2 class="text-left">常駐活動表單</h2>
        <FormList
          :loading="appStore.formsLoading"
          :formList="appStore.staticForms"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import FormList from './components/FormList.vue'
import { onMounted } from 'vue'
import { useMessage } from 'naive-ui/es'
import { useAppStore } from '@/store'

const appStore = useAppStore()

const message = useMessage()

onMounted(async () => {
  appStore.formsLoading = true
  const getCountErr = await appStore.getFormsCount()
  if (getCountErr) return message.error(getCountErr)
  const getFormsErr = await appStore.getFormsList()
  if (getFormsErr) return message.error(getFormsErr)
  appStore.formsLoading = false
})
</script>

<style scoped lang="postcss">
h2 {
  @apply pt-45px;
}
</style>
