<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  value?: string | number
  trend?: {
    value: string
    type: 'up' | 'down' | 'neutral'
  }
}>()
</script>

<template>
  <div class="card glass glass-interactive">
    <!-- Card Header -->
    <div class="card-header">
      <div class="card-info">
        <span v-if="subtitle" class="card-subtitle">{{ subtitle }}</span>
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <!-- Icon Slot -->
      <div v-if="$slots.icon" class="card-icon">
        <slot name="icon" />
      </div>
    </div>

    <!-- Main Value and Trend -->
    <div v-if="value !== undefined || $slots.default" class="card-body">
      <div v-if="value !== undefined" class="value-container">
        <span class="card-value">{{ value }}</span>
        <span
          v-if="trend"
          class="trend-indicator"
          :class="`trend-${trend.type}`"
        >
          <svg
            v-if="trend.type === 'up'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="trend-arrow"
          >
            <path fill-rule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clip-rule="evenodd" />
          </svg>
          <svg
            v-if="trend.type === 'down'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="trend-arrow"
          >
            <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
          </svg>
          {{ trend.value }}
        </span>
      </div>
      <slot />
    </div>

    <!-- Card Footer -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0;
}

.card-subtitle {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--primary-glow);
  color: var(--primary);
  border: 1px solid var(--border);
}

.card-body {
  flex-grow: 1;
}

.value-container {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.card-value {
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1;
  color: var(--text-primary);
}

.trend-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}

.trend-up {
  color: hsl(142, 70%, 45%);
  background: hsla(142, 70%, 45%, 0.1);
}

.trend-down {
  color: hsl(350, 70%, 50%);
  background: hsla(350, 70%, 50%, 0.1);
}

.trend-neutral {
  color: var(--text-secondary);
  background: var(--border);
}

.trend-arrow {
  width: 14px;
  height: 14px;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
}
</style>
