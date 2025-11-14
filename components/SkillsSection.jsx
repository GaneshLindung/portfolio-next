import { skills } from '../data/content';

const metrics = [
  { value: 'Modular', label: 'Komponen UI reusable' },
  { value: 'Adaptif', label: 'Produk digital shipping' },
  { value: 'Inklusif', label: 'Audit aksesibilitas tuntas' }
];

export default function SkillsSection() {
  return (
    <section id="keahlian" className="skills-section">
      <div className="container skills-layout">
        <div className="skills-intro">
          <div className="skills-heading">
            <span className="section-kicker">Keahlian</span>
            <h2 className="section-heading">Teknologi dan keahlian yang saya gunakan setiap hari</h2>
            <p className="section-paragraph">
              Menggabungkan teknologi modern dengan pendekatan human-centered design untuk menghasilkan produk digital yang
              responsif, cepat, dan mudah digunakan.
            </p>
          </div>
          <div className="skill-metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="skill-metric">
                <span className="skill-metric__value">{metric.value}</span>
                <span className="skill-metric__label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-grid">
          <article className="skill-panel">
            <span className="skill-panel__icon skill-panel__icon--stack" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 3.25L3.25 8.125L13 13L22.75 8.125L13 3.25ZM3.25 13L13 17.875L22.75 13M3.25 17.875L13 22.75L22.75 17.875"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="skill-panel__body">
              <h3 className="skill-panel__title">Stack Utama</h3>
              <p className="skill-panel__description">
                Pondasi teknologi yang saya gunakan untuk membangun pengalaman web modern dengan performa terbaik.
              </p>
              <div className="tag-grid">
                {skills.stacks.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="skill-panel">
            <span className="skill-panel__icon skill-panel__icon--tools" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.125 3.25V8.125H3.25M17.875 3.25V8.125H22.75M8.125 22.75V17.875H3.25M17.875 22.75V17.875H22.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="13" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <div className="skill-panel__body">
              <h3 className="skill-panel__title">Tooling & Kolaborasi</h3>
              <p className="skill-panel__description">
                Perangkat yang mendukung kolaborasi lintas tim, prototyping cepat, dan orkestrasi pengembangan.
              </p>
              <div className="tag-grid">
                {skills.tools.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
          {skills.highlights.map((highlight) => (
            <article key={highlight.title} className="skill-panel skill-highlight">
              <span className="skill-panel__icon skill-panel__icon--highlight" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 3.25L15.5312 9.34375L22.75 9.90625L17.125 14.375L18.9375 21.5L13 17.9375L7.0625 21.5L8.875 14.375L3.25 9.90625L10.4688 9.34375L13 3.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="skill-panel__body">
                <h3 className="skill-panel__title">{highlight.title}</h3>
                <p className="skill-panel__description">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}