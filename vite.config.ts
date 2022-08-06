import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve, join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  base: '/SHELTER-ZONE/sz-form-frontend/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
