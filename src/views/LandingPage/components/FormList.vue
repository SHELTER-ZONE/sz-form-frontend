<template>
  <div class="event-form-list">
    <div v-if="loading" class="mb-[20px]">
      <n-spin>
        <div class="flex flex-col gap-[12px]">
          <n-skeleton width="100%" height="80px" />
          <n-skeleton width="100%" height="80px" />
        </div>
      </n-spin>
    </div>

    <div v-if="formList.length && !loading">
      <SzFormCard
        v-for="form in chunkFormList[page - 1]"
        :key="form.key"
        :data="form"
        class="mt-0"
      />
    </div>
    <n-empty
      v-if="!formList.length && !loading"
      class="mb-[20px]"
      description="目前暫無表單"
    />
    <Pagination :totalPages="totalPages" v-model:page="page" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { NEmpty, NSpin, NSkeleton } from 'naive-ui/es'
import SzFormCard from '@/components/SzFormCard.vue'
import Pagination from '@/components/Pagination.vue'

import { chunk } from 'lodash-es'

const page: any = ref<Number>(1)
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  perPage: {
    type: Number,
    default: 5,
  },
  formList: {
    type: Array,
    default: () => [],
  },
})

const chunkFormList: any = computed(() => chunk(props.formList, props.perPage))
const totalPages = computed(() =>
  Math.ceil(props.formList.length / props.perPage)
)
</script>

<style scoped lang="postcss"></style>
