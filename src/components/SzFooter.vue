<template>
  <a href="https://shelter-zone.github.io/sz-single-entrance/#/">
    <n-space class="footer" align="center" justify="center">
      <n-icon class="block">
        <discord-icon />
      </n-icon>
      SHELTER ZONE
    </n-space>
  </a>
</template>

<script setup lang="ts">
import { Discord as DiscordIcon } from '@vicons/fa'
import { defineComponent } from 'vue'
import { NSpace, NIcon } from 'naive-ui/es'

defineComponent({
  components: {
    DiscordIcon,
  },
})
</script>

<style scoped lang="postcss">
.footer {
  @apply w-full left-0 bottom-0 py-30px  h-[75px] mt-[50px];
  @apply text-secondary-1 bg-primary-2;
}
</style>
