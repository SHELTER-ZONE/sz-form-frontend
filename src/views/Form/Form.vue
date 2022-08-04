<template>
  <main>
    <div class="text-left">
      <FormInfo :formData="{}" />

      <section class="section-block">
        <p>內容</p>
        <hr class="divider" />
        <DCTextEditor
          @update="handleContentUpdate"
          :preViewData="compactFormData.content"
        />
      </section>

      <ImageInput class="section-block" @add="handleImagesUpdate" />
      <CodeInput class="section-block" @add="handleCodeBlocksUpdate" />

      <n-button
        class="my-30px w-full"
        strong
        tertiary
        round
        type="primary"
        size="large"
      >
        提交
      </n-button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { NButton } from 'naive-ui/es'
import FormInfo from './components/FormInfo.vue'
import ImageInput from './components/ImageInput.vue'
import CodeInput from './components/CodeInput.vue'
import DCTextEditor from '@/components/DCTextEditor.vue'
import Handlebars from 'handlebars'

const formData = reactive({
  content: '',
  images: [],
  codeBlocks: [],
})

Handlebars.registerHelper('code:', function (index: string) {
  const codeBlock: any = formData.codeBlocks[Number(index) - 1]
  if (codeBlock) return `\`\`\`${codeBlock.lang}\n${codeBlock.code}\n\`\`\``
  return ''
})

const compactFormData = computed(() => ({
  content: compileContent(),
  imgs: formData.images.map((i) => i.ref),
}))

const compileContent = () => {
  try {
    return Handlebars.compile(formData.content)()
  } catch (error) {
    return formData.content
  }
}

const handleContentUpdate = (content: string) => {
  formData.content = content
}

const handleImagesUpdate = (imagesList: string[]) => {
  formData.images = imagesList
}

const handleCodeBlocksUpdate = (codeBlocksList) => {
  formData.codeBlocks = codeBlocksList
}
</script>

<style scoped lang="postcss">
h1 {
  @apply text-xl font-bold py-12px;
}

p {
  @apply text-base py-12px;
}

h2 {
  @apply text-lg font-medium py-12px pt-45px;
}
</style>
