// pages/index.jsx
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavbarSimple from '../components/NavbarSimple';
import DetailProjectCard from '../components/DetailProjectCard';

// タイピングエフェクト用のカスタムフック
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, delayAfterType = 2000) => {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    if (texts.length === 0) return;
    
    const handleTyping = () => {
      const currentText = texts[typingIndex % texts.length];
      
      setTypingText(current => 
        isDeleting 
          ? currentText.substring(0, current.length - 1)
          : currentText.substring(0, current.length + 1)
      );
      
      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), delayAfterType);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setTypingIndex(typingIndex => typingIndex + 1);
      }
    };
    
    const typingInterval = setTimeout(
      handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(typingInterval);
  }, [typingText, typingIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayAfterType]);

  return typingText;
};

// ヒーローセクション
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
      
      {/* スクロールインジケーターを中央下部に配置（修正） */}
      <div className="flex justify-center w-full absolute bottom-10">
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
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
      </div>
    </section>
  );
};

// スキルカード
const SkillCard = ({ title, description, level, icon }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div 
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  // プロジェクトデータ
  const projects = [
    {
      id: 1,
      title: "進捗堂 (Shinchokudou)",
      description: "AI搭載タスク管理アプリ。ユーザーの習慣、天気、時間帯を考慮したパーソナライズされたタスク提案とポモドーロタイマーを提供します。",
      image: "/images/project1.jpg",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      demoUrl: "https://shinchokudou.com/",
      githubUrl: "https://github.com/atsukitanaka0922/shinchokudou"
    },
    {
      id: 2,
      title: "YomuYama",
      description: "本の管理、シリーズの整理、読書進捗の追跡を行うReactウェブアプリケーション。Google Books APIを活用した書籍検索や読書タワーによる視覚化機能を搭載。",
      image: "/images/project3.jpg",
      technologies: ["React", "Material-UI", "Firebase", "Google Books API"],
      demoUrl: "https://yomuyama.com/",
      githubUrl: "https://github.com/atsukitanaka0922/YomuYama"
    },
    {
      id: 5,
      title: "ポートフォリオサイト",
      description: "Next.js、Tailwind CSS、Framer Motionを使用して開発した、このポートフォリオサイト。パーティクル背景とアニメーションを活用したモダンなUI/UXを提供し、レスポンシブデザインに対応。",
      image: "/images/project5.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      demoUrl: "/",
      githubUrl: "https://github.com/atsukitanaka0922/portfolio"
    }
  ];

  // スキルデータ
  const skills = [
    { 
      title: "フロントエンド開発", 
      description: "React、Next.js、TypeScriptを使用したモダンなWebアプリケーション開発に焦点を当てています。", 
      level: 80,
      icon: "🖥️"
    },
    { 
      title: "バックエンド開発", 
      description: "Firebase、Python、Node.jsを使ったサーバーサイド開発の経験があります。", 
      level: 70,
      icon: "⚙️"
    },
    { 
      title: "UI/UXデザイン", 
      description: "使いやすいインターフェースと魅力的なユーザー体験の設計に情熱を持っています。", 
      level: 75,
      icon: "🎨"
    },
    { 
      title: "問題解決能力", 
      description: "複雑な問題を分析し、効率的な解決策を見つけることが得意です。", 
      level: 85,
      icon: "🧩"
    }
  ];

  // アニメーションバリアント
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      <Head>
        <title>田中 敦喜のポートフォリオ | システムエンジニア</title>
        <meta name="description" content="システムエンジニアのポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarSimple />
      
      <main>
        {/* ヒーローセクション */}
        <AnimatedHero />

        {/* プロジェクトセクション */}
        <section className="py-16 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-blue-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              主要プロジェクト
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* DetailProjectCardを使用してプロジェクトカード表示 */}
              {projects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                  <DetailProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/projects" className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md inline-block">
                すべてのプロジェクトを見る
              </Link>
            </motion.div>
          </div>
        </section>

        {/* スキルセット */}
        <section className="py-16 bg-gray-50 relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-blue-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              スキルセット
            </motion.h2>
            
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <SkillCard 
                      title={skill.title}
                      description={skill.description}
                      level={skill.level}
                      icon={skill.icon}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/skills" className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md inline-block">
                  詳細スキルを見る
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* コンタクトセクション */}
        <section className="py-16 bg-blue-900 text-white relative z-10">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              お問い合わせ
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              プロジェクトのご依頼やお問い合わせは、下記リンクからお気軽にご連絡ください。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 shadow-md inline-block">
                お問い合わせフォーム
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} 田中 敦喜のポートフォリオ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}