'use client'

// components/AnimatedHero.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';

const AnimatedHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative">
        {/* 半透明のオーバーレイ - パーティクル背景との間にコントラストを作る */}
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
          
          <motion.p 
            className="text-xl mb-8 hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Reactとバックエンド技術を活用し、使いやすいWebアプリケーションを構築します
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/projects">
              <motion.a 
                className="px-5 py-3 bg-white text-blue-900 font-semibold rounded-md inline-block shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.95 }}
              >
                プロジェクトを見る
              </motion.a>
            </Link>
            
            <Link href="/contact">
              <motion.a 
                className="px-5 py-3 border border-white text-white font-semibold rounded-md inline-block shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;