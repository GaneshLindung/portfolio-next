import Image from 'next/image';

import { certifications } from '../data/content';

export default function CertificationsSection() {
  return (
    <section id="sertifikasi">
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Sertifikasi</span>
          <h2 className="section-heading">Sertifikasi dan penghargaan</h2>
          <p className="section-paragraph">
            Membuktikan komitmen terhadap standar profesional melalui sertifikasi yang menekankan konsistensi, kualitas,
            dan kepatuhan terhadap SOP pengelolaan konten digital.
          </p>
        </div>
        <div className="certification-grid">
          {certifications.map((certification) => (
            <article key={certification.title} className="certification-card">
              <div className="certification-card__inner">
                {certification.image && (
                  <a href={certification.file} target="_blank" rel="noreferrer" className="certification-card__media">
                    <span className="certification-card__filetype">PDF</span>
                    <Image
                      src={certification.image}
                      alt={`Sertifikat ${certification.title}`}
                      width={1754}
                      height={1242}
                      className="certification-image"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </a>
                )}
                <div className="certification-card__content">
                  <header className="certification-card__header">
                    <div className="certification-card__meta">
                      <span>{certification.period}</span>
                    </div>
                    <h3>{certification.title}</h3>
                    <span className="certification-card__issuer">{certification.issuer}</span>
                  </header>
                  <p>{certification.description}</p>
                  <a href={certification.file} target="_blank" rel="noreferrer" className="certification-card__action">
                    Lihat PDF
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
