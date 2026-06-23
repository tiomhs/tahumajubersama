<script setup lang="ts">
import { ref, computed } from 'vue'
import { blogPosts } from '~/data/posts'

// SEO optimization
useSeoMeta({
  title: 'Blog & Edukasi Kuliner Tahu Klungkung - Tahu Putih Segar Alami',
  description: 'Kumpulan artikel edukatif, khasiat kesehatan kedelai murni, dan kreasi resep hidangan tahu putih tradisional Bali dari Pabrik Tahu Klungkung.',
  ogTitle: 'Blog & Edukasi Kuliner Tahu Klungkung',
  ogDescription: 'Kumpulan artikel edukatif, khasiat kesehatan kedelai murni, dan kreasi resep hidangan tahu putih tradisional Bali dari Pabrik Tahu Klungkung.',
  ogImage: '/images/pabrik_tahu.png',
  twitterCard: 'summary_large_image',
})

const categories = ['Semua', 'Kesehatan', 'Kuliner', 'Edukasi'] as const
const selectedCategory = ref<string>('Semua')

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return blogPosts
  }
  return blogPosts.filter(post => post.category === selectedCategory.value)
})

const setCategory = (category: string) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-brand-cream dark:bg-brand-dark/20 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      
      <!-- Blog Header -->
      <header class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-lightgreen text-brand-green border border-brand-green/20 dark:bg-brand-green/20 dark:text-brand-lightgreen">
          📚 Edukasi & Informasi
        </span>
        <h1 class="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-brand-darkgold dark:text-white leading-tight">
          Kabar & Resep <span class="text-brand-green dark:text-brand-gold">Tahu Klungkung</span>
        </h1>
        <p class="text-brand-gray dark:text-white/70 text-lg">
          Temukan tips kesehatan kedelai, rahasia dapur pembuatan tahu tradisional kami, hingga resep kuliner khas Bali terlezat untuk keluarga Anda.
        </p>
      </header>

      <!-- Category Navigation Filter -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="setCategory(cat)"
          class="font-heading font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 border"
          :class="[
            selectedCategory === cat
              ? 'bg-brand-green text-white border-brand-green shadow-md dark:bg-brand-gold dark:text-brand-dark dark:border-brand-gold scale-105'
              : 'bg-white dark:bg-brand-dark text-brand-gray dark:text-white/70 border-brand-darkgold/10 dark:border-white/10 hover:border-brand-green/30 dark:hover:border-brand-gold/30 hover:bg-brand-cream dark:hover:bg-brand-dark/80'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Articles Grid -->
      <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in filteredPosts" 
          :key="post.slug"
          class="group bg-white dark:bg-brand-dark rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-darkgold/10 dark:border-white/10 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1.5"
        >
          <!-- Image Wrapper -->
          <NuxtLink :to="`/blog/${post.slug}`" class="relative block overflow-hidden aspect-video bg-neutral-200">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <!-- Category Badge -->
            <span 
              class="absolute top-4 left-4 px-3 py-1 text-xs font-heading font-bold rounded-lg shadow-sm"
              :class="[
                post.category === 'Kesehatan' ? 'bg-brand-lightgreen text-brand-green border border-brand-green/20' :
                post.category === 'Kuliner' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                'bg-blue-100 text-blue-800 border border-blue-200'
              ]"
            >
              {{ post.category }}
            </span>
          </NuxtLink>

          <!-- Content Area -->
          <div class="p-6 flex flex-col flex-grow">
            <!-- Time and Date Metadata -->
            <div class="flex items-center gap-3 text-xs text-brand-gray/60 dark:text-white/40 mb-3">
              <span>{{ post.date }}</span>
              <span class="w-1.5 h-1.5 rounded-full bg-brand-darkgold/30 dark:bg-white/20" />
              <span>{{ post.readTime }}</span>
            </div>

            <!-- Title -->
            <h2 class="font-heading font-bold text-xl text-brand-darkgold dark:text-white group-hover:text-brand-green dark:group-hover:text-brand-gold transition-colors duration-200 line-clamp-2 mb-3 leading-snug">
              <NuxtLink :to="`/blog/${post.slug}`">
                {{ post.title }}
              </NuxtLink>
            </h2>

            <!-- Excerpt -->
            <p class="text-brand-gray/80 dark:text-white/60 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
              {{ post.excerpt }}
            </p>

            <!-- Bottom Action & Author -->
            <div class="pt-4 border-t border-brand-darkgold/5 dark:border-white/5 flex items-center justify-between mt-auto">
              <span class="text-xs font-semibold text-brand-gray/70 dark:text-white/50">
                Oleh {{ post.author }}
              </span>
              <NuxtLink 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 text-sm font-heading font-bold text-brand-green dark:text-brand-gold hover:opacity-85 transition-opacity"
              >
                Baca Artikel
                <svg 
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- No Posts Found Fallback -->
      <div v-else class="text-center py-16 bg-white dark:bg-brand-dark rounded-2xl border border-brand-darkgold/10 dark:border-white/10 max-w-lg mx-auto">
        <span class="text-4xl block mb-4">🔎</span>
        <h3 class="font-heading font-bold text-lg text-brand-darkgold dark:text-white mb-1">Artikel Tidak Ditemukan</h3>
        <p class="text-brand-gray dark:text-white/70 text-sm">Maaf, saat ini belum ada artikel pada kategori ini.</p>
      </div>

    </div>
  </div>
</template>
