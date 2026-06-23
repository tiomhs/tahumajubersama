<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { blogPosts } from '~/data/posts'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// Find current post
const post = computed(() => blogPosts.find(p => p.slug === slug))

// If post is not found, we can handle it or redirect
if (!post.value) {
  // Let Nuxt handle it by throwing a 404 error
  throw createError({ statusCode: 404, statusMessage: 'Artikel Tidak Ditemukan' })
}

// Generate related posts (same category first, excluding current post)
const relatedPosts = computed(() => {
  if (!post.value) return []
  const matches = blogPosts.filter(p => p.slug !== slug && p.category === post.value.category)
  if (matches.length >= 2) return matches.slice(0, 2)
  
  // Fill remaining slots with other posts if needed
  const others = blogPosts.filter(p => p.slug !== slug && p.category !== post.value.category)
  return [...matches, ...others].slice(0, 2)
})

// Dynamically set SEO Meta tags
useHead({
  title: computed(() => `${post.value?.title} - Pabrik Tahu Klungkung`),
  meta: [
    { name: 'description', content: computed(() => post.value?.excerpt) },
    // Open Graph
    { property: 'og:title', content: computed(() => `${post.value?.title} - Pabrik Tahu Klungkung`) },
    { property: 'og:description', content: computed(() => post.value?.excerpt) },
    { property: 'og:image', content: computed(() => post.value?.image) },
    { property: 'og:type', content: 'article' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => `${post.value?.title} - Pabrik Tahu Klungkung`) },
    { name: 'twitter:description', content: computed(() => post.value?.excerpt) },
    { name: 'twitter:image', content: computed(() => post.value?.image) }
  ]
})
</script>

