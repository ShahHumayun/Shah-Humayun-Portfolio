<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section class="not-found">
    <p class="code">404</p>
    <h1>Page not found</h1>
    <p class="msg">The page you're looking for doesn't exist or has moved.</p>
    <button class="home-btn" @click="router.push('/')">Back to Home</button>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: #0a0c0c;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
}

.code {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 90px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #00ffa3, #00c97f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  margin: 10px 0;
}

.msg {
  color: rgba(245, 245, 245, 0.6);
  margin-bottom: 30px;
}

.home-btn {
  padding: 12px 28px;
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 163, 0.4);
  background: rgba(0, 255, 163, 0.08);
  color: #00ffa3;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.home-btn:hover {
  background: rgba(0, 255, 163, 0.15);
  box-shadow: 0 0 16px rgba(0, 255, 163, 0.25);
}
</style>