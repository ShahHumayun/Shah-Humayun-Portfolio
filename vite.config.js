// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })



import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), tailwindcss()],
    // If we are in 'development' mode, use root '/'
    // If we are in 'production' mode (for GitHub), use your exact repository name
    base: mode === 'production' ? '/Shah-Humayun-Portfolio/' : '/',
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  }
})