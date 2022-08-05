<template>
  <div class="pagination-container">
    <n-pagination
      v-model:page="syncPage"
      :page-count="totalPages"
      :on-update:page="pageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { NPagination } from 'naive-ui/es'
import { ref, computed } from 'vue'

const emit = defineEmits(['update:page', 'pageChange'])
const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 1,
  },
})
// const page = ref<Number>(1)
const syncPage = computed({
  get() {
    return props.page
  },
  set(page: number) {
    return emit('update:page', page)
  },
})

const pageChange = (newPage: number) => {
  syncPage.value = newPage
  emit('pageChange', newPage)
}
</script>

<style scoped lang="postcss">
.pagination-container {
  @apply flex justify-center items-center;
}
</style>
