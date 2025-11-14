import { profile } from '../data/content';

export default function About() {
  return (
    <section id="tentang">
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="section-kicker">Tentang Saya</span>
          <h2 className="section-heading">Membangun produk digital yang terasa manusiawi</h2>
          <p className="section-paragraph">
            Saya adalah front-end engineer dengan fokus pada pengalaman pengguna, desain sistem, dan performa. Selama
            lima tahun terakhir saya membantu startup dan perusahaan enterprise meluncurkan produk digital yang
            berdampak, memadukan desain elegan dengan arsitektur front-end yang skalabel.
          </p>
          <p className="section-paragraph">
            Saat tidak sedang menulis kode, saya menyusun dokumentasi desain, membuat prototipe interaktif, dan
            mengeksplorasi cara-cara baru untuk meningkatkan kolaborasi antara produk, desain, dan engineering.
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
            <p>Mengembangkan platform SaaS dengan Next.js 14 dan desain sistem adaptif.</p>
          </div>
          <div className="about-card">
            <h3>Karya Terakhir</h3>
            <p>Mengembangkan sistem presensi berbasis QR code dengan PHP native.</p>
          </div>
        </div>
      </div>
    </section>
  );
}