<template>
  <section class="image-input">
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
      @click="handleAddImage"
    >
      <template #icon>
        <n-icon>
          <add-icon />
        </n-icon>
      </template>
      新增圖片
    </n-button>
  </section>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { Add as AddIcon } from '@vicons/carbon'
import { NButton, NIcon } from 'naive-ui/es'
import SzImage from '@/components/SzImage.vue'
import { useDynamicList } from '@/use/dynamicList'

const emit = defineEmits(['add'])

const {
  itemCount: imagesCount,
  itemList: ImagesList,
  addItem: addImage,
  removeItem: removeImage,
} = useDynamicList({ max: 3 })

watch(ImagesList, (list) => emit('add', list), { deep: true })

const handleAddImage = () => {
  addImage({
    index: imagesCount.value,
    ref: null,
  })
}
</script>

<style scoped lang="postcss"></style>
