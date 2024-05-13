<!-- App.vue -->
<template>
    <div>
      <!-- Responsive Menu Button -->
      <button @click="toggleMenu" class="lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></button>
  
      <!-- Responsive Menu -->
      <div v-if="isMenuOpen" class="lg:hidden">
        <ul class="bg-gray-800 text-white">
          <li><a href="#" class="block py-2 px-4">Home</a></li>
          <li><a href="#" class="block py-2 px-4">About</a></li>
          <li><a href="#" class="block py-2 px-4">Contact</a></li>
        </ul>
      </div>
  
      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center justify-end">
        <a href="#" class="p-4" @click="toggleDropdown">Home
          <ul v-show="isDropdownOpen">
          <li><a href="">Dropdowon</a></li>
          <li><a href="">Dropdowon</a></li>
          <li><a href="">Dropdowon</a></li>
          <li><a href="">Dropdowon</a></li>
          <li><a href="">Dropdowon</a></li>
          <li><a href="">Dropdowon</a></li>
          <li><a href="">Dropdowon</a></li>
          </ul>
        </a>
        <a href="#" class="p-4">About</a>
        <a href="#" class="p-4">Contact</a>
        <router-link to="/test" class="p-4">Test</router-link>
      </nav>
    </div>
    
  </template>
  
  <script>
  export default {
     data() {
      return {
        isMenuOpen: false,
        isDropdownOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
       
      },
      toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    },
  };
  </script>
  
  <style scoped>
  /* Add additional styling if needed */
  </style>
  