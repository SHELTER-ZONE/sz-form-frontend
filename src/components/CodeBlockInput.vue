<template>
  <div class="code-block-input">
    <n-select v-model:value="lang" :options="langs" />
    <prism-editor
      v-model="code"
      class="my-editor"
      :highlight="highlighter"
      line-numbers
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NSelect } from 'naive-ui/es'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-kotlin'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

const code = ref('')
const lang = ref('js')

const highlighter = (code: string) => {
  return highlight(code, languages[lang.value]) // languages.<insert language> to return html with markup
}

const langs = [
  {
    label: 'CSS',
    value: 'css',
  },
  {
    label: 'Javascript / HTML',
    value: 'js',
  },
  {
    label: 'Typescript',
    value: 'ts',
  },
  {
    label: 'Python',
    value: 'python',
  },
  {
    label: 'C',
    value: 'c',
  },
  {
    label: 'C#',
    value: 'cs',
  },
  {
    label: 'C++',
    value: 'cpp',
  },
  {
    label: 'Rust',
    value: 'rust',
  },
  {
    label: 'Kotlin',
    value: 'kt',
  },
  {
    label: 'Java',
    value: 'java',
  },
]
</script>

<style scoped lang="postcss">
.code-block-input {
  @apply border border-primary-1 rounded-md overflow-hidden;
}
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  @apply bg-primary-2 outline-none;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  @apply text-[14px] leading-[1.5] p-[5px];
}

/* optional class for removing the outline */

:deep(.prism-editor__textarea:focus) {
  outline: none !important;
}

:deep(.prism-editor__textarea:focus-within) {
  outline: none !important;
}
:deep(.prism-editor__textarea:focus-visible) {
  outline: none !important;
}
</style>
