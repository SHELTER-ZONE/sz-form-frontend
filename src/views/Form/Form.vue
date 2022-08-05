<template>
  <main>
    <div class="text-left">
      <FormInfo :formData="formDetail" />

      <section class="section-block">
        <p>內容</p>
        <hr class="divider" />
        <p>
          編譯後字數:
          <span
            class="text-secondary-1"
            :class="{ 'text-danger-1': contentWordCount >= maxWordCount }"
          >
            {{ contentWordCount }}
          </span>
          <span> / {{ maxWordCount }}</span>
        </p>
        <DCTextEditor
          @update="handleContentUpdate"
          :preViewData="compactFormData.content"
        />
      </section>

      <CodeInput class="section-block" @add="handleCodeBlocksUpdate" />
      <ImageInput class="section-block" @add="handleImagesUpdate" />

      <n-button
        class="my-30px w-full"
        strong
        tertiary
        round
        type="primary"
        size="large"
        :disabled="!canSubmit"
        :loading="sendingForm"
        @click="submitForm"
      >
        提交
      </n-button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { NButton, useMessage } from 'naive-ui/es'
import FormInfo from './components/FormInfo.vue'
import ImageInput from './components/ImageInput.vue'
import CodeInput from './components/CodeInput.vue'
import DCTextEditor from '@/components/DCTextEditor.vue'
import Handlebars from 'handlebars'
import { SubmitForm } from '@/api/form'
import { useAppStore } from '@/store'
import { find } from 'lodash-es'
import { useRoute } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()
const message = useMessage()
const formKey = computed(() => route.params.formKey)
const formDetail = computed(() =>
  find(appStore.formsList, { key: formKey.value })
)
const sendingForm = ref<boolean>(false)
const formData = reactive({
  content: '',
  images: [],
  codeBlocks: [],
})

const minWordCount = 10
const maxWordCount = 2000

const compactFormData = computed(() => ({
  content: compileContent(),
  imgs: formData.images.map((i) => i.ref),
}))

const contentWordCount = computed(() => {
  const content = compactFormData.value.content
  if (!content) return 0
  return content.length
})

const canSubmit = computed(() => {
  if (contentWordCount.value < minWordCount) return false
  if (contentWordCount.value >= maxWordCount) return false
  return true
})

Handlebars.registerHelper('code:', function (index: string) {
  const codeBlock: any = formData.codeBlocks[Number(index) - 1]
  if (codeBlock) {
    if (codeBlock.code)
      return `\`\`\`${codeBlock.lang}\n${codeBlock.code}\n\`\`\``
  }
  return ''
})

const compileContent = () => {
  try {
    const content = Handlebars.compile(formData.content)()
    // const imgs = formData.images.map((i) => i.ref).join('\n')
    return content
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

const submitForm = async () => {
  sendingForm.value = true
  const [, err] = await SubmitForm({
    formKey: formKey.value,
    ...compactFormData.value,
  })
  if (err) message.error(err)
  sendingForm.value = false
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
