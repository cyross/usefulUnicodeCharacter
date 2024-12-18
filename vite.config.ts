import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  build: {
    outDir: './docs'
  },
  base: '/usefulUnicodeCharacter/',
})
