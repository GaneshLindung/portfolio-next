import { profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'grid', gap: '0.75rem', justifyItems: 'center' }}>
        <p>© {year} {profile.name}. Dibangun dengan Next.js dan banyak kopi.</p>
        <p style={{ fontSize: '0.85rem', color: 'rgba(148, 163, 184, 0.8)' }}>
          Terakhir diperbarui: November 2025 — Tersedia untuk proyek freelance dan kontrak jangka panjang.
        </p>
      </div>
    </footer>
  );
}