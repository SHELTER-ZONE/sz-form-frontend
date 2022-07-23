<template>
  <a href="https://shelter-zone.github.io/sz-single-entrance/#/">
    <n-space class="footer" size="large" align="center" justify="center">
      <img width="20" height="20" :src="discordImg">
      <span>SHELTER ZONE</span>
    </n-space>
  </a>
</template>

<script setup lang="ts">
import discordImg from '../assets/discord.png'
import { NSpace } from 'naive-ui/es'
</script>

<style scoped lang="postcss">

.footer {
  @apply fixed w-full left-0 bottom-0 py-30px;
  background-color: #D9D9D9;
}

span {
  @apply text-base font-normal;
}
</style>
