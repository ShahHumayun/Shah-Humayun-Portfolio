<template>
  <section class="main-hero">
    <Header />
    <HomeHeroComponent />
    <BentoGrid />
    <ProjectSpotlight />
    <HomePageCTA />
    <HomeFooter />
  </section>
</template>

<script setup>
import Header from '../components/Header.vue'
import HomeHeroComponent from '../components/HomeHeroComponent.vue'
import BentoGrid from '../components/BentoGrid.vue';
import ProjectSpotlight from '../components/ProjectSpotlight.vue';
import HomePageCTA from '../components/HomePageCTA.vue';
import HomeFooter from '../components/HomeFooter.vue';
</script>

<style scoped>
.main-hero {
  /* Clean vanilla CSS configuration */
  background-color: #0a192f;
  min-height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
}

/* 
  Targeting your HomeHeroComponent directly inside the wrapper.
  This creates a safe margin gap so your content starts cleanly 
  below the floating header.
*/
.main-hero > :nth-child(2) {
  padding-top: 100px; /* Accounts for header height + top floating space */
}

@media (max-width: 768px) {
  .main-hero > :nth-child(2) {
    padding-top: 90px; /* Margins narrowed down slightly for responsive mobile screens */
  }
}
</style>