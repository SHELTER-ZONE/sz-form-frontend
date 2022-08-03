<template>
  <div class="flex justify-start items-center gap-x-8px gap-y-12px my-[12px]">
    圖{{ imageIndex }}
    <div class="flex-grow max-w-full">
      <n-input v-model:value="imageUrl" size="large" placeholder="Input" />
    </div>
    <n-icon class="cursor-pointer hover:text-[#63e2b7]" size="20" @click="close(id)">
      <close-icon />
    </n-icon>
  </div>
</template>

<script setup lang="ts">
import { Close as CloseIcon } from '@vicons/carbon'
import { NInput, NIcon } from 'naive-ui/es'
import { ref } from 'vue'

const props = defineProps({
  index: { type: Number, required: true},
  id: { type: String, required: true },
  close: { type: Function, required: true }
})

const imageIndex = ref(props.index + 1)
const imageUrl = ref("")

defineExpose({ imageIndex, imageUrl })
</script>

<style scoped lang="postcss">
</style>
