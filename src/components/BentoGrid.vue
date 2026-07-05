<template>
  <section class="py-20 bg-[#0a192f] text-white px-6 lg:px-20">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        <div class="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[#64ffda]/30 transition-all duration-300 group">
          <div class="mb-6">
            <span class="text-xs font-bold tracking-widest text-[#64ffda] uppercase">My Arsenal</span>
            <h3 class="text-2xl md:text-3xl font-bold mt-1">Tech Stack & Frameworks</h3>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full">
            <div v-for="(skill, index) in skills" :key="skill.name" class="w-full">
              <div class="flex justify-between items-center text-xs mb-1 font-medium tracking-wide text-gray-300">
                <span class="group-hover:text-white transition-colors duration-300">{{ skill.name }}</span>
                <span class="font-mono text-[#64ffda]">{{ skill.percentage }}%</span>
              </div>
              <div class="w-full h-1.5 bg-[#0a192f] rounded-full border border-white/5 overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r from-[#64ffda] to-teal-400 rounded-full transition-all ease-out shadow-[0_0_8px_rgba(100,255,218,0.3)]"
                  :style="{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDuration: '1200ms',
                    transitionDelay: `${index * 100}ms` 
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div class="mt-2"></div>
        </div>

        <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#64ffda]/30 transition-all duration-300 min-h-[180px]">
          <div>
            <span class="text-xs font-bold tracking-widest text-gray-400 uppercase">Performance</span>
            <h3 class="text-4xl font-extrabold text-[#64ffda] mt-2">100%</h3>
          </div>
          <p class="text-gray-400 text-sm mt-2">Responsive, pixel-perfect, and mobile-optimized application layouts.</p>
        </div>

        <div class="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-400/50 transition-all duration-300 group cursor-pointer min-h-[180px]">
          <p class="text-lg font-medium text-gray-200">Want to know more about my programming journey?</p>
          <a href="/about" class="text-[#64ffda] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 mt-4">
            Discover About Me <span>➔</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const skills = ref([
  { name: 'HTML, CSS & Tailwind', percentage: 95 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'Vue.js', percentage: 85 },
  { name: 'React', percentage: 75 },
  { name: 'jQuery', percentage: 80 },
  { name: 'MySQL', percentage: 70 }
])

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>