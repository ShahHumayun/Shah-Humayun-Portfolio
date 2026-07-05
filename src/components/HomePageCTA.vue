<template>
  <section class="py-24 bg-[#0a192f] text-white px-6 lg:px-20 text-center relative overflow-hidden border-t border-white/5">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#64ffda]/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto max-w-3xl relative z-10 flex flex-col items-center space-y-6">
      <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight max-w-xl">
        Let's build something beautiful together.
      </h2>
      <p class="text-gray-400 max-w-md mx-auto text-sm md:text-base">
        Seeking an elegant, interactive frontend solution or full-stack web application? Let's connect and map out the concept.
      </p>
      
      <div class="pt-4 flex flex-wrap gap-4 justify-center">
        <a 
          href="/contact" 
          class="px-8 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded hover:bg-[#64ffda]/90 transition-all duration-300 shadow-lg shadow-[#64ffda]/10"
        >
          Get In Touch
        </a>
        <a 
          href="/services" 
          class="px-8 py-3 bg-transparent border border-white/20 hover:border-[#64ffda] text-white hover:text-[#64ffda] font-semibold rounded transition-all duration-300"
        >
          View Services
        </a>
      </div>
    </div>
  </section>
</template>