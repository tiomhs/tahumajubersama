<template>
  <section class="relative py-12 md:py-24 overflow-hidden bg-brand-cream dark:bg-brand-dark/20 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Copywriting Column -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-lightgreen text-brand-green border border-brand-green/20">
            <span class="w-2 h-2 rounded-full bg-brand-green animate-pulse"/>
            Segar Diproduksi Setiap Hari
          </span>
          
          <h1 class="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-darkgold dark:text-white leading-tight">
            Tahu Putih Tradisional Klungkung, <span class="text-brand-green dark:text-brand-gold">Segar Setiap Pagi</span> Sejak 1995
          </h1>
          
          <p class="text-brand-gray dark:text-white/70 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
            Dibuat dari biji kedelai pilihan kualitas terbaik dan air pegunungan murni Bali. Tekstur ekstra lembut, padat, dan dijamin 100% tanpa pengawet kimia. Siap diantar hangat-hangat langsung dari tungku kami.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a 
              href="https://wa.me/6287815848998?text=Halo%20Tahu%20Maju%2C%20saya%20ingin%20memesan%20Tahu%20Putih%20Tradisional%20sekarang." 
              target="_blank" 
              rel="noopener" 
              class="inline-flex justify-center items-center px-8 py-4 bg-brand-green text-white font-heading font-extrabold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-95 transform hover:-translate-y-0.5 transition duration-150 gap-2"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 5.358 1.473 5.388 0 9.773-4.382 9.776-9.768.002-2.61-1.015-5.064-2.862-6.914C17.072 2.1 14.624.965 12.01.965c-5.385 0-9.77 4.382-9.773 9.768-.001 2.102.508 3.791 1.496 5.485L2.78 21.22l5.067-1.33zM16.518 13.5c-.3-.15-1.776-.877-2.046-.975-.27-.1-.466-.15-.662.15-.197.3-.761.96-.933 1.157-.172.2-.344.225-.644.075-.3-.15-1.267-.467-2.413-1.49-1.258-1.12-1.748-2.64-1.848-2.815-.1-.176-.01-.271.078-.359.08-.079.177-.208.266-.312.09-.104.119-.177.178-.295.06-.118.03-.223-.015-.323-.045-.1-.466-1.123-.638-1.54-.168-.407-.333-.351-.466-.358-.12-.006-.258-.007-.396-.007-.138 0-.363.052-.553.26-.191.208-.727.712-.727 1.735 0 1.023.743 2.01 8.46 2.01.096 0 1.844-.249 2.501-.989.658-.74.658-1.238.658-1.385s-.088-.249-.388-.399z"/>
              </svg>
              Pesan Sekarang
            </a>
            <a href="#tentang" class="inline-flex justify-center items-center px-8 py-4 border border-brand-darkgold/30 dark:border-white/30 text-brand-darkgold dark:text-white font-heading font-semibold text-lg rounded-xl hover:bg-brand-darkgold/5 transition duration-150">
              Kisah Kami
            </a>
          </div>
          
          <div class="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-brand-gray dark:text-white/50">
            <span class="flex items-center gap-1"><span class="text-brand-green dark:text-brand-gold font-bold">✓</span> COD Area Klungkung</span>
            <span class="flex items-center gap-1"><span class="text-brand-green dark:text-brand-gold font-bold">✓</span> Pagi Buta Selalu Siap</span>
          </div>
        </div>
        
        <!-- Image Column with Steam Representation -->
        <div class="lg:col-span-5 relative">
          <div class="absolute -inset-1 bg-gradient-to-tr from-brand-gold to-brand-green rounded-3xl blur opacity-30"/>
          <div class="relative bg-brand-dark rounded-3xl overflow-hidden shadow-2xl border border-brand-darkgold/20 dark:border-white/10">
            <img 
              src="/images/pabrik_tahu.png" 
              alt="Produksi Tahu Putih Klungkung yang Mengeluarkan Uap Hangat Alami" 
              class="w-full h-[450px] object-cover opacity-85 hover:scale-105 transition duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"/>
            
            <!-- Steam Overlay effect simulated with visual HTML elements -->
            <div class="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span class="bg-brand-gold text-brand-darkgold text-xs font-bold px-2.5 py-1 rounded">Foto Asli Tahu Kami</span>
              <p class="font-heading font-semibold text-lg leading-tight">Uap panas dari proses pencetakan tradisional di pabrik kami Desa Sampalan Tengah.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
