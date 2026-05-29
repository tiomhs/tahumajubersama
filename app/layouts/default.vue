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
  <div class="bg-brand-cream text-brand-dark font-sans leading-relaxed">
    <Navbar />
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
