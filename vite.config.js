import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
// https://vitejs.dev/config/
const path = require('path')

export default defineConfig({
  plugins: [vue(),electron({
    main: {
      entry: 'electron/main.js'
    }
  })],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})

