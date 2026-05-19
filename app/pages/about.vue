<template>
  <div class="about-page animate-fade-in">
    <!-- Hero Section -->
    <section class="about-hero">
      <h1 class="about-title">Technical Specifications</h1>
      <p class="about-tagline">
        Understanding the directory structure, configurations, and performance optimization rules utilized in this project.
      </p>
    </section>

    <!-- Architecture details -->
    <div class="about-grid">
      <!-- File structure outline -->
      <section class="structure-card glass">
        <h2 class="section-title">Directory Mapping</h2>
        <p class="section-desc">We follow the official Nuxt 4 standard, keeping public-facing assets separate from system assets and backend controllers.</p>
        
        <div class="structure-visual">
          <div class="dir-item"><span class="icon">📁</span> <strong>tahumajubersama/</strong> <span class="muted">(root)</span></div>
          <div class="dir-item indent-1"><span class="icon">📁</span> <strong>app/</strong> <span class="muted">(Frontend context source)</span></div>
          <div class="dir-item indent-2"><span class="icon">📁</span> <strong>assets/</strong> <span class="muted">(Global CSS system, styles, fonts)</span></div>
          <div class="dir-item indent-2"><span class="icon">📁</span> <strong>components/</strong> <span class="muted">(Auto-imported Vue components)</span></div>
          <div class="dir-item indent-2"><span class="icon">📁</span> <strong>composables/</strong> <span class="muted">(Auto-imported state helpers)</span></div>
          <div class="dir-item indent-2"><span class="icon">📁</span> <strong>layouts/</strong> <span class="muted">(Reusable wrappers)</span></div>
          <div class="dir-item indent-2"><span class="icon">📁</span> <strong>pages/</strong> <span class="muted">(File-based page routing)</span></div>
          <div class="dir-item indent-1"><span class="icon">📁</span> <strong>public/</strong> <span class="muted">(Untranspiled files served at /)</span></div>
          <div class="dir-item indent-1"><span class="icon">📁</span> <strong>server/</strong> <span class="muted">(Nitro server endpoints & middleware)</span></div>
          <div class="dir-item indent-2"><span class="icon">📁</span> <strong>api/</strong> <span class="muted">(Server side routers)</span></div>
          <div class="dir-item indent-1"><span class="icon">📄</span> <strong>nuxt.config.ts</strong> <span class="muted">(Core configuration file)</span></div>
          <div class="dir-item indent-1"><span class="icon">📄</span> <strong>eslint.config.mjs</strong> <span class="muted">(Modern ESM flat linter settings)</span></div>
        </div>
      </section>

      <!-- Best Practices details -->
      <section class="details-card glass">
        <h2 class="section-title">Boilerplate Best Practices</h2>
        <div class="points-list">
          <div class="point-item">
            <h4 class="point-headline">1. SSR-Safe Dark Mode State</h4>
            <p>Instead of local state which causes layout flicker, we persist theme preference in cookies. This permits Nuxt Nitro to write classes on the server-side before sending the template to the client.</p>
          </div>
          
          <div class="point-item">
            <h4 class="point-headline">2. Prefix-Based Autoloading</h4>
            <p>Vue components inside nested directories are resolved relative to their folder namespaces. <code>components/dashboard/Card.vue</code> resolves as <code>&lt;DashboardCard /&gt;</code> without requiring manual registration.</p>
          </div>

          <div class="point-item">
            <h4 class="point-headline">3. Isomorphic Data Handlers</h4>
            <p>Data fetching is handled with <code>useFetch</code> which acts isomorphically: fetching on the server during first load, then transitioning to standard client-side fetches for client-side routing.</p>
          </div>

          <div class="point-item">
            <h4 class="point-headline">4. Head Meta & SEO Optimization</h4>
            <p>Global meta values (descriptions, keywords, fonts) are pre-injected in <code>nuxt.config.ts</code>. Individual pages can override headers with <code>useHead</code> or <code>useSeoMeta</code>.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Back Call to Action -->
    <div class="back-footer">
      <NuxtLink to="/" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="btn-arrow">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to Dashboard
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Hero Section */
.about-hero {
  text-align: center;
  max-width: 800px;
  margin: 1rem auto 0.5rem auto;
}

.about-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2.25rem;
  }
}

.about-tagline {
  font-size: 1.15rem;
  color: var(--text-secondary);
}

/* Grid layout */
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 992px) {
  .about-grid {
    grid-template-columns: 4fr 5fr;
  }
}

.structure-card,
.details-card {
  padding: 2rem;
}

.section-title {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.section-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

/* Structure visual tree */
.structure-visual {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
}

.dir-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.indent-1 {
  padding-left: 1.5rem;
}

.indent-2 {
  padding-left: 3rem;
}

.icon {
  user-select: none;
}

.muted {
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* Detail points */
.points-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.point-item h4 {
  font-size: 1.05rem;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.point-item p {
  font-size: 0.88rem;
  line-height: 1.5;
}

/* Call to Action */
.back-footer {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.btn-arrow {
  width: 16px;
  height: 16px;
}
</style>
