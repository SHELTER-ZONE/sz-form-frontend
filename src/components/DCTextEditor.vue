<template>
  <div class="dc-editor">
    <n-tabs type="segment">
      <n-tab-pane name="edit" tab="訊息編輯">
        <n-input
          v-model:value="content"
          type="textarea"
          placeholder="請輸入內容"
          :autosize="{
            minRows: 3,
          }"
          :on-update:value="updateContent"
        />
      </n-tab-pane>
      <n-tab-pane name="preview" tab="編譯預覽">
        <n-alert :show-icon="false">
          <code>
            <n-scrollbar x-scrollable>
              <pre class="min-h-[50px]">{{ preViewData }}</pre>
            </n-scrollbar>
          </code>
        </n-alert>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NInput, NAlert, NScrollbar } from 'naive-ui/es'
import { ref } from 'vue'

const emit = defineEmits(['update'])
defineProps({
  preViewData: { type: [String, null], required: true },
})
const content = ref('')

const updateContent = (value: string) => {
  content.value = value
  emit('update', value)
}
</script>

<style scoped lang="postcss"></style>
