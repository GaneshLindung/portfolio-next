'use client';

import { useState } from 'react';

const navItems = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#kontak', label: 'Kontak' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          Ganesh<span className="gradient-text">Lindung Nusantara</span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Buka navigasi">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
        <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#kontak" className="button primary" onClick={() => setOpen(false)}>
            Hubungi Saya
          </a>
        </nav>
      </div>
    </header>
  );
}