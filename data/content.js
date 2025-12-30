export const profile = {
  name: 'Ganesh Lindung Nusantara',
  title: 'Front-end Engineer & UI Craftsman',
  description:
    'Membangun pengalaman digital yang memadukan estetika dan performa. Spesialis Next.js, animasi halus, dan kolaborasi lintas disiplin.',
  location: 'Palembang, Indonesia',
  availability: 'Tersedia untuk kolaborasi remote & onsite',
  email: 'ganeshnusantara@gmail.com',
  phone: '+62 812-7308-6284',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganeshlindung', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/GaneshLindung', icon: 'github' },
    { label: 'Instagram', href: 'https://instagram.com/ganesh.nusantara', icon: 'instagram' }
  ]
};

export const skills = {
  stacks: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'PHP'
  ],
  tools: ['Figma', 'Storybook', 'Vite', 'Supabase', 'Miro', 'Notion'],
  highlights: [
    {
      title: 'Desain Sistem Komponen',
      description:
        'Membangun UI kit adaptif dengan dokumentasi Storybook yang meningkatkan konsistensi dan kecepatan pengembangan.'
    },
    {
      title: 'Performa & Aksesibilitas',
      description:
        'Optimasi web vitals, audit Lighthouse, dan penerapan praktik aksesibilitas untuk pengalaman pengguna yang lebih inklusif.'
    },
    {
      title: 'Integrasi Produk',
      description:
        'Menghubungkan front-end dengan backend modern menggunakan GraphQL/REST, autentikasi aman, dan observabilitas real-time.'
    }
  ]
};

export const projects = [
  {
    title: 'E-commerce',
    period: '2025',
    description:
      'Prototipe toko online dengan katalog produk, keranjang belanja, dan alur checkout sederhana untuk menampilkan pengalaman belanja end-to-end.',
    tags: ['JavaScript', 'React', 'Typescript', 'Next.js'],
    link: 'https://github.com/GaneshLindung/ecommerce'
  },
  {
    title: 'Portofolio',
    period: '2025',
    description:
      'Pembuatan aset visual untuk proyek portofolio berbasis Next.js, mencakup penyusunan moodboard desain dan pengembangan antarmuka pengguna.',
    tags: ['Next.js', 'React', 'JavaScript'],
    link: 'https://github.com/GaneshLindung/portfolio-next'
  },
  {
    title: 'Sistem Presensi QR Code',
    period: '2025',
    description:
      'Aplikasi presensi siswa dan guru berbasis web dengan pemindaian QR, dashboard rekap realtime, dan integrasi ekspor laporan.',
    tags: ['PHP', 'Javascript', 'Html', 'CSS'],
    link: 'https://github.com/GaneshLindung/presensi-qr-code'
  },
  {
    title: 'Portal Berita',
    period: '2024',
    description:
      'Portal berita dengan manajemen artikel, kategori, dan pencarian untuk kurasi konten yang rapi, lengkap dengan alur editor agar informasi tetap konsisten.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/GaneshLindung/portal-berita'
  }
];

export const experiences = [
  {
    role: 'Staff Web Master',
    company: 'SIT Auladi Palembang',
    period: '16 Desember 2025 - 15 Juni 2026',
    achievements: [
      'Memastikan website selalu ter-update, rapi, dan sesuai standar kualitas konten yang diberikan.',
      'Menerapkan basic on-page SEO (meta title, description, internal link, alt text) pada 100% konten.',
      'Menjaga akurasi dan kerapian konten dengan tingkat typo di bawah 2% per artikel.',
      'Memelihara website melalui perbaikan broken link, pembaruan halaman, dan optimasi media.',
      'Menyusun laporan bulanan berisi konten terbit, update halaman, dan insight performa dasar sesuai SOP.'
    ]
  },
  {
    role: 'Graphic Designer',
    company: 'PT Dua Dua Disain Indonesia',
    period: 'Februari 2024 - April 2024',
    achievements: [
      'Membuat 10+ ide konten termasuk feeds serta story media sosial instagram.',
      'Mengelola 2 brand media sosial perusahaan, termasuk perencanaan konten dan konsistensi visual.',
      'Berkontribusi dalam pengelolaan brand wedding dan desain interior melalui pembuatan materi promosi dan konsep visual yang sesuai karakter brand.'
    ]
  },
  {
    role: 'Trainer RPL',
    company: 'SMK Muhammadiyah Campaka',
    period: 'September 2024 - Desember 2024',
    achievements: [
      'Mengajar mata pelajaran Pemrograman Web Dasar dan Desain Grafis untuk siswa kelas X dan XI RPL.',
      'Menyusun RPP (Rencana Pelaksanaan Pembelajaran), materi ajar (slide, modul, dan latihan), serta soal evaluasi harian dan ujian.',
      'Membantu siswa mengembangkan portofolio dasar di bidang pemrograman web dan desain grafis.'
    ]
  }
];

export const testimonials = [
  {
    name: 'Desty Gita',
    title: 'Creative Team, PT Dua Dua Disain Indonesia',
    quote:
      'Ganesh membawa standar desain dan kualitas baru pada tim kami. Ia mampu menerjemahkan visi produk menjadi pengalaman yang intuitif dan bernilai bisnis.'
  },
  {
    name: 'Sukarsih',
    title: 'Deputy Head of Curriculum, SMK Muhammadiyah Campaka',
    quote:
      'Sistem presensi berbasis QR code yang ia kembangkan membuat proses absensi kami 2x lebih cepat dan mengurangi kesalahan pencatatan.'
  }
];
