// components/Navbar.jsx
// 全ページ共通のナビゲーション（Frutiger Aero ガラス調）。
// 以前は Navbar / NavbarSimple の2種が存在していたが、これ1つに統合。
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { profile } from '../data/profile';

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-50 px-4 pt-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="メインナビゲーション"
    >
      <div
        className={`max-w-6xl mx-auto aero-glass px-4 transition-all duration-300 ${
          scrolled ? 'aero-glass-strong' : ''
        }`}
      >
        <div className="flex justify-between items-center h-14">
          {/* ブランド */}
          <Link
            href="/"
            className="text-lg font-bold aero-gradient-text whitespace-nowrap"
          >
            {profile.nameEn}
          </Link>

          {/* デスクトップメニュー */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-2 rounded-full text-sm transition-colors ${
                      active
                        ? 'font-semibold text-sky-800 bg-white/55 shadow-sm'
                        : 'text-slate-700 hover:bg-white/40 hover:text-sky-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-white/40"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              id="mobile-menu"
              className="md:hidden overflow-hidden border-t border-white/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block px-3 py-3 rounded-lg ${
                        active ? 'font-semibold text-sky-800 bg-white/50' : 'text-slate-700 hover:bg-white/40'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
