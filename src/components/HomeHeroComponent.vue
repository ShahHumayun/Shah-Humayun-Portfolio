<template>
  <section class="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6 lg:px-20 relative overflow-hidden">
    
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
      
      <div class="w-full lg:w-1/2 flex flex-col justify-center space-y-6 text-center lg:text-left">
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I am <span class="text-[#64ffda]">Shah Humayun</span>
        </h1>
        
        <p class="text-xl md:text-3xl font-medium text-gray-300 min-h-[40px]">
          I am a 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-blue-400 font-bold border-r-2 border-[#64ffda] dynamic-text">
            {{ currentRole }}
          </span>
        </p>

        <p class="text-gray-400 text-sm md:text-base max-w-md mx-auto lg:mx-0">
          Crafting responsive frontend experiences with clean code and fluid, interactive designs.
        </p>

        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <a 
            href="#contact" 
            class="px-8 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded hover:bg-[#64ffda]/90 transition-colors duration-300"
          >
            Hire me
          </a>
          <a 
            href="#projects" 
            class="px-8 py-3 bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 font-semibold rounded transition-colors duration-300"
          >
            Projects
          </a>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center items-center">
        <img 
          :src="portfolioImage.image" 
          alt="Shah Humayun" 
          class="rounded-2xl w-76 h-76 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] object-contain border-white/10 shadow-2xl"
          loading="lazy"
          decoding="async"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const getPortfolioImage = (fileName) => {
  return new URL(`../assets/${fileName}`, import.meta.url).href
}

const portfolioImage = ref({
  id: 1, 
  image: getPortfolioImage('MY-IMAGE.JPG') 
})

const words = ['Web Designer', 'Web Developer']
const currentRole = ref('')
let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const currentWord = words[wordIndex]
  
  if (isDeleting) {
    currentRole.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentRole.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  let typingSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1500 
    isDeleting = true
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length 
    typingSpeed = 500 
  }

  setTimeout(typeEffect, typingSpeed)
}

onMounted(() => {
  typeEffect()
})
</script>

<style scoped>
.dynamic-text {
  animation: blink 0.7s infinite;
}
@keyframes blink {
  0%, 100% { border-color: transparent }
  50% { border-color: #64ffda }
}
</style>