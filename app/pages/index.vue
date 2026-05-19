<script setup lang="ts">
// Data fetching from our server-side API route.
// Nuxt handles this isomorphically (runs on server for SSR, fetches client-side during SPA navigation).
const { data: info, error, pending } = await useFetch('/api/info')

// Client-side statistics or interactivity
const localCounter = ref(0)
const increment = () => {
  localCounter.value++
}
</script>

<template>
  <div class="dashboard-page animate-fade-in">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="hero-title">Nuxt 4 Best Practice Boilerplate</h1>
      <p class="hero-tagline">
        A premium starter template pre-configured with ESLint Flat configs,
        Vanilla CSS variables, SSR-safe Dark Mode, and modular layouts.
      </p>
    </section>

    <!-- Diagnostics Grid -->
    <div class="metrics-grid">
      <!-- Card 1: System Status -->
      <DashboardCard
        title="Server Status"
        subtitle="Operational Health"
        :value="info?.status ?? 'Checking...'"
        :trend="{ value: 'Stable', type: 'up' }"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </template>
        <template #footer>
          <div class="card-footer-info">
            <span>Engine: <strong>{{ info?.serverEngine ?? 'Nitro' }}</strong></span>
          </div>
        </template>
      </DashboardCard>

      <!-- Card 2: Environment -->
      <DashboardCard
        title="Environment"
        subtitle="System Context"
        :value="info?.environment === 'development' ? 'Local' : 'Staging'"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
        </template>
        <template #footer>
          <div class="card-footer-info">
            <span>Target: <strong>{{ info?.framework ?? 'Nuxt 4' }}</strong></span>
          </div>
        </template>
      </DashboardCard>

      <!-- Card 3: Interactive State -->
      <DashboardCard
        title="Client State"
        subtitle="Interactive Composable"
        :value="localCounter"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.303-.553-1.591 1.59m2.542 4.406-2.25-.75M3.75 12h2.25m-.553 5.303 1.59-1.59m-4.406 2.542.75-2.25M12 21.75V19.5m-5.303.553 1.591-1.59m-2.542-4.406 2.25.75" />
          </svg>
        </template>
        <template #footer>
          <button class="btn btn-primary btn-sm" @click="increment">Test Auto-Import State</button>
        </template>
      </DashboardCard>
    </div>

    <!-- Details Section -->
    <div class="details-layout">
      <!-- Left Box: Framework Checklist -->
      <section class="diagnostic-box glass">
        <h2 class="section-title">Core Setup Diagnostics</h2>
        <p class="section-desc">Fetched in real-time from server routes via isomorphic fetch.</p>

        <div v-if="pending" class="loading-state">
          <div class="spinner"/>
          <span>Loading server details...</span>
        </div>

        <div v-else-if="error" class="error-state">
          <span>Failed to connect to backend endpoint.</span>
        </div>

        <ul v-else class="diagnostic-list">
          <li v-for="feature in info?.features" :key="feature.id" class="diagnostic-item">
            <span class="status-indicator" :class="{ 'status-active': feature.status }"/>
            <span class="feature-label">{{ feature.label }}</span>
            <span class="badge">Standard</span>
          </li>
        </ul>
      </section>

      <!-- Right Box: Guide -->
      <section class="info-guide-box glass">
        <h2 class="section-title">Boilerplate Best Practices</h2>
        <div class="guide-steps">
          <div class="guide-step">
            <div class="step-num">1</div>
            <div class="step-content">
              <h4>Convention Over Configuration</h4>
              <p>Keep pages in <code>app/pages/</code> and layouts in <code>app/layouts/</code> to let Nuxt generate routing structures automatically.</p>
            </div>
          </div>

          <div class="guide-step">
            <div class="step-num">2</div>
            <div class="step-content">
              <h4>Modular UI Tokens</h4>
              <p>Use global design variables inside <code>app/assets/css/main.css</code>. Toggle themes at root level by updating the <code>html.dark</code> tag.</p>
            </div>
          </div>

          <div class="guide-step">
            <div class="step-num">3</div>
            <div class="step-content">
              <h4>Strict Linting Rules</h4>
              <p>Execute <code>npm run lint</code> (or ESLint commands) to validate compliance with Vue 3 compiler directives and modern ESM flat-config structures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Hero styling */
.hero-section {
  text-align: center;
  max-width: 800px;
  margin: 1rem auto 0.5rem auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.25rem;
  }
}

.hero-tagline {
  font-size: 1.15rem;
  color: var(--text-secondary);
}

/* Grid Layout */
.metrics-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.icon-svg {
  width: 20px;
  height: 20px;
}

.card-footer-info {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  border-radius: var(--radius-sm);
}

/* Details Section Layout */
.details-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 992px) {
  .details-layout {
    grid-template-columns: 1fr 1fr;
  }
}

.diagnostic-box,
.info-guide-box {
  padding: 2rem;
}

.section-title {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.section-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

/* Diagnostics checklist */
.diagnostic-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.diagnostic-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--bg-primary);
  border: 1px solid var(--border);
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: hsl(0, 0%, 60%);
}

.status-active {
  background: hsl(142, 70%, 45%);
  box-shadow: 0 0 8px hsl(142, 70%, 45%);
}

.feature-label {
  font-size: 0.95rem;
  font-weight: 500;
  flex-grow: 1;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  background: var(--primary-glow);
  color: var(--primary);
  border-radius: 4px;
}

/* Spinner / Loading */
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem 0;
  color: var(--text-secondary);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-state {
  padding: 2rem 0;
  text-align: center;
  color: hsl(350, 70%, 50%);
}

/* Right side guide styling */
.guide-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.guide-step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.step-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.step-content p {
  font-size: 0.88rem;
}

code {
  background: var(--bg-primary);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-family: monospace;
  color: var(--primary);
  border: 1px solid var(--border);
}
</style>
