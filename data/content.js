export const profile = {
  name: 'Ganesh Lindung Nusantara',
  title: 'Web Developer & Website Administrator',
  description:
    'Mengembangkan dan mengelola website sekolah yang rapi, informatif, dan mudah digunakan. Berpengalaman membangun LMS, portal berita, halaman kegiatan, serta sistem administrasi berbasis web.',
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
        'Membangun UI kit adaptif dengan dokumentasi Storybook yang meningkatkan konsistensi dan kecepatan pengembangan.',
      icon: 'system',
      tools: ['Storybook', 'Figma', 'React', 'Tailwind CSS', 'Chromatic', 'Tokens']
    }
  ]
};

export const projects = [
  {
    title: 'LMS Sekolah',
    period: '2026',
    description:
      'Learning Management System sekolah yang mendukung pembelajaran digital melalui pengelolaan materi, tugas, kelas, dan akses belajar siswa maupun guru dalam satu platform.',
    image: '/certifications/lms.png',
    tags: ['PHP', 'Html', 'CSS', 'JavaScript'],
    link: 'https://lms-jakabaring.sitauladi.sch.id/'
  },
  {
    title: 'Berita Sekolah dan Media',
    period: '2026',
    description:
      'Website berita dan media sekolah yang digunakan untuk mempublikasikan informasi, dokumentasi kegiatan, artikel, dan konten sekolah secara terstruktur.',
    image: '/certifications/BeritaSekolah.png',
    tags: ['WordPress'],
    link: 'https://sitauladi.sch.id/berita-media/'
  },
  {
    title: 'Seminar Parenting',
    period: '2026',
    description:
      'Platform seminar parenting yang digunakan untuk menampilkan informasi kegiatan, pendaftaran peserta, dan pengelolaan data seminar secara online.',
    image: '/certifications/SeminarParenting.png',
    tags: ['PHP', 'JavaScript', 'Html', 'CSS'],
    link: 'https://parenting.sitauladi.sch.id/'
  },
  {
    title: 'Raporguru',
    period: '2026',
    description:
      'Aplikasi untuk membantu guru dalam mengelola rapor kinerja, penilaian, dan administrasi akademik secara digital.',
    image: '/certifications/RaporGuru.png',
    tags: ['PHP', 'JavaScript', 'Html', 'CSS'],
    link: 'https://raporguru.sitauladi.sch.id/'
  }
];

export const certifications = [
  {
    title: 'Piagam Penghargaan Magang KEMNAKER',
    issuer: 'Kementerian Ketenagakerjaan RI (KEMNAKER) & SIT Auladi Palembang',
    period: 'Palembang, 16 Juni 2026',
    description:
      'Piagam penghargaan atas dedikasi dan kontribusi selama menjalani program magang HUB Batch 3 di lingkungan SIT Auladi Palembang, periode 16 Desember 2025 - 16 Juni 2026.',
    file: '/certifications/KEMNAKER.pdf',
    image: '/certifications/KEMNAKER.jpg'
  },
  {
    title: 'Sertifikat 12+ Essential Skills Magang Nasional',
    issuer: 'Gerakan Nasional Indonesia Kompeten (GNIK) & Kementerian Ketenagakerjaan RI',
    period: 'Jakarta, 30 Desember 2025',
    description:
      'Sertifikat pembekalan dengan topik Design Thinking dan nilai 100, mencakup dasar riset, ideasi, validasi solusi, serta kesiapan mengikuti program magang nasional.',
    file: '/certifications/pembekalan-essential-skills-gnik.pdf',
    image: '/certifications/pembekalan-essential-skills-gnik.jpg'
  },
  {
    title: 'Sertifikasi BNSP Junior Network Administrator',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    period: 'Bekasi, 26 September 2024',
    description:
      'Pengakuan kompetensi dalam merancang, mengonfigurasi, dan memelihara infrastruktur jaringan level pemula sesuai skema okupasi BNSP.',
    file: '/certifications/sertifikasi-bnsp-jna.pdf',
    image: '/certifications/sertifikasi-bnsp-jna.jpg'
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
    role: 'Trainer RPL',
    company: 'SMK Muhammadiyah Campaka',
    period: 'September 2024 - Desember 2024',
    achievements: [
      'Mengajar mata pelajaran Pemrograman Web Dasar dan Desain Grafis untuk siswa kelas X dan XI RPL.',
      'Menyusun RPP (Rencana Pelaksanaan Pembelajaran), materi ajar (slide, modul, dan latihan), serta soal evaluasi harian dan ujian.',
      'Membantu siswa mengembangkan portofolio dasar di bidang pemrograman web dan desain grafis.'
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
  }
];

export const testimonials = [
  {
    name: 'Nahrul Aidin',
    title: 'Social Media Team Coordinator, SIT Auladi Palembang',
    quote:
      'Selama kurang lebih enam bulan magang di SIT Auladi Palembang, Ganesh konsisten mengunggah artikel berita setiap bulan. Kontribusinya membantu website sitauladi.sch.id mengalami peningkatan view/pengunjung kurang lebih 6x dari sebelumnya.'
  },
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
