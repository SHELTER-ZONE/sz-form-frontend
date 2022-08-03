<template>
  <main>
    <div class="text-left">
      <h1>SZ Form</h1>
      <h2>1day-1knowledge</h2>
      <p>SZ Form Description</p>

      <section class="section-block">
        <p>內容</p>
        <hr class="divider" />
        <DCTextEditor />
      </section>

      <section>
        <CodeBlockInput />
        <CodeBlockInput />
      </section>

      <section class="section-block">
        <p>圖片</p>
        <hr class="divider" />
        <sz-image
          v-for="item in ImagesList"
          :key="`img-${item.index}`"
          v-model:data="item.ref"
          :index="item.index"
          @remove="removeImage($event)"
        />

        <n-button
          v-if="imagesCount < 3"
          class="text-gray-400 mt-[10px]"
          ghost
          size="large"
          @click="
            addImage({
              index: imagesCount,
              ref: null,
            })
          "
        >
          <template #icon>
            <n-icon>
              <add-icon />
            </n-icon>
          </template>
          新增圖片
        </n-button>
      </section>

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
import { Add as AddIcon } from '@vicons/carbon'
import { NButton, NIcon } from 'naive-ui/es'
import SzImage from '@/components/SzImage.vue'
import CodeBlockInput from '@/components/CodeBlockInput.vue'
import DCTextEditor from '@/components/DCTextEditor.vue'
import { useDynamicList } from '@/use/dynamicList'

const {
  itemCount: imagesCount,
  itemList: ImagesList,
  addItem: addImage,
  removeItem: removeImage,
} = useDynamicList({ max: 3 })
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
