<template>
  <n-alert :show-icon="false">
    <n-select v-model:value="lang" :options="langs" />
    <div>
      {{ lang }}
    </div>
    <button @click="showEditor = !showEditor">toggle</button>
    <prism-editor
      v-if="showEditor"
      class="my-editor"
      v-model="code"
      :highlight="highlighter"
      line-numbers
    ></prism-editor>
  </n-alert>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { NSelect, NAlert, NInput } from 'naive-ui/es'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

const code = ref('')
const lang = ref('js')
const a = computed(() => languages)
const showEditor = ref(false)

const highlighter = (code) => {
  return highlight(code, languages[lang.value]) // languages.<insert language> to return html with markup
}

const langs = [
  {
    label: 'None',
    value: '',
  },
  {
    label: 'HTML',
    value: 'html',
  },
  {
    label: 'Javascript',
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
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
