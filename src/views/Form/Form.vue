<template>
  <main>
    <n-spin :show="pageLoading">
      <div class="text-left">
        <FormInfo :formData="formDetail" />
        <section class="section-block">
          <p>內容</p>
          <hr class="divider" />
          <Notice />

          <DCTextEditor
            class="mt-[20px]"
            :preViewData="compactFormData.content"
            @update="handleContentUpdate"
          />
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
        </section>

        <CodeInput class="section-block" @add="handleCodeBlocksUpdate" />
        <ImageInput class="section-block" @add="handleImagesUpdate" />

        <n-button
          v-if="!submitCooling && countDone"
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

        <CoolDownButton
          v-if="submitCooling && !countDone"
          :seconds="(coolDownLeft('form') as number)"
          btnText="下一步"
          :active="true"
          @done=";(countDone = true), (submitCooling = false)"
        />
      </div>
    </n-spin>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { NButton, useMessage, NSpin } from 'naive-ui/es'
import CoolDownButton from '@/components/CoolDownButton.vue'
import FormInfo from './components/FormInfo.vue'
import Notice from './components/Notice.vue'
import ImageInput from './components/ImageInput.vue'
import CodeInput from './components/CodeInput.vue'
import DCTextEditor from '@/components/DCTextEditor.vue'
import Handlebars from 'handlebars'
import { SubmitForm, FindForm } from '@/api/form'
import { useRoute, useRouter } from 'vue-router'
import { useCoolDown } from '@/use/coolDown'

const route = useRoute()
const router = useRouter()
const message = useMessage()
const { inCoolDown, startCoolDown, coolDownLeft } = useCoolDown()
const formKey = computed(() => route.params.formKey || '')

const submitCooling = ref(false)
const countDone: any = ref<boolean>(true)
const pageLoading = ref(true)
const formDetail = ref({})
const sendingForm = ref<boolean>(false)
const formData: any = reactive({
  content: '',
  images: [],
  codeBlocks: [],
})

const minWordCount = 10
const maxWordCount = 2000

const compactFormData = computed(() => ({
  content: compileContent(),
  imgs: formData.images.map((i: any) => i.ref),
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
    const content = Handlebars.compile(formData.content)({})
    const imgs = formData.images.map((i: any) => i.ref).join('\n')
    if (imgs) return `${content}\n${imgs}`
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

const handleCodeBlocksUpdate = (codeBlocksList: any[]) => {
  formData.codeBlocks = codeBlocksList
}

const findForm = async () => {
  const [res, err]: any = await FindForm({ formKey: formKey.value as string })
  if (err) return message.error(err)
  formDetail.value = res
}

const submitForm = async () => {
  sendingForm.value = true
  const [, err]: any = await SubmitForm({
    formKey: formKey.value as string,
    ...compactFormData.value,
  })
  if (err) message.error(err)
  sendingForm.value = false
  startCoolDown('form', 5)
  router.push({ name: 'LandingPage' })
}

onMounted(async () => {
  pageLoading.value = true
  await findForm()
  if (inCoolDown('form')) {
    countDone.value = false
    submitCooling.value = true
  }
  pageLoading.value = false
})
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
