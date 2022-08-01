<template>
  <main class="page-padding">
    <div class="common-width text-left">
      <h1>
        SZ Form
      </h1>
      <h2>
        1day-1knowledge
      </h2>
      <p>
        SZ Form Description
      </p>
      <sz-editor />
      <sz-image
        v-for="(item, index) in szImageComponents"
        :id="item.id"
        :key="item.index"
        :ref="(el: InstanceType<typeof SzImage>) => { item.ref = el }"
        :index="index"
        :close="removeSzImage"
      />
      <n-button v-if="szImageComponents.length < 3" class="my-30px text-gray-400" ghost size="large" @click="addSzImage">
        <template #icon>
          <n-icon>
            <add-icon />
          </n-icon>
        </template>
        新增圖片
      </n-button>
      <n-button class="my-30px w-full" strong tertiary round type="primary" size="large">
        提交
      </n-button>
      <sz-footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Add as AddIcon } from '@vicons/carbon'
import { ref  } from 'vue'
import { NButton, NIcon } from 'naive-ui/es'
import SzImage from '@/components/SzImage.vue'
import SzEditor from '@/components/SzEditor.vue'
import SzFooter from '@/components/SzFooter.vue'

const szImageIdCounter = ref(0)
const szImageComponents = ref([] as {
  index: number
  id: string
  ref: InstanceType<typeof SzImage>
}[])

const addSzImage = async () => {
  if (szImageComponents.value.length >= 3) {
    return
  }

  szImageComponents.value.push({
    index: szImageComponents.value.length,
    id: (szImageIdCounter.value++).toString(),
    ref: null
  })
}

const removeSzImage = async (id: String) => {
  // Remove selected component
  szImageComponents.value = szImageComponents.value.filter(item => item.id !== id)
  // Refresh index
  szImageComponents.value.forEach((item, index) => {
    item.ref.imageIndex = index + 1
  })
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
