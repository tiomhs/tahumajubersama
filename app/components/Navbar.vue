<script setup lang="ts">
import { ref } from 'vue'

const isMobileOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-brand-cream/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-brand-darkgold/10 dark:border-white/10 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="text-3xl" role="img" aria-label="Tofu Soup">🍲</span>
          <span class="font-heading font-extrabold text-2xl tracking-tight text-brand-darkgold dark:text-white">
            Tahu<span class="text-brand-green dark:text-brand-gold">Maju</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#beranda" class="font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold transition-colors">Beranda</a>
          <a href="#keunggulan" class="font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold transition-colors">Keunggulan</a>
          <a href="#tentang" class="font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold transition-colors">Kisah Kami</a>
          <a href="#produk" class="font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold transition-colors">Produk & Layanan</a>
          <a href="#proses" class="font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold transition-colors">Proses</a>
          <a href="#kontak" class="font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold transition-colors">Kontak</a>
        </nav>

        <!-- Right Hand Actions -->
        <div class="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="https://wa.me/6287815848998?text=Halo%20Tahu%20Maju%2C%20saya%20tertarik%20untuk%20memesan%20tahu%20putih%20segar%20Anda." 
            target="_blank" 
            rel="noopener" 
            class="bg-brand-green dark:bg-brand-gold text-white dark:text-brand-dark font-heading font-bold px-5 py-2.5 rounded-lg shadow-md hover:bg-opacity-90 transform hover:-translate-y-0.5 transition duration-150 text-sm"
          >
            Hubungi Kami
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button 
            class="text-brand-darkgold dark:text-white focus:outline-none p-1" 
            aria-label="Toggle menu"
            :aria-expanded="isMobileOpen"
            @click="toggleMobileMenu"
          >
            <svg 
              v-if="!isMobileOpen" 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="isMobileOpen" class="md:hidden bg-brand-cream dark:bg-brand-dark border-b border-brand-darkgold/10 dark:border-white/10 px-4 pt-2 pb-6 space-y-3">
        <a href="#beranda" class="block font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold py-1" @click="isMobileOpen = false">Beranda</a>
        <a href="#keunggulan" class="block font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold py-1" @click="isMobileOpen = false">Keunggulan</a>
        <a href="#tentang" class="block font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold py-1" @click="isMobileOpen = false">Kisah Kami</a>
        <a href="#produk" class="block font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold py-1" @click="isMobileOpen = false">Produk & Layanan</a>
        <a href="#proses" class="block font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold py-1" @click="isMobileOpen = false">Proses Produksi</a>
        <a href="#kontak" class="block font-heading font-medium text-brand-gray dark:text-white/70 hover:text-brand-green dark:hover:text-brand-gold py-1" @click="isMobileOpen = false">Kontak & Lokasi</a>
        
        <div class="pt-2 border-t border-brand-darkgold/10 dark:border-white/10">
          <a 
            href="https://wa.me/6287815848998?text=Halo%20Tahu%20Maju%2C%20saya%20tertarik%20untuk%20memesan%20tahu%20putih%20segar%20Anda." 
            target="_blank" 
            rel="noopener" 
            class="block text-center w-full bg-brand-green dark:bg-brand-gold text-white dark:text-brand-dark font-heading font-bold py-3 rounded-lg shadow"
          >
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
