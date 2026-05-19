<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle glass"
    :class="{ 'is-dark': isDark }"
    aria-label="Toggle visual theme"
    @click="toggleTheme"
  >
    <div class="icon-wrapper">
      <!-- Sun Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="sun-icon"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      <!-- Moon Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="moon-icon"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </div>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
}

.theme-toggle:hover {
  transform: scale(1.05) rotate(5deg);
  border-color: var(--primary);
  box-shadow: 0 0 12px var(--primary-glow);
}

.icon-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  stroke: var(--text-primary);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.4s ease;
}

/* Animations for Sun and Moon */
.sun-icon {
  opacity: 1;
  transform: rotate(0) scale(1);
}

.moon-icon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.2);
}

/* Dark mode class states */
.is-dark .sun-icon {
  opacity: 0;
  transform: rotate(90deg) scale(0.2);
}

.is-dark .moon-icon {
  opacity: 1;
  transform: rotate(0) scale(1);
  stroke: var(--primary);
}
</style>
