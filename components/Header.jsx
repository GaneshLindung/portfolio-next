'use client';

import { useState } from 'react';

import { triggerButtonGlow } from '../lib/triggerButtonGlow';

const navItems = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#sertifikasi', label: 'Sertifikasi' },
  { href: '#kontak', label: 'Kontak' }
];

const toTitleCase = (value) =>
  value
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

const brandName = toTitleCase('ganesh lindung nusantara');
const [brandFirst, ...brandRest] = brandName.split(' ');
const brandHighlight = brandRest.join(' ');

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleCtaClick = (event) => {
    triggerButtonGlow(event);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="Beranda">
          <span className="logo-text">{brandFirst}</span>
          {brandHighlight && (
            <>
              {' '}
              <span className="gradient-text logo-text">{brandHighlight}</span>
            </>
          )}
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
          <a href="#kontak" className="button primary" onClick={handleCtaClick}>
            Hubungi Saya
          </a>
        </nav>
      </div>
    </header>
  );
}