import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://giacomobg.github.io/wacz-component/dist",
  plugins: [
    svelte({
      include: ["src/**/*.svelte"],
      exclude: ["src/App.svelte"],
    }),
    svelte({
      include: ["src/App.svelte"],
      compilerOptions: {
        customElement: true
      }
    })
  ],
})
