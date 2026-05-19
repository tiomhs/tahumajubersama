<script setup lang="ts">
const { isDark } = useTheme()

// SSR-Safe HTML Attribute binding.
// Updates the <html> class to 'dark' dynamically so that global CSS variables adapt.
useHead({
  htmlAttrs: {
    class: computed(() => isDark.value ? 'dark' : '')
  }
})
</script>

<template>
  <div class="layout-wrapper">
    <!-- Header / Navbar -->
    <header class="navbar-header glass">
      <div class="container nav-container">
        <NuxtLink to="/" class="nav-logo">
          <span class="logo-emoji">🍲</span>
          <span class="logo-text">Tahu<span class="text-gradient">Maju</span></span>
        </NuxtLink>

        <nav class="nav-links">
          <NuxtLink to="/" class="nav-link" active-class="active">Dashboard</NuxtLink>
          <NuxtLink to="/about" class="nav-link" active-class="active">About Boilerplate</NuxtLink>
        </nav>

        <div class="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>

    <!-- Main Content Body -->
    <main class="layout-main">
      <div class="container page-container">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="layout-footer glass">
      <div class="container footer-container">
        <p class="copyright">© 2026 Tahu Maju Bersama. Built with Nuxt 4 Best Practices.</p>
        <div class="footer-links">
          <a href="https://nuxt.com/docs" target="_blank" rel="noopener" class="footer-link">Nuxt Docs</a>
          <span class="divider">•</span>
          <a href="https://vuejs.org" target="_blank" rel="noopener" class="footer-link">Vue 3</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar styles */
.navbar-header {
  position: sticky;
  top: 1.5rem;
  margin: 0 auto;
  width: calc(100% - 3rem);
  max-width: 1200px;
  z-index: 50;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.logo-emoji {
  font-size: 1.5rem;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 60%;
}

.nav-link.active {
  color: var(--primary);
  font-weight: 600;
}

.nav-link.active::after {
  width: 80%;
  background: var(--primary);
}

.nav-actions {
  display: flex;
  align-items: center;
}

/* Main Area */
.layout-main {
  flex-grow: 1;
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  z-index: 10;
}

.page-container {
  display: flex;
  flex-direction: column;
}

/* Footer styles */
.layout-footer {
  margin-top: auto;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  padding: 1.5rem 0;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
  }
}

.copyright {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
}

.footer-link {
  color: var(--text-secondary);
}

.footer-link:hover {
  color: var(--primary);
}

.divider {
  color: var(--text-muted);
  user-select: none;
}
</style>