<template>
  <div v-if="post" class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-brand-cream dark:bg-brand-dark/20 transition-colors duration-300">
    <div class="max-w-4xl mx-auto">
      
      <!-- Breadcrumbs & Back Navigation -->
      <nav class="flex items-center justify-between mb-8 text-sm" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3 text-brand-gray/60 dark:text-white/40">
          <li class="inline-flex items-center">
            <NuxtLink to="/" class="hover:text-brand-green dark:hover:text-brand-gold transition-colors">Beranda</NuxtLink>
          </li>
          <li>
            <div class="flex items-center">
              <span class="mx-2">/</span>
              <NuxtLink to="/blog" class="hover:text-brand-green dark:hover:text-brand-gold transition-colors">Blog</NuxtLink>
            </div>
          </li>
          <li class="hidden md:flex" aria-current="page">
            <div class="flex items-center">
              <span class="mx-2">/</span>
              <span class="text-brand-gray dark:text-white/60 font-semibold truncate max-w-[250px]">{{ post.title }}</span>
            </div>
          </li>
        </ol>

        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center gap-1.5 font-heading font-bold text-brand-green dark:text-brand-gold hover:opacity-80 transition-opacity"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Blog
        </NuxtLink>
      </nav>

      <!-- Main Article Card -->
      <article class="bg-white dark:bg-brand-dark rounded-3xl overflow-hidden shadow-lg border border-brand-darkgold/10 dark:border-white/10 p-6 sm:p-10 mb-12">
        
        <!-- Header Info -->
        <header class="space-y-4 mb-8">
          <span 
            class="inline-flex px-3 py-1 text-xs font-heading font-bold rounded-lg shadow-sm"
            :class="[
              post.category === 'Kesehatan' ? 'bg-brand-lightgreen text-brand-green border border-brand-green/20' :
              post.category === 'Kuliner' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
              'bg-blue-100 text-blue-800 border border-blue-200'
            ]"
          >
            {{ post.category }}
          </span>

          <h1 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-darkgold dark:text-white leading-tight">
            {{ post.title }}
          </h1>

          <!-- Meta Author & Date -->
          <div class="flex flex-wrap items-center gap-4 text-sm text-brand-gray/60 dark:text-white/40 pt-2 border-t border-brand-darkgold/5 dark:border-white/5">
            <div class="flex items-center gap-2">
              <span class="text-lg">✍️</span>
              <span class="font-semibold text-brand-gray dark:text-white/70">{{ post.author }}</span>
            </div>
            <span class="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-darkgold/30 dark:bg-white/20" />
            <div class="flex items-center gap-2">
              <span>📅 {{ post.date }}</span>
            </div>
            <span class="w-1.5 h-1.5 rounded-full bg-brand-darkgold/30 dark:bg-white/20" />
            <div class="flex items-center gap-2">
              <span>⏱️ {{ post.readTime }}</span>
            </div>
          </div>
        </header>

        <!-- Main Banner Image -->
        <div class="relative rounded-2xl overflow-hidden aspect-[21/9] mb-8 bg-neutral-100 shadow-inner">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Excerpt / Summary -->
        <p class="text-brand-gray/90 dark:text-white/80 font-medium text-lg leading-relaxed border-l-4 border-brand-green dark:border-brand-gold pl-4 mb-8 italic">
          {{ post.excerpt }}
        </p>

        <!-- HTML Article Content -->
        <div 
          v-html="post.content" 
          class="article-content text-brand-gray dark:text-white/80 leading-relaxed text-base md:text-lg space-y-6"
        />

        <!-- WhatsApp Call to Action Banner -->
        <div class="mt-12 p-6 sm:p-8 bg-brand-lightgreen/40 dark:bg-brand-darkgold/20 border border-brand-green/20 dark:border-brand-gold/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="font-heading font-bold text-xl text-brand-darkgold dark:text-white">Nikmati Tahu Putih Segar &amp; Sehat</h3>
            <p class="text-sm text-brand-gray dark:text-white/70 max-w-md">
              Kami memproduksi tahu putih murni hangat tanpa pengawet setiap hari sejak pukul 02:00 WITA. Siap kirim langsung ke tempat Anda!
            </p>
          </div>
          <a 
            :href="`https://wa.me/6287815848998?text=Halo%20Tahu%20Maju%2C%20saya%20baru%20saja%20membaca%20artikel%20'%20${encodeURIComponent(post.title)}%20'%20dan%20tertarik%20untuk%20memesan%20tahu%20segar%20Anda.`"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 px-6 py-3.5 bg-brand-green dark:bg-brand-gold text-white dark:text-brand-dark font-heading font-bold rounded-xl shadow-md hover:shadow-lg hover:bg-opacity-95 transform hover:-translate-y-0.5 transition duration-150 whitespace-nowrap text-base"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 5.358 1.473 5.388 0 9.773-4.382 9.776-9.768.002-2.61-1.015-5.064-2.862-6.914C17.072 2.1 14.624.965 12.01.965c-5.385 0-9.77 4.382-9.773 9.768-.001 2.102.508 3.791 1.496 5.485L2.78 21.22l5.067-1.33zM16.518 13.5c-.3-.15-1.776-.877-2.046-.975-.27-.1-.466-.15-.662.15-.197.3-.761.96-.933 1.157-.172.2-.344.225-.644.075-.3-.15-1.267-.467-2.413-1.49-1.258-1.12-1.748-2.64-1.848-2.815-.1-.176-.01-.271.078-.359.08-.079.177-.208.266-.312.09-.104.119-.177.178-.295.06-.118.03-.223-.015-.323-.045-.1-.466-1.123-.638-1.54-.168-.407-.333-.351-.466-.358-.12-.006-.258-.007-.396-.007-.138 0-.363.052-.553.26-.191.208-.727.712-.727 1.735 0 1.023.743 2.01 8.46 2.01.096 0 1.844-.249 2.501-.989.658-.74.658-1.238.658-1.385s-.088-.249-.388-.399z"/>
            </svg>
            Hubungi WhatsApp
          </a>
        </div>
      </article>

      <!-- Related Posts Section -->
      <section v-if="relatedPosts.length > 0" class="border-t border-brand-darkgold/10 dark:border-white/10 pt-12">
        <h2 class="font-heading font-bold text-2xl text-brand-darkgold dark:text-white mb-8 text-center sm:text-left">
          Artikel Terkait Lainnya
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <article 
            v-for="rel in relatedPosts" 
            :key="rel.slug"
            class="group bg-white dark:bg-brand-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-brand-darkgold/10 dark:border-white/10 transition-all duration-300 flex flex-col h-full"
          >
            <NuxtLink :to="`/blog/${rel.slug}`" class="relative block overflow-hidden aspect-video bg-neutral-200">
              <img 
                :src="rel.image" 
                :alt="rel.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span class="absolute top-4 left-4 px-2 py-0.5 text-xs font-heading font-bold rounded bg-white/90 dark:bg-brand-dark/90 text-brand-darkgold dark:text-brand-gold">
                {{ rel.category }}
              </span>
            </NuxtLink>

            <div class="p-5 flex flex-col flex-grow">
              <div class="text-xs text-brand-gray/60 dark:text-white/40 mb-2">
                <span>{{ rel.date }}</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-brand-darkgold dark:text-white group-hover:text-brand-green dark:group-hover:text-brand-gold transition-colors line-clamp-2 mb-4">
                <NuxtLink :to="`/blog/${rel.slug}`">
                  {{ rel.title }}
                </NuxtLink>
              </h3>
              <NuxtLink 
                :to="`/blog/${rel.slug}`" 
                class="mt-auto inline-flex items-center gap-1 text-sm font-heading font-bold text-brand-green dark:text-brand-gold hover:opacity-85 transition-opacity"
              >
                Baca Selengkapnya
                <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
/* Custom scoped typography styles to render raw HTML beautifully without relying on external plugins */
.article-content :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.article-content :deep(h3) {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.35rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.article-content :deep(ul), .article-content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.article-content :deep(strong) {
  font-weight: 700;
  color: var(--brand-darkgold);
}

html.dark .article-content :deep(strong) {
  color: var(--primary-hover);
}
</style>
