import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  return {
    plugins: [vue(), tailwindcss()],
    // Forcing the repository base path directly ensures both local previews and GitHub builds align
    base: '/Shah-Humayun-Portfolio/', 
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  }
})