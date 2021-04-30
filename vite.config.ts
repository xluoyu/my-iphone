import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './types')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import (reference) "${path.resolve('src/styles/variables.less')}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`
          }
        }
      ]
    })
  ]
})
