<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center py-2">
          <div class="text-2xl font-bold text-cofco-primary">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span>中粮智能</span>
            </span>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-700 hover:text-cofco-primary font-medium py-4">产品特点</a>
          <a href="#usecases" class="text-gray-700 hover:text-cofco-primary font-medium py-4">应用场景</a>
          <a href="#pricing" class="text-gray-700 hover:text-cofco-primary font-medium py-4">价格方案</a>
          <a href="#contact" class="bg-cofco-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
            立即试用
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4">
        <a href="#features" class="block py-4 text-gray-700 hover:text-cofco-primary">产品特点</a>
        <a href="#usecases" class="block py-4 text-gray-700 hover:text-cofco-primary">应用场景</a>
        <a href="#pricing" class="block py-4 text-gray-700 hover:text-cofco-primary">价格方案</a>
        <a href="#contact" class="block py-2 mt-3 bg-cofco-primary text-white px-4 rounded-md hover:bg-opacity-90 transition-all w-full text-center">
          立即试用
        </a>
      </div>
    </div>
  </nav>
</template> 