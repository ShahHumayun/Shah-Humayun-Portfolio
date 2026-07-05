<template>
  <section class="py-20 bg-[#0a192f] text-white px-6 lg:px-20 border-t border-white/5">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center mb-20">
        <span class="text-[#64ffda] font-mono text-sm tracking-wider">Showcase</span>
        <h2 class="text-3xl md:text-5xl font-bold mt-2">Project Spotlight</h2>
      </div>

      <!-- Projects Stack Container -->
      <div class="space-y-32">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          :class="[
            'flex flex-col lg:items-center gap-12 group',
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          ]"
        >
          <!-- Image Column -->
          <div class="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-white/5 bg-[#0a1224] shadow-xl">
            <a :href="project.liveLink" target="_blank" rel="noopener noreferrer" class="block overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
              />
            </a>
          </div>

          <!-- Content Details Column -->
          <div class="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] text-xs rounded-full font-mono border border-[#64ffda]/10"
              >
                {{ tag }}
              </span>
            </div>
            
            <h3 class="text-2xl md:text-4xl font-extrabold tracking-tight group-hover:text-[#64ffda] transition-colors duration-300">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              {{ project.description }}
            </p>
            
            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4 pt-4">
              <!-- Dynamically uses project.liveLink. Set to target="_blank" to open cleanly in a new window -->
              <a 
                :href="project.liveLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-6 py-2.5 bg-[#64ffda] text-[#0a192f] font-bold rounded-lg hover:bg-[#64ffda]/90 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-[#64ffda]/5"
              >
                Live Demo
              </a>
              <a 
                :href="project.repoLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-6 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'WebHive Technologies Agency Platform',
    description: 'A premium agency platform built utilizing advanced UI architectures, sleek dark configurations, and fluid micro-interactions for elite digital presentation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200',
    tags: ['Vue 3', 'GSAP', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://your-username.github.io/webhive', // Change these strings anytime!
    repoLink: 'https://github.com/your-username/webhive'
  },
  {
    id: 2,
    title: 'Instagram Creative Clone Ecosystem',
    description: 'A responsive reconstruction of the Instagram interface layout. Focusing on pixel-perfect component architecture, custom interactive modals, fluid feeds, and responsive asset handling.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200',
    tags: ['Vue 3', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
    liveLink: 'https://your-username.github.io/instagram-clone', // Ready for your link deployment
    repoLink: 'https://github.com/your-username/instagram-clone'
  }
])
</script>