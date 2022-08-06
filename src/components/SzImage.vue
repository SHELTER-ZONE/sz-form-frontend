<template>
  <div class="sz-image">
    圖{{ index + 1 }}
    <div class="flex-grow max-w-full">
      <n-input v-model:value="syncModel" size="large" placeholder="圖片網址" />
    </div>
    <n-icon
      class="cursor-pointer hover:text-[#63e2b7]"
      size="20"
      @click="$emit('remove', index)"
    >
      <close-icon />
    </n-icon>
  </div>
</template>

<script setup>
import { Close as CloseIcon } from '@vicons/carbon'
import { NInput, NIcon } from 'naive-ui/es'
import { computed } from 'vue'

const props = defineProps({
  data: { type: [String, null], required: true },
  index: { type: Number, required: true },
})

const emit = defineEmits(['remove', 'update:data'])

const syncModel = computed({
  get() {
    return props.data
  },
  set(value) {
    return emit('update:data', value)
  },
})
</script>

<style scoped lang="postcss">
.sz-image {
  @apply flex justify-start items-center gap-x-[8px] gap-y-[12px] my-[12px];
}
</style>
