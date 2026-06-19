import Image from 'next/image';

import { projects } from '../data/content';
import TechIcon from './TechIcon';

export default function ProjectsSection() {
  return (
    <section id="proyek">
      <div className="container" style={{ display: 'grid', gap: '2.75rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Proyek Unggulan</span>
          <h2 className="section-heading">Proyek digital untuk kebutuhan sekolah</h2>
          <p className="section-paragraph">
            Setiap proyek saya arahkan untuk membantu proses belajar, publikasi informasi, pendaftaran kegiatan, dan
            administrasi sekolah berjalan lebih praktis melalui website yang rapi dan mudah digunakan.
          </p>
        </div>
        <div className="card-grid projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__inner">
                {project.image && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-card__media">
                    <Image
                      src={project.image}
                      alt={`Tampilan proyek ${project.title}`}
                      width={1080}
                      height={1080}
                      className="project-image"
                      sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 520px"
                    />
                  </a>
                )}
                <div className="project-card__content">
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
                  <div className="tag-grid project-tags">
                    {project.tags.map((tag) => (
                      <TechIcon key={tag} name={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
