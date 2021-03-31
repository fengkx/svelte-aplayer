import * as path from 'path';
import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/Aplayer.svelte'),
      name: 'Aplayer'
    },
    rollupOptions: {
      output: {
        format: 'iife'
      }
    }
  },
  plugins: [
      svelte()
  ]
})
