<template>
  <footer class="footer">
    <a
      href="https://shelter-zone.github.io/sz-single-entrance/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <n-space align="center" justify="center">
        <n-icon class="block" size="20">
          <discord-icon />
        </n-icon>
        SHELTER ZONE
      </n-space>
    </a>

    <n-divider vertical class="<md:(!hidden)" />

    <div class="text-left px-[10px]">
      <n-divider class="!mt-[10px] md:hidden" />
      <b><p class="mb-[10px] font-700">Developer</p></b>
      <div class="flex gap-[20px]">
        <div class="flex flex-col gap-[5px]">
          <a
            href="https://github.com/Proladon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Proladon#7525
              <span>(Fullstack)</span>
            </p>
          </a>

          <a
            href="https://github.com/irvine1231"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Irvine#8850 <span>(Frontend)</span></p>
          </a>
        </div>

        <a
          href="https://github.com/Xzihnago"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="flex flex-col gap-[5px]">
            <p>星曌#4316 <span>(Backend)</span></p>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { LogoDiscord as DiscordIcon } from '@vicons/carbon'
import { NSpace, NIcon, NDivider } from 'naive-ui/es'
</script>

<style scoped lang="postcss">
.footer {
  @apply w-full left-0 bottom-0 py-[20px] mt-[50px];
  @apply bg-primary-2;
  @apply flex justify-center items-center gap-[8px];
  @apply <md:(flex-col);

  p {
    @apply p-0 text-[12px];
  }
}
</style>
