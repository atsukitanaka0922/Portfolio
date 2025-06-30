// components/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Listen for scroll to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ナビゲーション処理関数
  const handleNavigation = async (href, e) => {
    e.preventDefault();
    setIsOpen(false); // モバイルメニューを閉じる
    
    if (router.pathname !== href) {
      try {
        await router.push(href);
      } catch (error) {
        console.error('Navigation error:', error);
        // フォールバックとして通常のリンクナビゲーションを使用
        window.location.href = href;
      }
    }
  };

  // Active link variants for animation
  const linkVariants = {
    initial: { scale: 1, opacity: 0.8 },
    active: { scale: 1.05, opacity: 1 },
    hover: { scale: 1.05, opacity: 1 }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              onClick={(e) => handleNavigation("/", e)}
              className="text-xl font-bold cursor-pointer"
            >
              MyPortfolio
            </a>
          </motion.div>
          
          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/skills", label: "Skills" },
              { href: "/contact", label: "Contact" }
            ].map((link) => (
              <motion.div
                key={link.href}
                initial="initial"
                animate={router.pathname === link.href ? "active" : "initial"}
                whileHover="hover"
                variants={linkVariants}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavigation(link.href, e)}
                  className={`px-3 py-2 rounded-md cursor-pointer ${
                    router.pathname === link.href 
                      ? 'font-medium text-blue-600' 
                      : 'hover:text-blue-500'
                  }`}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <svg 
                className="h-6 w-6" 
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/skills", label: "Skills" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (            <motion.div
              key={link.href}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleNavigation(link.href, e)}
                className={`block px-3 py-2 rounded-md ${
                  router.pathname === link.href 
                    ? 'font-medium text-blue-600' 
                    : 'hover:text-blue-500'
                } cursor-pointer`}
              >
                {link.label}
              </a>
            </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;