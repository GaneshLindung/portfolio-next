import { profile } from '../data/content';

const icons = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="m4 7 8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path
        d="M6.6 4.5 9 4l1.6 3.2a1 1 0 0 1-.2 1.1l-1.2 1.2a11.2 11.2 0 0 0 5.3 5.3l1.2-1.2a1 1 0 0 1 1.1-.2L20 14l-.5 2.4a1.2 1.2 0 0 1-1.1.9C10.5 17 7 13.5 6.6 5.6a1.2 1.2 0 0 1 1-1.1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default function ContactSection() {
  return (
    <section id="kontak">
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Mari berkolaborasi</span>
          <h2 className="section-heading">Siap membantu membangun produk berikutnya</h2>
          <p className="section-paragraph">
            Jelaskan tantangan yang ingin Anda selesaikan, dan saya akan membawa ide, prototipe, dan roadmap yang
            terstruktur untuk mewujudkannya.
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-item">
            <span>{icons.email}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-item">
            <span>{icons.phone}</span>
            <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
              {profile.phone}
            </a>
          </div>
          <div>
            <p style={{ color: 'rgba(148, 163, 184, 0.8)', lineHeight: 1.6 }}>
              Preferensi kolaborasi: produk SaaS, platform edukasi, dan pengalaman digital yang berorientasi komunitas.
              Sesi discovery call gratis selama 30 menit tersedia.
            </p>
          </div>
          <div className="social-links">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} className="social-link" target="_blank" rel="noreferrer">
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ type }) {
  switch (type) {
    case 'linkedin':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM4 8.75h2v12H4v-12Zm4.5 0h1.92v1.64h.03c.27-.5.94-1.03 1.93-1.03 2.07 0 2.45 1.36 2.45 3.12v8.27h-2v-7.34c0-1.75-.41-2.74-1.43-2.74-.72 0-1.29.52-1.5 1.03-.07.18-.09.43-.09.68v8.37h-2v-12Z" />
        </svg>
      );
    case 'github':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.65 2 12.3c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.23.68-.5v-1.74c-2.78.63-3.37-1.37-3.37-1.37-.45-1.2-1.1-1.52-1.1-1.52-.9-.64.07-.63.07-.63 1 .07 1.52 1.07 1.52 1.07.9 1.6 2.36 1.14 2.94.87.09-.67.35-1.13.63-1.39-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.02 1.63 1.02 2.75 0 3.96-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92v2.85c0 .27.18.61.69.5A10.33 10.33 0 0 0 22 12.3C22 6.65 17.52 2 12 2Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm6.75-4.88a1.12 1.12 0 1 1-1.12 1.12 1.12 1.12 0 0 1 1.12-1.12Z" />
        </svg>
      );
    default:
      return null;
  }
}