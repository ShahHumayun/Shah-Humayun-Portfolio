<template>
  <footer 
    ref="footerElement"
    class="bg-[#071120] text-white pt-24 pb-12 px-6 lg:px-20 border-t border-white/5 relative overflow-hidden transition-all duration-1000 ease-out transform translate-y-8 opacity-0"
    :class="{ 'visible-footer': isVisible }"
  >
    <div class="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#64ffda]/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
        
        <div class="md:col-span-2 space-y-5">
          <div class="flex items-center gap-2 font-mono text-2xl font-extrabold tracking-tight">
            <span class="text-[#64ffda]">&lt;</span>Shah Humayun<span class="text-[#64ffda]">&#47;&gt;</span>
          </div>
          <p class="text-gray-300 font-medium text-sm max-w-sm leading-relaxed">
            Frontend Web Developer specializing in premium reactive architectures, responsive layout systems, and fluid interactive user interfaces.
          </p>
          <div class="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold font-mono shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-gray-200">Available for freelance & contract roles</span>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-bold tracking-widest text-[#64ffda] uppercase font-mono">Navigation</h4>
          <ul class="space-y-3 text-sm font-semibold text-gray-400">
            <li>
              <a href="/about" class="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300">About</a>
            </li>
            <li>
              <a href="/services" class="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300">Services</a>
            </li>
            <li>
              <a href="/projects" class="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300">Projects</a>
            </li>
            <li>
              <a href="/contact" class="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300">Contact</a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-bold tracking-widest text-[#64ffda] uppercase font-mono">Connected Hubs</h4>
          <ul class="space-y-3.5 text-sm font-semibold text-gray-400">
            <li>
              <a href="https://github.com/shah-humayun" target="_blank" rel="noopener noreferrer" class="hover:text-[#64ffda] flex items-center gap-2.5 transition-colors group">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
                <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs text-[#64ffda]">↗</span>
              </a>
            </li>
            
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#64ffda] flex items-center gap-2.5 transition-colors group">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                </svg>
                <span>LinkedIn</span>
                <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs text-[#64ffda]">↗</span>
              </a>
            </li>
            
            <li>
              <a href="mailto:your.email@gmail.com" class="hover:text-[#64ffda] flex items-center gap-2.5 transition-colors group">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Gmail</span>
                <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs text-[#64ffda]">↗</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold font-mono text-gray-500">
        <p>© 2026 Shah Humayun. All rights reserved.</p>
        <div class="flex gap-6">
          <span class="hover:text-gray-300 transition-colors cursor-default">Built with Vue 3 & Tailwind</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const footerElement = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(entry.target)
    }
  }, {
    threshold: 0.1
  })

  if (footerElement.value) {
    observer.observe(footerElement.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.visible-footer {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>