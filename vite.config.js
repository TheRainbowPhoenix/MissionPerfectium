import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace';
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "static",
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './static')
    },
  },
})