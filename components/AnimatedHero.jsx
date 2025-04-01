'use client'

// components/AnimatedHero.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import TypingEffect from './TypingEffect';
import { useTheme } from '../context/ThemeContext';

const AnimatedHero = () => {
    const texts = [
      "Reactとバックエンド技術でWebアプリを構築します",
      "使いやすいUIの設計が得意です",
      "新しい技術の学習に情熱を持っています",
      "問題解決のためのコードを書くことが好きです"
    ];
    
    const typingText = useTypingEffect(texts, 80, 40, 3000);
    
    return (
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 py-32 md:py-40">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-40 backdrop-blur-sm"></div>
          
          <div className="max-w-3xl relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              田中 敦喜
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl mb-8 hero-text h-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-xl md:text-2xl">
                {typingText}
                <span className="inline-block w-0.5 h-5 ml-1 bg-current animate-blink"></span>
              </span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link href="/projects" className="inline-block">
                <motion.div 
                  className="px-5 py-3 bg-white text-blue-900 font-semibold rounded-md shadow-lg text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.95 }}
                >
                  プロジェクトを見る
                </motion.div>
              </Link>
              
              <Link href="/contact" className="inline-block">
                <motion.div 
                  className="px-5 py-3 border border-white text-white font-semibold rounded-md shadow-lg text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  お問い合わせ
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* スクロールインジケーターを中央下部に配置 */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
        >
          <span className="text-sm text-white mb-2">スクロールする</span>
          <svg 
            className="w-6 h-6 text-white animate-bounce" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>
    );
  };

export default AnimatedHero;