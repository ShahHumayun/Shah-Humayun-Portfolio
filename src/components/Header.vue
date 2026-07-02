<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[1000] flex justify-center pt-4 px-5 box-border">
    <div 
      class="w-full max-w-[1180px] flex items-center justify-between py-4 px-7 rounded-2xl bg-[#0a192f] border-none shadow-none relative transition-all duration-300"
    >
      <!-- SHAH HUMAYUN ITALIC MONOSPACE BOLD LOGO (INCREASED SIZE) -->
      <router-link 
        to="/" 
        @click="closeMenu"
        class="font-mono text-3xl font-black italic tracking-wide text-white select-none z-10"
      >
        DevFolio
      </router-link>

      <!-- HAMBURGER BUTTON (WHITE) -->
      <button
        class="md:hidden flex flex-col justify-center items-center gap-1.5 w-[30px] h-[30px] bg-transparent border-none cursor-pointer z-10 p-0"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span 
          class="block w-6 h-0.5 bg-white rounded-sm transition-transform duration-300 ease-in-out"
          :class="{ 'translate-y-[8px] rotate-45': isOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-white rounded-sm transition-opacity duration-300 ease-in-out"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-white rounded-sm transition-transform duration-300 ease-in-out"
          :class="{ '-translate-y-[8px] -rotate-45': isOpen }"
        ></span>
      </button>

      <!-- NAVIGATION LINKS WITH RED HOVER & ACTIVE STATES -->
      <ul 
        class="flex items-center gap-4 m-0 p-0 list-none transition-all duration-350 ease-in-out
               max-md:absolute max-md:top-[calc(100%+12px)] max-md:left-0 max-md:w-full max-md:flex-col max-md:items-start max-md:gap-0 
               max-md:bg-[#0a192f] max-md:border-none max-md:rounded-2xl max-md:overflow-hidden"
        :class="isOpen ? 'max-md:max-h-[400px] max-md:opacity-100 max-md:py-5 max-md:px-6' : 'max-md:max-h-0 max-md:opacity-0 max-md:py-0 max-md:px-6'"
      >
        <li class="max-md:w-full max-md:py-1 max-md:border-b max-md:border-slate-800/30">
          <router-link 
            to="/" 
            @click="closeMenu" 
            class="font-mono text-lg font-bold text-white px-4 py-2 rounded-lg block transition-colors duration-200 hover:bg-red-600"
            exact-active-class="bg-red-600"
          >Home</router-link>
        </li>
        <li class="max-md:w-full max-md:py-1 max-md:border-b max-md:border-slate-800/30">
          <router-link 
            to="/about" 
            @click="closeMenu" 
            class="font-mono text-lg font-bold text-white px-4 py-2 rounded-lg block transition-colors duration-200 hover:bg-red-600"
            exact-active-class="bg-red-600"
          >About</router-link>
        </li>
        <li class="max-md:w-full max-md:py-1 max-md:border-b max-md:border-slate-800/30">
          <router-link 
            to="/services" 
            @click="closeMenu" 
            class="font-mono text-lg font-bold text-white px-4 py-2 rounded-lg block transition-colors duration-200 hover:bg-red-600"
            exact-active-class="bg-red-600"
          >Services</router-link>
        </li>
        <li class="max-md:w-full max-md:py-1 max-md:border-b max-md:border-slate-800/30">
          <router-link 
            to="/project" 
            @click="closeMenu" 
            class="font-mono text-lg font-bold text-white px-4 py-2 rounded-lg block transition-colors duration-200 hover:bg-red-600"
            exact-active-class="bg-red-600"
          >Projects</router-link>
        </li>
        <li class="max-md:w-full max-md:py-1 max-md:last:border-none">
          <router-link 
            to="/contact" 
            @click="closeMenu" 
            class="font-mono text-lg font-bold text-white px-4 py-2 rounded-lg block transition-colors duration-200 hover:bg-red-600"
            exact-active-class="bg-red-600"
          >Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>