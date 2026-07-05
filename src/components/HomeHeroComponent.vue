<template>
  <section class="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6 lg:px-20 relative overflow-hidden">
    
    <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
      
<div class="w-full lg:w-1/2 flex flex-col justify-center space-y-6 pb-16 lg:pb-0 text-center lg:text-left">
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

      <!-- Welcome Speech Bubble Popup -->
      <Transition name="bubble-fade">
        <div v-if="showWelcomeBubble && !isChatOpen" class="chat-welcome-bubble" @click="showWelcomeBubble = false">
          <span>👋 Hi! Have any questions? Chat with me!</span>
          <div class="bubble-arrow"></div>
        </div>
      </Transition>

      <!-- Floating chat widget -->
      <button
        class="chat-fab"
        @click="toggleChat"
        :aria-label="isChatOpen ? 'Close chat' : 'Open chat'"
      >
        <svg v-if="!isChatOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.16-3.02-.457L3 21l1.5-4.5C3.55 15.163 3 13.632 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <Transition name="chat-pop">
        <div v-if="isChatOpen" class="chat-popup">
          <button class="chat-popup-close" @click="isChatOpen = false" aria-label="Close chat">✕</button>
          <ChatBot variant="popup" />
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import ChatBot from '../components/ChatBot.vue'

const isChatOpen = ref(false)
const showWelcomeBubble = ref(false)
let bubbleTimeout = null

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
  if (isChatOpen.value) {
    showWelcomeBubble.value = false
  }
}

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
  
  // Show welcome text popup 1.5 seconds after loading the page
  setTimeout(() => {
    if (!isChatOpen.value) {
      showWelcomeBubble.value = true
    }
  }, 1500)

  // Automatically hide the speech bubble after 6 seconds
  bubbleTimeout = setTimeout(() => {
    showWelcomeBubble.value = false
  }, 7500)
})

onUnmounted(() => {
  clearTimeout(bubbleTimeout)
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

/* ── Welcome Speech Bubble ── */
.chat-welcome-bubble {
  position: fixed;
  bottom: clamp(84px, 4vw + 64px, 96px);
  right: clamp(16px, 4vw, 28px);
  background: #00ffa3;                  /* Updated color */
  color: #0a192f;                       /* Dark text for contrast against bright green */
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;                     /* Made bold for easy reading */
  max-width: 260px;
  box-shadow: 0 10px 25px rgba(0, 255, 163, 0.25);
  z-index: 945;
  cursor: pointer;
  user-select: none;
  animation: floatBubble 3s ease-in-out infinite;
}

.bubble-arrow {
  position: absolute;
  bottom: -6px;
  right: 22px;
  width: 12px;
  height: 12px;
  background: #00ffa3;                  /* Updated color */
  transform: rotate(45deg);
}

@keyframes floatBubble {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* Bubble Transitions */
.bubble-fade-enter-active,
.bubble-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.bubble-fade-enter-from,
.bubble-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

/* ── Floating Chat Widget ── */
.chat-fab {
  position: fixed;
  bottom: clamp(16px, 4vw, 28px);
  right: clamp(16px, 4vw, 28px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: #00ffa3;                  /* Updated background color */
  color: #0a192f;                       /* Dark icon color for clean readability */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 950;
  box-shadow: 0 8px 24px rgba(0, 255, 163, 0.35); /* Soft, matching neon glow */
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.chat-fab:hover { 
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 28px rgba(0, 255, 163, 0.5);
}
.chat-fab:active { transform: scale(0.95); }

.chat-popup {
  position: fixed;
  bottom: clamp(84px, 12vh, 100px);
  right: clamp(16px, 4vw, 28px);
  width: min(380px, calc(100vw - 32px));
  height: min(400px, calc(100dvh - 140px));
  z-index: 940;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.chat-popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.chat-popup-close:hover { background: rgba(255, 255, 255, 0.2); }

.chat-pop-enter-active,
.chat-pop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.chat-pop-enter-from,
.chat-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.96);
}

@media (max-width: 480px) {
  .chat-popup {
    left: 16px;
    right: 16px;
    width: auto;
  }
}
</style>