import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { doctor, navLinks } from '../data/doctor';
import { BrandMark } from './ui';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-teal/10 bg-ivory/85 shadow-[0_6px_30px_-12px_rgba(23,76,79,0.18)] backdrop-blur-xl'
          : 'bg-ivory/40 backdrop-blur-md'
      }`}
    >
      <div
        className={`container-x flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#home" className="flex items-center gap-3" aria-label={`${doctor.name}, ${doctor.title} — home`}>
          <BrandMark className={`transition-all duration-500 ${scrolled ? 'h-9 w-9' : 'h-10 w-10'}`} />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-teal">{doctor.name}</span>
            <span className="block text-xs tracking-wide text-muted">{doctor.title}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-sm font-medium text-charcoal/80 hover:text-teal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#consultations" className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            Book an Appointment
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-teal hover:bg-teal/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="overflow-hidden border-t border-teal/10 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-charcoal hover:bg-mint hover:text-teal"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a href="#consultations" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Book an Appointment
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
