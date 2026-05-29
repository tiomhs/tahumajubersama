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
                  +62 878-1584-8998
                </p>
                <p class="text-brand-gray dark:text-white/50 text-xs">
                  Melayani konsultasi kerjasama pasokan harian.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Location Map (Right) -->
        <div class="lg:col-span-7 space-y-4 w-full">
          <div class="w-full h-96 rounded-2xl overflow-hidden border border-brand-darkgold/15 dark:border-white/10 bg-brand-cream dark:bg-brand-gray/10 relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.591360156657!2d115.40937907589598!3d-8.538992086543235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2119f416ca781%3A0xb9bf82dfe25fc904!2sPABRIK%20TAHU%20(Home%20Industri%20Maju%20Sejahtera)!5e0!3m2!1sen!2sid!4v1780087107238!5m2!1sen!2sid" 
              class="w-full h-full border-0" 
              allowfullscreen="true" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="text-right">
            <a 
              href="https://maps.app.goo.gl/gLtkC4m8D5iCbDE77" 
              target="_blank" 
              rel="noopener" 
              class="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-brand-green dark:text-brand-gold hover:underline"
            >
              Buka Rute Lengkap di Google Maps &rarr;
            </a>
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
            href="https://wa.me/6287815848998?text=Halo%20Tahu%20Maju%2C%20saya%20tertarik%20kemitraan%20dan%20ingin%20memesan%20Tahu%20Putih%20hangat." 
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
