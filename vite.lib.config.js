import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/lib.js',
      name: 'MyLibrary',
    }
  },
  plugins: [svelte({
    compilerOptions:{
      customElement: true
    }
  })]
})