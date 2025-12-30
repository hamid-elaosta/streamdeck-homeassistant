import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import path from 'path'
import RestartOpenDeck from './src/vite/RestartOpenDeck.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteYaml(),
    RestartOpenDeck(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-external',
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  build: {
    outDir: 'de.perdoctus.streamdeck.homeassistant.sdPlugin',
    rollupOptions: {
      input: {
        pi: 'pi.html',
        plugin: 'plugin.html'
      }
    }
  },
  base: './'
})
