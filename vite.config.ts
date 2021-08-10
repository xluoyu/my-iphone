import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'
// const base = process.env.NODE_ENV == 'production' ? '/my-iphone' : './'
import pxtorem from 'postcss-pxtorem'
const base = './'

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './types')
    }
  },
  css: {
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
  ],
  server: {
    port: 8080,
    open: true
  }
})
