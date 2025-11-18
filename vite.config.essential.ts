import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rollupOptions } from './vite.config'
import path from 'path'

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
