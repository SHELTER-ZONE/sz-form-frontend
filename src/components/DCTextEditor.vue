<template>
  <div class="dc-editor">
    <n-tabs type="segment">
      <n-tab-pane name="edit" tab="編輯">
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
      <n-tab-pane name="preview" tab="預覽">
        <n-alert :show-icon="false">
          <code>
            <pre>{{ preViewData }}</pre>
          </code>
        </n-alert>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NInput, NAlert } from 'naive-ui/es'
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
