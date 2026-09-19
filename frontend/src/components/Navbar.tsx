import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gifting Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 shadow-md backdrop-blur-md py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
          aria-label="Corporate Khushiyaan home"
        >
          <img src="/corporate_khushiyaan_the_gift_hub_logo.jpg" alt="Corporate Khushiyaan logo" className="h-12 w-auto sm:h-14" />
          <span className="font-display text-xl font-bold leading-none text-brand-600 sm:text-2xl">
            Corporate Khushiyaan
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-charcoal-700 transition-colors hover:text-brand-500"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-brand-500/40 lg:block"
        >
          Get a Quote
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg p-2 text-charcoal-800 transition-colors hover:bg-cream-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="mx-4 mt-2 rounded-2xl border border-cream-200 bg-cream-50 p-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-charcoal-700 transition-colors hover:bg-cream-200 hover:text-brand-500"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-3 w-full rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
