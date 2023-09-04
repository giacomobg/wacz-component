import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://giacomobg.github.io/wacz-component/",
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
})
