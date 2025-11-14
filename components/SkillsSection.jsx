import { skills } from '../data/content';

export default function SkillsSection() {
  return (
    <section id="keahlian">
      <div className="container" style={{ display: 'grid', gap: '3rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Keahlian</span>
          <h2 className="section-heading">Teknologi dan keahlian yang saya gunakan setiap hari</h2>
          <p className="section-paragraph">
            Menggabungkan teknologi modern dengan pendekatan human-centered design untuk menghasilkan produk digital yang
            responsif, cepat, dan mudah digunakan.
          </p>
        </div>
        <div className="grid-auto-fit">
          <div className="skill-card">
            <h3>Stack Utama</h3>
            <div className="tag-grid" style={{ marginTop: '1.25rem' }}>
              {skills.stacks.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Tooling & Kolaborasi</h3>
            <div className="tag-grid" style={{ marginTop: '1.25rem' }}>
              {skills.tools.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {skills.highlights.map((highlight) => (
            <div key={highlight.title} className="skill-card">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}