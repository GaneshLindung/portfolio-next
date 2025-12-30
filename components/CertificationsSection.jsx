+13
-13

import Image from 'next/image';

import { certifications } from '../data/content';

const resolveJpgPath = (path) => {
  if (!path) return '';
  return path.replace(/\.svg(\?.*)?$/i, '.jpg');
};

export default function CertificationsSection() {
  return (
    <section id="sertifikasi">
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Sertifikasi</span>
          <h2 className="section-heading">Pengakuan kompetensi dan kredensial</h2>
          <p className="section-paragraph">
            Membuktikan komitmen terhadap standar profesional melalui sertifikasi yang menekankan konsistensi, kualitas,
            dan kepatuhan terhadap SOP pengelolaan konten digital.
          </p>
        </div>
        <div className="card-grid">
          {certifications.map((certification) => (
            <article key={certification.title} className="project-card">
              <div
                style={{
                  display: 'grid',
                  gap: '1.25rem',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  alignItems: 'start'
                }}
              >
                {certification.image && (
                  <a
                    href={certification.file}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'block',
                      width: '100%',
                      maxWidth: '420px',
                      justifySelf: 'center'
                    }}
                  >
                    <Image
                      src={resolveJpgPath(certification.image)}
                      alt={`Sertifikat ${certification.title}`}
                      width={1754}
                      height={1242}
                      className="certification-image"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </a>
                )}
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <header style={{ display: 'grid', gap: '0.3rem' }}>
                    <div className="project-meta">
                      <span>{certification.period}</span>
                      <a href={certification.file} target="_blank" rel="noreferrer">
                        Lihat PDF
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <h3>{certification.title}</h3>
                      <span style={{ color: 'rgba(148, 163, 184, 0.9)', fontWeight: 500 }}>{certification.issuer}</span>
                    </div>
                  </header>
                  <p>{certification.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
