import { projects } from '../data/content';

export default function ProjectsSection() {
  return (
    <section id="proyek">
      <div className="container" style={{ display: 'grid', gap: '2.75rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Proyek Unggulan</span>
          <h2 className="section-heading">Kolaborasi digital yang paling berkesan</h2>
          <p className="section-paragraph">
            Setiap proyek membawa tantangan unik. Dari dashboard SaaS hingga PWA perjalanan, saya memprioritaskan
            storytelling produk dan dampak bisnis yang terukur.
          </p>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <header>
                <div className="project-meta">
                  <span>{project.period}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Lihat proyek
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <h3>{project.title}</h3>
              </header>
              <p>{project.description}</p>
              <div className="tag-grid" style={{ marginTop: '1.2rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}