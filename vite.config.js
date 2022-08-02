import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { fileURLToPath } from 'url'
const path = require('path')
import { resolve } from 'path'
const srcPath = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  server: {
    host: '0.0.0.0',
    port: 8088 //指定端口号
  },

  resolve: {
    // 配置别名
    alias: {
      '@': resolve('./src')
    }
  }
})
