import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import { rollupOptions } from './vite.config'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.essential.ts'),
      name: 'VuePdfEmbed',
      fileName: 'index.essential',
      formats: ['es'],
    },
    rollupOptions,
  },
})
