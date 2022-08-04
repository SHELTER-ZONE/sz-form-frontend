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
        />
      </n-tab-pane>
      <n-tab-pane name="preview" tab="預覽"> 預覽 </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NInput } from 'naive-ui/es'
import { ref } from 'vue'

const content = ref('')
</script>

<style scoped lang="postcss"></style>
