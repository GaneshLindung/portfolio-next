'use client';

import { profile } from '../data/content';
import TechIcon from './TechIcon';
import { triggerButtonGlow } from '../lib/triggerButtonGlow';

export default function Hero() {
  return (
    <section id="home" className="relative hero-section">
      <div className="blur-blob hero-blob-1" />
      <div className="blur-blob hero-blob-2" />
      <div className="container">
        <div className="glass hero-card">
          <div className="hero-card__glow" />
          <div className="hero-card__content">
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginLeft: '1.4rem', color: 'rgba(148, 163, 184, 0.85)' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(45, 212, 191, 0.15)',
                  color: '#5eead4',
                  fontWeight: 600
                }}
              >
                {profile.location.split(',')[0]}
              </span>
              <span>{profile.availability}</span>
            </div>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ color: 'rgba(94, 234, 212, 0.85)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.85rem' }}>
                  {profile.title}
                </span>
                <h1 style={{ fontSize: 'clamp(2.8rem, 4vw, 3.6rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                  Halo, saya <span className="gradient-text">{profile.name}</span>
                </h1>
                <p style={{ maxWidth: '620px', color: 'rgba(203, 213, 225, 0.85)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {profile.description}
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="#proyek" className="button" onClick={triggerButtonGlow}>
                  Lihat Proyek Unggulan
                </a>
                <a
                  href="#kontak"
                  className="button"
                  onClick={triggerButtonGlow}
                  style={{ background: 'rgba(15,23,42,0.7)', color: '#5eead4', border: '1px solid rgba(94, 234, 212, 0.35)' }}
                >
                  Jadwalkan Diskusi
                </a>
              </div>
            </div>
            <div className="tag-grid" style={{ marginTop: '1rem' }}>
              {skillsSummary.map((item) => (
                <TechIcon key={item} name={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skillsSummary = ['PHP', 'JavaScript', 'WordPress', 'Laravel', 'HTML', 'CSS'];
