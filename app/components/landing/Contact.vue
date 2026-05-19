<template>
  <section id="kontak" class="py-16 md:py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Contact info (Left) -->
        <div class="lg:col-span-5 space-y-8">
          <div class="space-y-2">
            <span class="text-brand-green dark:text-brand-gold font-heading font-extrabold tracking-wider text-sm uppercase">Kunjungi Pabrik Kami</span>
            <h2 class="font-heading font-bold text-3xl sm:text-4xl text-brand-darkgold dark:text-white">Hubungi &amp; Ambil Hangat</h2>
            <p class="text-brand-gray dark:text-white/70 text-sm">
              Hubungi admin kami lewat WhatsApp terlebih dahulu jika ingin mengambil langsung tahu hangat di pabrik agar kami siapkan kuotanya.
            </p>
          </div>

          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1" role="img" aria-label="Location marker">📍</span>
              <div>
                <h4 class="font-heading font-semibold text-brand-darkgold dark:text-white">Alamat Pabrik</h4>
                <p class="text-brand-gray dark:text-white/70 text-sm">
                  Jl. Arjuna, Kelurahan Banjar Grombong, Desa Sampalan Tengah, Kecamatan Dawan, Kabupaten Klungkung, Bali.
                </p>
              </div>
            </div>

            <!-- Operating Hours -->
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1" role="img" aria-label="Clock">🕒</span>
              <div>
                <h4 class="font-heading font-semibold text-brand-darkgold dark:text-white">Jam Operasional Produksi</h4>
                <p class="text-brand-gray dark:text-brand-gold text-sm font-semibold text-brand-green">
                  Pukul 23.10 WITA - 07.00 WITA (Buka Setiap Hari)
                </p>
                <p class="text-brand-gray dark:text-white/50 text-xs">
                  Pengambilan produk paling disarankan jam 04.00 - 06.00 pagi untuk tahu terhangat.
                </p>
              </div>
            </div>

            <!-- Contact -->
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1" role="img" aria-label="Phone">📞</span>
              <div>
                <h4 class="font-heading font-semibold text-brand-darkgold dark:text-white">Hubungi Kami (WhatsApp)</h4>
                <p class="text-brand-gray dark:text-white/70 text-sm font-semibold">
                  +62 812-3456-7890
                </p>
                <p class="text-brand-gray dark:text-white/50 text-xs">
                  Melayani konsultasi kerjasama pasokan harian.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Location Map Placeholder (Right) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="w-full h-96 rounded-2xl overflow-hidden border border-brand-darkgold/15 dark:border-white/10 bg-brand-cream dark:bg-brand-gray/10 relative shadow-inner">
            <!-- Embedded Interactive Google Maps Placeholder with high fidelity UI -->
            <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <span class="text-5xl" role="img" aria-label="Map icon">🗺️</span>
              <div class="space-y-1">
                <h4 class="font-heading font-bold text-brand-darkgold dark:text-white text-lg">Peta Lokasi Pabrik Klungkung</h4>
                <p class="text-brand-gray dark:text-white/50 text-xs max-w-sm mx-auto">Banjar Grombong, Sampalan Tengah. Klik untuk mendapatkan arah rute navigasi Google Maps langsung.</p>
              </div>
              <a 
                href="https://maps.google.com/?q=-8.5367,115.4267" 
                target="_blank" 
                rel="noopener" 
                class="bg-brand-darkgold dark:bg-brand-gold text-white dark:text-brand-dark font-heading font-semibold text-xs px-5 py-2.5 rounded-lg shadow hover:bg-opacity-90 transition"
              >
                Buka Rute Google Maps
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Big Conversion Call to Action Section -->
      <div class="mt-16 bg-gradient-to-tr from-brand-darkgold to-brand-green rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none"/>
        <div class="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none"/>
        
        <h3 class="font-heading font-extrabold text-3xl md:text-4xl max-w-3xl mx-auto leading-tight">
          Ingin Sajikan Tahu Putih Terbaik untuk Pelanggan &amp; Keluarga Anda?
        </h3>
        <p class="text-brand-lightgreen text-base md:text-lg max-w-2xl mx-auto">
          Jangan biarkan kualitas hidangan Anda menurun karena tahu yang beraroma asam atau mudah hancur. Hubungi kami malam ini untuk pemesanan esok pagi!
        </p>
        <div class="pt-2">
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Tahu%20Maju%2C%20saya%20tertarik%20kemitraan%20dan%20ingin%20memesan%20Tahu%20Putih%20hangat." 
            target="_blank" 
            rel="noopener" 
            class="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-darkgold font-heading font-black text-xl rounded-xl shadow-xl hover:bg-white hover:text-brand-green dark:hover:text-brand-dark transform hover:-translate-y-0.5 transition duration-150 gap-2"
          >
            <span class="text-2xl" role="img" aria-label="WhatsApp icon">💬</span> Hubungi via WhatsApp
          </a>
        </div>
        <p class="text-xs text-white/70">Tahu kami diantar segar pukul 04.00 - 07.00 pagi ke wilayah Klungkung kota.</p>
      </div>

    </div>
  </section>
</template>
