<script setup lang="ts">
import { computed } from 'vue'

const { isDark } = useTheme()

// SSR-Safe HTML Attribute binding.
// Updates the <html> class to 'dark' dynamically so Tailwind dark mode classes kick in.
useHead({
  htmlAttrs: {
    class: computed(() => isDark.value ? 'dark' : '')
  }
})
</script>

<template>
  <div class="min-h-screen bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300 flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
