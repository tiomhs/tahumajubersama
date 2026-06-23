export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: 'Kesehatan' | 'Kuliner' | 'Edukasi'
  image: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'manfaat-tahu-putih-tanpa-pengawet',
    title: 'Mengapa Tahu Putih Tradisional Tanpa Pengawet Lebih Baik untuk Kesehatan Anda',
    excerpt: 'Tahu adalah sumber protein nabati yang luar biasa. Namun, tahu dengan bahan pengawet kimia bisa membahayakan tubuh. Temukan mengapa tahu segar tradisional jauh lebih sehat.',
    category: 'Kesehatan',
    date: '20 Juni 2026',
    author: 'WANDA',
    readTime: '4 menit baca',
    image: '/images/blog_kesehatan.png',
    content: `
      <p class="mb-4">Tahu putih telah menjadi bagian tak terpisahkan dari hidangan sehari-hari masyarakat Indonesia, khususnya di Bali. Selain harganya yang terjangkau, tahu adalah sumber protein nabati berkualitas tinggi yang rendah lemak jenuh dan bebas kolesterol. Namun, di tengah maraknya makanan cepat saji, sangat penting untuk memperhatikan bagaimana tahu yang kita konsumsi diproduksi.</p>
      
      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">1. Bebas dari Bahan Kimia Berbahaya</h3>
      <p class="mb-4">Banyak produsen nakal menambahkan formalin atau pengawet sintetis lainnya agar tahu bertahan berhari-hari di suhu ruang. Konsumsi jangka panjang zat ini dapat memicu iritasi lambung, kerusakan organ, bahkan kanker. Tahu putih tradisional yang segar diproduksi setiap hari tanpa pengawet sintesis, menjadikannya pilihan yang 100% aman untuk MPASI bayi hingga konsumsi lansia.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">2. Nutrisi Kedelai Murni yang Terjaga</h3>
      <p class="mb-4">Proses fermentasi dan koagulasi alami mempertahankan kandungan nutrisi penting dalam kedelai. Tahu putih kaya akan:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-1">
        <li><strong>Protein Nabati:</strong> Membantu perbaikan dan pertumbuhan jaringan sel tubuh.</li>
        <li><strong>Isoflavon:</strong> Antioksidan kuat yang menjaga kesehatan jantung dan menyeimbangkan hormon.</li>
        <li><strong>Kalsium Tinggi:</strong> Bagus untuk kekuatan tulang dan gigi, terutama karena kami menggunakan air pegunungan yang kaya mineral alami.</li>
      </ul>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">3. Lebih Mudah Dicerna oleh Lambung</h3>
      <p class="mb-4">Tahu putih tradisional melalui proses perebusan dan penyaringan serat kasar (ampas) yang optimal. Hal ini membuat struktur protein tahu menjadi sangat halus dan lembut, sehingga mudah dicerna dan tidak memicu perut kembung atau begah, berbeda dengan tahu yang menggunakan bahan pengental kimia buatan.</p>

      <div class="bg-brand-lightgreen/50 dark:bg-brand-green/20 border border-brand-green/20 rounded-xl p-6 my-6 text-brand-green dark:text-brand-lightgreen">
        <p class="font-heading font-bold text-lg mb-2">Tips Mengenali Tahu Sehat Tanpa Pengawet:</p>
        <p class="text-sm">Tahu tanpa pengawet biasanya memiliki tekstur yang kenyal namun lembut, berbau kedelai segar yang khas (tidak berbau asam menyengat), dan hanya bertahan 1-2 hari di suhu ruang, atau hingga 5 hari jika disimpan terendam air bersih di dalam lemari es.</p>
      </div>

      <p class="mb-4">Memilih tahu segar tanpa pengawet adalah investasi terbaik untuk kesehatan keluarga Anda. Dapatkan pasokan tahu putih segar tradisional yang diproduksi hangat setiap pagi langsung dari Pabrik Tahu Klungkung kami.</p>
    `
  },
  {
    slug: 'rahasia-kelembutan-tahu-klungkung',
    title: 'Mengintip Dapur Kami: Rahasia Kelembutan Tahu Klungkung Sejak 1995',
    excerpt: 'Banyak pelanggan bertanya bagaimana tahu kami bisa begitu lembut namun tetap padat. Berikut rahasia proses pembuatan tradisional menggunakan air pegunungan murni Bali.',
    category: 'Edukasi',
    date: '18 Juni 2026',
    author: 'WANDA',
    readTime: '5 menit baca',
    image: '/images/blog_proses.png',
    content: `
      <p class="mb-4">Sejak tahun 1995, Pabrik Tahu Klungkung (Tahu Maju Bersama) telah setia memproduksi tahu putih tradisional untuk pasar Galiran dan kebutuhan upacara adat di Bali. Banyak yang bertanya kepada kami, <em>"Bli, kenapa tahu Klungkung di sini rasanya lebih manis alami dan teksturnya sangat lembut dibandingkan tahu lainnya?"</em></p>
      
      <p class="mb-4">Hari ini, kami ingin membagikan tiga rahasia utama di balik proses produksi dapur kami yang konsisten kami jaga selama lebih dari tiga dekade.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">1. Air Pegunungan Murni Klungkung</h3>
      <p class="mb-4">Bahan dasar tahu adalah kedelai dan air. Kualitas air sangat menentukan rasa akhir tahu. Pabrik kami berlokasi dekat dengan sumber air bawah tanah pegunungan murni di Klungkung. Air ini bebas dari kaporit dan kaya akan mineral alami, memberikan rasa manis alami pada tahu yang tidak bisa ditiru oleh pabrik kota yang menggunakan air PAM.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">2. Tungku Kayu Bakar Tradisional</h3>
      <p class="mb-4">Kami menolak beralih ke ketel uap gas modern bertekanan tinggi. Bubur kedelai di pabrik kami masih direbus menggunakan tungku tanah liat dengan bahan bakar kayu pilihan. Perebusan lambat dengan kayu bakar memberikan aroma harum yang khas (smoky aroma) dan kematangan bubur kedelai yang merata sempurna, sehingga meminimalkan sisa getah pahit kedelai.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">3. Teknik Koagulasi Alami (Menggunakan Cuka Tahu)</h3>
      <p class="mb-4">Sebagai bahan pengental (koagulan), kami tidak menggunakan batu tahu (gipsum/kalsium sulfat) kimia. Kami menggunakan <strong>air cuka tahu alami</strong>—yaitu air sisa penyaringan tahu hari sebelumnya yang telah didiamkan hingga asam secara alami. Teknik warisan leluhur ini menghasilkan tahu putih dengan tekstur yang sangat lembut di lidah namun tetap padat saat dimasak atau digoreng.</p>

      <div class="relative pl-6 border-l-4 border-brand-gold my-6 italic text-brand-gray dark:text-white/80">
        "Membuat tahu bukan sekadar mencampur kedelai dan air, melainkan seni merasakan suhu tungku, ketepatan waktu penyaringan, dan kelembutan tangan saat mencetak tahu di atas kain blacu tradisional."
      </div>

      <p class="mb-4">Setiap balok tahu putih yang kami kirim ke pelanggan setianya adalah hasil dedikasi para pengrajin lokal kami yang bekerja dari jam 2 dini hari demi memastikan tahu segar hangat siap di meja makan Anda saat sarapan pagi.</p>
    `
  },
  {
    slug: 'resep-tahu-becek-khas-bali',
    title: 'Resep Tahu Becek Khas Bali: Olahan Lezat dan Gurih untuk Keluarga',
    excerpt: 'Bosan dengan tahu goreng biasa? Yuk, coba buat Tahu Becek khas Bali! Kuliner berkuah hangat dengan bumbu genap Bali yang gurih dan wangi kelapa.',
    category: 'Kuliner',
    date: '15 Juni 2026',
    author: 'JOBEY',
    readTime: '3 menit baca',
    image: '/images/blog_resep.png',
    content: `
      <p class="mb-4">Tahu putih sangat fleksibel untuk diolah menjadi hidangan apa saja. Jika Anda berkunjung ke Bali, salah satu menu olahan rumahan legendaris yang wajib dicoba adalah <strong>Tahu Becek</strong>. Hidangan ini memadukan kelembutan tahu putih segar dengan kuah santan bumbu genap khas Bali yang gurih, pedas sedang, dan aromatik.</p>
      
      <p class="mb-4">Mari kita buat sendiri di rumah menggunakan tahu putih Klungkung yang super lembut. Berikut resep praktisnya!</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Bahan-Bahan yang Diperlukan:</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-1">
        <li><strong>5 buah</strong> Tahu Putih Tradisional Klungkung (potong dadu 2 cm)</li>
        <li><strong>300 ml</strong> Santan kelapa encer segar</li>
        <li><strong>2 lembar</strong> Daun salam & 1 batang sereh (memarkan)</li>
        <li><strong>1 ruas</strong> Lengkuas (memarkan)</li>
        <li>Secukupnya garam, kaldu jamur, dan gula merah Bali</li>
        <li>Minyak kelapa asli untuk menumis</li>
      </ul>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Bumbu Halus (Base Genep Encer):</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-1">
        <li><strong>5 butir</strong> Bawang merah & 3 siung bawang putih</li>
        <li><strong>2 butir</strong> Kemiri (sangrai)</li>
        <li><strong>1 cm</strong> Kunyit (bakar) & 1 cm jahe</li>
        <li><strong>1 cm</strong> Kencur & 1/2 sdt terasi Bali (bakar)</li>
        <li><strong>3 buah</strong> Cabai rawit merah (sesuai selera pedas Anda)</li>
      </ul>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Cara Membuatnya:</h3>
      <ol class="list-decimal list-inside mb-4 pl-4 space-y-2">
        <li>Panaskan minyak kelapa di wajan. Tumis bumbu halus bersama daun salam, sereh, dan lengkuas hingga tercium aroma wangi dan bumbu matang sempurna.</li>
        <li>Tuangkan santan kelapa encer perlahan sambil diaduk rata agar santan tidak pecah. Masak hingga kuah santan mulai mendidih.</li>
        <li>Masukkan potongan tahu putih segar secara perlahan agar tahu tidak hancur.</li>
        <li>Tambahkan gula merah Bali, garam, dan kaldu jamur secukupnya. Koreksi rasa hingga menemukan perpaduan gurih, sedikit manis, dan pedas yang seimbang.</li>
        <li>Kecilkan api dan biarkan bumbu meresap ke dalam tahu selama kurang lebih 7-10 menit.</li>
        <li>Angkat dan sajikan hangat-hangat dengan taburan bawang merah goreng di atasnya bersama nasi putih hangat.</li>
      </ol>

      <p class="mb-4">Kunci dari kelezatan Tahu Becek ini terletak pada tahu putih yang digunakan. Pastikan Anda menggunakan tahu putih segar berkualitas tinggi yang memiliki tekstur lembut namun padat, sehingga bumbu kuah kelapa dapat meresap sempurna ke dalam pori-pori tahu.</p>
      
      <p class="mb-4">Selamat mencoba resep khas Bali ini di rumah ya!</p>
    `
  },
  {
    slug: 'olahan-tahu-nusantara-menu-sehat',
    title: 'Keberagaman Olahan Tahu Nusantara dan Perannya dalam Menu Sehat',
    excerpt: 'Tahu Sumedang, Tahu Gejrot, hingga Tahu Tek membuktikan tahu sangat digemari di Nusantara. Simak tips mengolah dan ide kreasinya untuk menu sehat keluarga!',
    category: 'Kuliner',
    date: '22 Juni 2026',
    author: 'JOBEY',
    readTime: '4 menit baca',
    image: '/images/blog_resep.png',
    content: `
      <p class="mb-4">Tahu telah lama menjadi bagian tidak terpisahkan dari piring makan masyarakat Indonesia. Fleksibilitasnya membuat bahan pangan sederhana ini dapat disulap menjadi aneka hidangan khas yang tersebar di seluruh penjuru Nusantara.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Beberapa Hidangan Berbahan Tahu yang Populer:</h3>
      <ol class="list-decimal list-inside mb-4 pl-4 space-y-2">
        <li><strong>Tahu Sumedang:</strong> Terkenal dengan tekstur luar yang renyah dan bagian dalam yang lembut gurih.</li>
        <li><strong>Tahu Gejrot:</strong> Kuliner khas Cirebon dengan siraman kuah pedas manis asam yang menyegarkan.</li>
        <li><strong>Tahu Tek:</strong> Hidangan khas Surabaya dengan siraman saus kacang gurih pekat beraroma petis.</li>
        <li><strong>Tahu Isi:</strong> Tahu goreng berkulit yang dipadukan dengan tumisan sayuran dan digoreng garing keemasan.</li>
        <li><strong>Tahu Bacem:</strong> Tahu manis gurih karamel yang dimasak perlahan bersama bumbu gula Jawa khas Jawa Tengah.</li>
      </ol>
      <p class="mb-4">Keberagaman olahan ini menunjukkan bahwa tahu telah melekat kuat sebagai bagian dari identitas budaya kuliner Nusantara.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Tahu Sebagai Pilihan Menu Sehat</h3>
      <p class="mb-4">Banyak orang memilih tahu sebagai bagian dari pola makan sehat karena kandungan proteinnya yang tinggi dan lemaknya yang relatif rendah. Selain itu, tahu juga mengandung berbagai mineral penting yang dibutuhkan tubuh.</p>
      <p class="mb-4">Tahu dapat menjadi alternatif sumber protein nabati terbaik bagi mereka yang ingin mengurangi konsumsi daging tanpa mengurangi asupan nutrisi harian. Dengan pengolahan yang tepat, tahu dapat menjadi menu sehat sekaligus lezat untuk seluruh keluarga.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Ide Kreasi Menu Berbahan Tahu</h3>
      <p class="mb-4">Jika Anda ingin mencoba variasi baru di rumah, berikut beberapa inspirasi menu berbahan tahu yang patut dicoba:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Tahu Crispy Saus Pedas Manis:</strong> Potongan tahu yang digoreng renyah lalu disiram saus pedas manis, cocok sebagai camilan sore hari.</li>
        <li><strong>Salad Tahu Panggang:</strong> Perpaduan tahu panggang dengan sayuran segar menghasilkan menu diet sehat yang ringan dan mengenyangkan.</li>
        <li><strong>Rice Bowl Tahu Teriyaki:</strong> Tahu tumis saus teriyaki gurih disajikan bersama nasi hangat, pilihan praktis untuk bekal makan siang.</li>
        <li><strong>Tumis Tahu Sayuran:</strong> Kombinasi tahu putih segar dan aneka sayuran memberikan nutrisi lengkap dalam satu hidangan cepat.</li>
      </ul>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Tips Mengolah Tahu agar Lebih Lezat</h3>
      <p class="mb-4">Untuk mendapatkan hasil masakan tahu yang maksimal dan bumbu meresap sempurna, perhatikan beberapa tips berikut:</p>
      <ol class="list-decimal list-inside mb-4 pl-4 space-y-2">
        <li>Tiriskan tahu dan tekan perlahan sebelum dimasak agar air kandungannya berkurang dan bumbu marinasi lebih mudah terserap.</li>
        <li>Marinasi tahu dengan bumbu dasar selama beberapa menit sebelum digoreng atau dipanggang.</li>
        <li>Gunakan api sedang saat menggoreng agar bagian kulit luar terbentuk renyah, namun bagian dalamnya tetap lembut juicy.</li>
        <li>Padukan dengan rempah-rempah segar seperti daun jeruk, daun bawang, atau cabai untuk meningkatkan aroma harum masakan.</li>
      </ol>
    `
  },
  {
    slug: 'sejarah-tahu-tiongkok-ke-indonesia',
    title: 'Sejarah Tahu: Perjalanan Panjang dari Tiongkok hingga Menjadi Ikon Kuliner Indonesia',
    excerpt: 'Bagaimana makanan sederhana berbahan kedelai dari Tiongkok kuno zaman Dinasti Han ini bermigrasi ke Asia Timur, Asia Tenggara, hingga menjadi ikon kuliner Nusantara?',
    category: 'Edukasi',
    date: '21 Juni 2026',
    author: 'JOBEY',
    readTime: '5 menit baca',
    image: '/images/blog_proses.png',
    content: `
      <p class="mb-4">Tahu merupakan salah satu makanan berbahan dasar kedelai yang telah dikonsumsi selama ribuan tahun. Meski kini menjadi bagian tak terpisahkan dari kuliner Indonesia, sejarah tahu sebenarnya berawal dari Tiongkok kuno dan berkembang melalui perjalanan budaya, perdagangan, serta migrasi manusia ke berbagai penjuru Asia.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Asal-Usul Tahu di Tiongkok</h3>
      <p class="mb-4">Sejarah tahu dipercaya dimulai pada masa Liu An (Pangeran Huainan) sekitar abad ke-2 sebelum Masehi pada masa Dinasti Han. Menurut legenda yang populer, Liu An secara tidak sengaja menemukan cara membuat tahu ketika sedang bereksperimen mengolah sari kedelai dengan bahan pengental mineral alami.</p>
      <p class="mb-4">Meskipun bukti sejarah yang menghubungkan langsung Liu An dengan penemuan tahu masih diperdebatkan para sejarawan, catatan arkeologis menunjukkan bahwa tahu memang telah dikenal sejak masa Dinasti Han. Pada awal kemunculannya, tahu dianggap sebagai alternatif protein nabati murah yang sangat berharga bagi masyarakat yang sulit mengakses daging hewan. Seiring waktu, teknik pembuatan tahu menyebar pesat ke seluruh wilayah Tiongkok.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Penyebaran ke Asia Timur</h3>
      <p class="mb-4">Perkembangan agama Buddha turut berperan dalam penyebaran tahu. Para biksu Buddha yang menganjurkan pola makan vegetarian memanfaatkan tahu sebagai sumber protein utama mereka. Melalui jalur penyebaran agama dan pertukaran budaya, tahu kemudian dikenal di berbagai negara Asia Timur.</p>
      <p class="mb-4">Pada sekitar abad ke-8 hingga ke-12, tahu mulai populer di Jepang dan Korea. Di Jepang, tahu berkembang menjadi bagian hidangan kuil dan tradisional seperti miso soup, agedashi tofu, dan yudofu. Sementara itu di Korea, tahu diolah menjadi sup hangat (jjigae) dan hidangan pendamping sehari-hari.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Masuk ke Asia Tenggara</h3>
      <p class="mb-4">Melalui aktivitas perdagangan maritim dan migrasi masyarakat Tionghoa, tahu menyebar ke kawasan Asia Tenggara. Para pedagang membawa tidak hanya barang dagangan, tetapi juga resep dan teknik pengolahan makanan berbasis kedelai.</p>
      <p class="mb-4">Di wilayah seperti Vietnam, Thailand, Malaysia, dan Nusantara (Indonesia), tahu diterima dengan baik dan diadaptasi sesuai dengan selera lokal serta rempah-rempah yang melimpah di setiap daerah.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Sejarah Tahu di Indonesia</h3>
      <p class="mb-4">Masuknya tahu ke Indonesia diperkirakan terjadi sejak berabad-abad lalu melalui pemukiman komunitas Tionghoa di pesisir Nusantara. Hubungan perdagangan yang intensif antara Nusantara dan Tiongkok memicu pertukaran budaya yang subur, termasuk resep tahu.</p>
      <p class="mb-4">Tahu dengan sangat cepat diterima oleh masyarakat Indonesia karena tiga alasan utama:</p>
      <ol class="list-decimal list-inside mb-4 pl-4 space-y-1">
        <li>Bahan baku kedelai sangat mudah tumbuh di iklim tropis Indonesia.</li>
        <li>Proses produksinya relatif sederhana sehingga bisa dipelajari dalam skala rumah tangga.</li>
        <li>Menawarkan sumber protein bergizi dengan harga yang sangat ekonomis dibandingkan daging hewan.</li>
      </ol>
      <p class="mb-4">Seiring waktu, industri pembuatan tahu lokal menjamur di berbagai daerah di Pulau Jawa, seperti Sumedang, Kediri, dan Semarang. Setiap daerah melahirkan keunikan rasa dan tekstur tahu tersendiri.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Perkembangan Tahu dalam Kuliner Indonesia</h3>
      <p class="mb-4">Dalam perkembangannya, masyarakat Nusantara menciptakan beragam variasi hidangan tahu yang sangat orisinal:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-1">
        <li><strong>Tahu Sumedang:</strong> Terkenal dengan tekstur luar kopong yang renyah namun lembut di dalam.</li>
        <li><strong>Tahu Gejrot:</strong> Asal Cirebon yang disajikan di cobek tanah liat dengan bumbu bawang putih dan cabai berkuah asam jawa manis.</li>
        <li><strong>Tahu Campur:</strong> Hidangan berkuah petis gurih khas Jawa Timur yang dipadukan dengan irisan tahu dan daging sapi.</li>
        <li><strong>Tahu Tek:</strong> Khas Surabaya dengan campuran bumbu petis udang kental, tahu goreng setengah matang, lontong, dan tauge.</li>
        <li><strong>Tahu Bacem:</strong> Cita rasa manis gurih khas Jawa Tengah yang dimasak bumbu kelapa dan gula aren.</li>
      </ul>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">Tahu di Era Modern</h3>
      <p class="mb-4">Saat ini, tahu telah melanglang buana hingga ke belahan bumi Barat seiring dengan meningkatnya kesadaran pola makan vegetarian. Dari kedai jalanan tradisional hingga restoran bintang lima, tahu terus bertransformasi menjadi burger vegan, steak tahu, dan salad modern. Perjalanan panjang ribuan tahun ini membuktikan kehebatan gizi dari bahan pangan sederhana ini.</p>
    `
  },
  {
    slug: 'kreasi-olahan-tahu-kekinian-kafe',
    title: 'Bosan Digoreng Biasa? Intip 3 Kreasi Olahan Tahu Kekinian yang Wajib Dicoba',
    excerpt: 'Tahu goreng memang enak, tapi kalau mulai bosan, saatnya menyulap tahu putih di kulkas menjadi menu kekinian ala kafe: Tahu Cabai Garam, Tahu Berontak, & Steak Tahu.',
    category: 'Kuliner',
    date: '19 Juni 2026',
    author: 'WANDA',
    readTime: '3 menit baca',
    image: '/images/blog_resep.png',
    content: `
      <p class="mb-4">Tahu goreng hangat dicocol sambal kecap memang tidak pernah salah. Namun, jika Anda mulai bosan dengan hidangan harian yang itu-itu saja, saatnya menyulap tahu putih di kulkas menjadi sajian kekinian ala kafe. Selain rasanya yang naik kelas, cara membuatnya pun sangat praktis. Yuk, intip 3 ide kreasi olahan tahu kekinian berikut ini!</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">1. Tahu Cabai Garam (Crispy Salt & Pepper Tofu)</h3>
      <p class="mb-4">Menu satu ini merupakan favorit di restoran Tionghoa maupun kafe estetik modern. Tekstur tahu yang renyah kering di bagian luar dan super lembut di dalam berpadu dengan sensasi gurih asin dan pedas harum.</p>
      <p class="mb-4"><strong>Cara Membuat:</strong> Potong tahu putih segar berbentuk dadu kecil. Balur rata dengan tepung maizena kering, lalu goreng dalam minyak panas hingga kuning keemasan dan garing. Di wajan lain, tumis bawang putih cincang halus, potongan cabai rawit merah, dan irisan daun bawang hingga harum. Masukkan tahu crispy, bumbui dengan garam, merica bubuk, dan sedikit kaldu jamur. Aduk cepat hingga merata dan sajikan hangat.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">2. Tahu Berontak Isi Sayur dan Ayam (Loaded Stuffed Tofu)</h3>
      <p class="mb-4">Ingin camilan sore yang gurih dan padat isi? Tahu Berontak versi premium ini bisa jadi andalan. Sangat cocok dinikmati bersama cabai rawit hijau atau dijadikan ide bisnis kuliner rumahan.</p>
      <p class="mb-4"><strong>Cara Membuat:</strong> Gunakan tahu putih yang digoreng hingga berkulit tebal, kemudian belah bagian tengahnya untuk membuat rongga. Tumis bahan isian berupa parutan wortel, taoge, irisan kol, dan daging ayam cincang yang dibumbui bawang putih halus, merica, saus tiram, dan garam. Masukkan tumisan isian ke dalam rongga tahu hingga padat. Celupkan ke adonan tepung bumbu kental, lalu goreng dalam minyak banyak hingga garing keemasan.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">3. Steak Tahu Saus Barbeque (Vegetarian Tofu Steak)</h3>
      <p class="mb-4">Siapa bilang makan steak harus mahal? Steak tahu ini adalah alternatif sehat rendah kolesterol yang sangat pas bagi Anda yang sedang berdiet namun tetap mendambakan sajian ala restoran barat.</p>
      <p class="mb-4"><strong>Cara Membuat:</strong> Hancurkan tahu putih hingga halus menggunakan garpu, peras sisa airnya dengan kain bersih. Campurkan adonan tahu dengan tepung terigu secukupnya, telur, bawang putih halus, garam, dan merica. Bentuk bulat patty menyerupai daging burger. Panggang di atas teflon anti lengket dengan sedikit mentega hingga kedua sisinya cokelat keemasan. Sajikan hangat bersama siraman saus barbeque hangat, kentang goreng, dan rebusan buncis/wortel.</p>
    `
  },
  {
    slug: 'si-kecil-kaya-nutrisi-manfaat-tahu',
    title: 'Si Kecil Kaya Nutrisi: 5 Manfaat Tahu untuk Kesehatan Tubuh',
    excerpt: 'Sering dianggap sebagai lauk murah meriah, tahu sebenarnya merupakan superfood lokal kaya kalsium, protein lengkap, dan isoflavon penurun kolesterol.',
    category: 'Kesehatan',
    date: '17 Juni 2026',
    author: 'JOBEY',
    readTime: '4 menit baca',
    image: '/images/blog_kesehatan.png',
    content: `
      <p class="mb-4">Seringkali dianggap sebagai makanan sederhana dan murah meriah, tahu ternyata menyimpan segudang manfaat yang luar biasa bagi kesehatan tubuh. Makanan berbahan dasar kedelai ini bukan sekadar pengisi perut, melainkan sumber nutrisi padat yang sangat baik untuk dikonsumsi sehari-hari.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">1. Sumber Protein Nabati Tinggi dan Rendah Kalori</h3>
      <p class="mb-4">Bagi para vegetarian atau Anda yang sedang berupaya membatasi konsumsi daging hewani, tahu adalah solusi terbaik. Tahu segar mengandung sembilan jenis asam amino esensial lengkap yang dibutuhkan untuk metabolisme tubuh. Ditambah lagi, tahu memiliki kandungan kalori dan lemak jenuh yang sangat rendah, menjadikannya ramah untuk program pengelolaan berat badan.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">2. Menjaga Kesehatan Jantung</h3>
      <p class="mb-4">Tahu kaya akan kandungan isoflavon, yaitu senyawa nabati yang bertindak sebagai antioksidan alami. Konsumsi tahu secara teratur terbukti secara klinis dapat membantu menurunkan kadar kolesterol jahat (LDL) dalam darah serta mengurangi peradangan pembuluh darah, yang pada akhirnya menurunkan risiko serangan jantung dan stroke.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">3. Membantu Menjaga Berat Badan</h3>
      <p class="mb-4">Dengan kandungan proteinnya yang tinggi, tahu memberikan efek mengenyangkan (satiety) yang bertahan lebih lama di sistem pencernaan. Hal ini membantu menekan nafsu makan berlebih dan mengurangi frekuensi ngemil tidak sehat di sela-sela jam makan utama.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">4. Menjaga Kesehatan Tulang</h3>
      <p class="mb-4">Tahu tradisional murni kaya akan mineral penting seperti kalsium dan magnesium. Kalsium sangat krusial dalam menjaga kepadatan mineral tulang, membantu mencegah pengeroposan tulang dini (osteoporosis) terutama bagi wanita menopause, serta mendukung perbaikan jaringan tulang.</p>

      <h3 class="text-xl font-heading font-bold text-brand-darkgold dark:text-white mt-6 mb-3">5. Mengurangi Risiko Kanker</h3>
      <p class="mb-4">Kandungan fitoestrogen dan isoflavon pada kacang kedelai murni berinteraksi dengan hormon tubuh secara positif. Berbagai penelitian ilmiah menunjukkan bahwa konsumsi produk kedelai utuh secara teratur dikaitkan dengan penurunan angka risiko terkena kanker payudara pada wanita dan kanker prostat pada pria.</p>
    `
  }
]
