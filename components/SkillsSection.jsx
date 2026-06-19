import { skills } from '../data/content';
import TechIcon from './TechIcon';

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
            <div className="skill-panel__body">
              <h3 className="skill-panel__title">Stack Utama</h3>
              <p className="skill-panel__description">
                Pondasi teknologi yang saya gunakan untuk membangun pengalaman web modern dengan performa terbaik.
              </p>
              <div className="tag-grid">
                {skills.stacks.map((item) => (
                  <TechIcon key={item} name={item} />
                ))}
              </div>
            </div>
          </article>
          <article className="skill-panel">
            <div className="skill-panel__body">
              <h3 className="skill-panel__title">Tooling & Kolaborasi</h3>
              <p className="skill-panel__description">
                Perangkat yang mendukung kolaborasi lintas tim, prototyping cepat, dan orkestrasi pengembangan.
              </p>
              <div className="tag-grid">
                {skills.tools.map((item) => (
                  <TechIcon key={item} name={item} />
                ))}
              </div>
            </div>
          </article>
          {skills.highlights.map((highlight) => (
            <article key={highlight.title} className="skill-panel">
              <div className="skill-panel__body">
                <h3 className="skill-panel__title">{highlight.title}</h3>
                <p className="skill-panel__description">{highlight.description}</p>
                <div className="tag-grid">
                  {highlight.tools.map((item) => (
                    <TechIcon key={item} name={item} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
