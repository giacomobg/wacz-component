import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // when compiling for production, this is useful to make sure the links to index files are correct
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
