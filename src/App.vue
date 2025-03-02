<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import UseCases from './components/UseCases.vue'
import Pricing from './components/Pricing.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <UseCases />
    <Pricing />
    <Footer />
  </div>
</template>

<style>
</style>
