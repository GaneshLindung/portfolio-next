import { FiDownload } from 'react-icons/fi';

import { profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {year} {profile.name}. Dibangun dengan Next.js dan banyak kopi.</p>
        <p style={{ fontSize: '0.85rem', color: 'rgba(148, 163, 184, 0.8)' }}>
          Terakhir diperbarui: Juni 2026 - Tersedia untuk proyek freelance dan kontrak jangka panjang.
        </p>
        <a href="/api/portfolio-pdf" className="footer-download" download>
          <FiDownload aria-hidden="true" focusable="false" />
          Download PDF
        </a>
      </div>
    </footer>
  );
}
