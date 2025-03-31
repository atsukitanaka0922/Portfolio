// components/Navbar.jsx
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              MyPortfolio
            </Link>
          </div>
          
          {/* デスクトップメニュー */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-700">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md hover:bg-gray-700">
                About
              </Link>
              <Link href="/projects" className="px-3 py-2 rounded-md hover:bg-gray-700">
                Projects
              </Link>
              <Link href="/skills" className="px-3 py-2 rounded-md hover:bg-gray-700">
                Skills
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-gray-700">
                Contact
              </Link>
            </div>
          </div>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
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
            </button>
          </div>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-700">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-gray-700">
              About
            </Link>
            <Link href="/projects" className="block px-3 py-2 rounded-md hover:bg-gray-700">
              Projects
            </Link>
            <Link href="/skills" className="block px-3 py-2 rounded-md hover:bg-gray-700">
              Skills
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;