import { profile } from '../data/content';

export default function About() {
  return (
    <section id="tentang">
      <div className="container about-layout">
        <div className="about-copy">
          <span className="section-kicker">Tentang Saya</span>
          <h2 className="section-heading">Membangun pengalaman digital yang rapi dan mudah digunakan</h2>
          <p className="section-paragraph">
            Saya adalah pengembang web dengan fokus pada pengalaman pengguna, kerapian konten, dan performa website.
            Saya terbiasa mengelola serta mengembangkan platform digital sekolah, mulai dari website informasi, LMS,
            portal berita, hingga sistem administrasi berbasis web.
          </p>
          <p className="section-paragraph">
            Dalam setiap proyek, saya berusaha menjaga tampilan tetap bersih, alur penggunaan mudah dipahami, dan
            konten tersusun dengan baik agar website bisa membantu kebutuhan pengguna secara nyata.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <h3>Lokasi</h3>
            <p>{profile.location}</p>
          </div>
          <div className="about-card">
            <h3>Ketersediaan</h3>
            <p>{profile.availability}</p>
          </div>
          <div className="about-card">
            <h3>Fokus Saat Ini</h3>
            <p>Mengelola dan mengembangkan website sekolah dengan fokus pada konten, SEO dasar, dan pengalaman pengguna.</p>
          </div>
          <div className="about-card">
            <h3>Karya Terakhir</h3>
            <p>Membangun platform digital sekolah seperti LMS, portal berita, seminar parenting, dan Raporguru.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
