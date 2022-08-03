import { ref, computed } from 'vue'

// max=0 代表無最大上限
export const useDynamicList = ({ max }: { max: number }) => {
  const itemList = ref<any[]>([])
  const itemCount = computed(() => itemList.value.length)

  const refreshItem = () => {
    itemList.value.forEach((item, index) => (item.index = index))
  }

  const addItem = (item: any) => {
    if (max > 0 && itemList.value.length >= max) return
    itemList.value.push(item)
    refreshItem()
  }

  const removeItem = (itemIndex: number) => {
    itemList.value = itemList.value.filter((item, index) => index !== itemIndex)
    refreshItem()
  }

  return {
    itemCount,
    itemList,
    addItem,
    removeItem,
  }
}
