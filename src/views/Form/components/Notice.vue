<template>
  <n-collapse>
    <n-collapse-item title="注意事項與說明" name="1">
      <n-alert type="info">
        如果要插入程式碼區塊，請先在下方新增程式碼區塊<br />
        {{ section1 }}<br />
        {{ section2 }}<br />
        注意 : 號與編號之間需有空格<br /><br />
        圖片最多3張，只允許網址，若圖片非網路來源<br />
        請先將圖片上傳至任意網空<br /><br />

        總文字數不得超過 2000 字 ( Discord 訊息上限 )
      </n-alert>
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
import { NAlert, NCollapse, NCollapseItem } from 'naive-ui/es'

const section1 = `在訊息中使用: {{{code: 編號}}} 的語法，將編號替換對應下方程式碼區塊的數字`
const section2 = `例如: {{{code: 1}}}、{{{code: 2}}}`
</script>

<style></style>
