<template>
  <section class="code-input">
    <p>程式碼區塊</p>
    <hr class="divider" />

    <div class="code-block-list">
      <CodeBlockInput
        v-for="item in codeBlockList"
        :key="`img-${item.index}`"
        v-model:code="item.code"
        v-model:lang="item.lang"
        :index="item.index"
        @remove="removeCodeBlock"
      />
    </div>

    <n-button
      class="text-gray-400 mt-[10px]"
      ghost
      size="large"
      @click="handleAddCodeBlock"
    >
      <template #icon>
        <n-icon>
          <add-icon />
        </n-icon>
      </template>
      新增程式碼區塊
    </n-button>
  </section>
</template>

<script setup lang="ts">
import CodeBlockInput from '@/components/CodeBlockInput.vue'
import { watch } from 'vue'
import { Add as AddIcon } from '@vicons/carbon'
import { NButton, NIcon } from 'naive-ui/es'
import { useDynamicList } from '@/use/dynamicList'

const emit = defineEmits(['add'])

const {
  itemCount: codeBlockCount,
  itemList: codeBlockList,
  addItem: addCodeBlock,
  removeItem: removeCodeBlock,
} = useDynamicList({ max: 0 })

watch(codeBlockList, (list) => emit('add', list), { deep: true })

const handleAddCodeBlock = () => {
  addCodeBlock({
    index: codeBlockCount.value,
    code: '',
    lang: 'js',
  })
}
</script>

<style scoped lang="postcss">
.code-block-list {
  @apply flex flex-col gap-[12px];
}
</style>
