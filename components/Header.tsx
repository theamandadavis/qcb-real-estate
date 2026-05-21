'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const primaryNav = [
  { href: '/services', label: 'Services' },
  { href: '/markets', label: 'Markets' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/partner', label: 'Partner With Us' },
];

const companyNav = [
  { href: '/about', label: 'About QCB' },
  { href: '/investor-relations', label: 'Investor Relations' },
  { href: '/contact', label: 'Contact' },
];

const allMobileNav = [
  { href: '/', label: 'Home' },
  ...primaryNav,
  { href: '/about', label: 'About QCB' },
  { href: '/investor-relations', label: 'Investor Relations' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-200 ${
          scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="QCB Global LLC"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'text-gold-600 bg-amber-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Company dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCompanyOpen((p) => !p)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors rounded-lg"
              >
                Company
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${companyOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {companyOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-slate-200 rounded-xl shadow-lg py-2">
                  {companyNav.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/revenue-projections"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              Get Revenue Projections
            </Link>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-20">
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
            {allMobileNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-gold-600 bg-amber-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-6 py-6 border-t border-slate-100">
            <Link
              href="/revenue-projections"
              className="block w-full py-4 bg-gold-500 hover:bg-gold-400 text-white font-bold text-base rounded-xl text-center transition-colors"
            >
              Get Revenue Projections
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
