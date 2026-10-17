
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="site-shell">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
