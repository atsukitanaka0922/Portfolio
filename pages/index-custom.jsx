// pages/index-custom.jsx
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

// カスタムアニメーション用の簡易版コンポーネント
const AnimatedHero = () => {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Reactとバックエンド技術でWebアプリを構築します",
    "使いやすいUIの設計が得意です",
    "新しい技術の学習に情熱を持っています",
    "問題解決のためのコードを書くことが好きです"
  ];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[typingIndex % texts.length];
      const shouldDelete = isDeleting ? 1 : 0;
      
      setTypingText(current => 
        isDeleting 
          ? currentText.substring(0, current.length - 1)
          : currentText.substring(0, current.length + 1)
      );
      
      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setTypingIndex(typingIndex => typingIndex + 1);
      }
    };
    
    const typingInterval = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(typingInterval);
  }, [typingText, typingIndex, isDeleting, texts]);
  
  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-32 md:py-40 relative">
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
            <Link href="/projects">
              <motion.a 
                className="px-5 py-3 bg-white text-blue-900 font-semibold rounded-md inline-block shadow-lg text-center"
                whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.95 }}
              >
                プロジェクトを見る
              </motion.a>
            </Link>
            
            <Link href="/contact">
              <motion.a 
                className="px-5 py-3 border border-white text-white font-semibold rounded-md inline-block shadow-lg text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.a>
            </Link>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
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
      </div>
    </section>
  );
};

// 3Dカードエフェクト
const TiltCard = ({ children, className }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // 最大10度の回転
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
      
      {isHovered && (
        <motion.div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

// プロジェクトカード
const ProjectCard = ({ project }) => {  
  return (
    <TiltCard className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="relative h-48">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            width={400}
            height={200}
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">No image</span>
          </div>
        )}
        
        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-blue-900 bg-opacity-0 flex items-center justify-center"
          whileHover={{ backgroundColor: "rgba(30, 58, 138, 0.7)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="text-white text-center px-4"
          >
            <p className="font-bold text-xl mb-2">詳細を見る</p>
            <p className="text-sm">クリックして詳細をチェック</p>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <motion.span 
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          {project.demoUrl && (
            <motion.a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.a>
          )}
          
          {project.githubUrl && (
            <motion.a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </TiltCard>
  );
};

// スキルカード
const CircularSkill = ({ skill, level, period, description, color = "#3B82F6" }) => {
  // スキルレベルに基づいてストロークのオフセットを計算
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (level / 100) * circumference;

  return (
    <motion.div 
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* 円形プログレス */}
      <div className="relative w-32 h-32 mb-4">
        {/* 背景円 */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke="#E5E7EB" 
            strokeWidth="8"
          />
          
          {/* プログレス円 */}
          <motion.circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke={color} 
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: progressOffset }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              transformOrigin: 'center',
              transform: 'rotate(-90deg)',
            }}
          />
        </svg>
        
        {/* パーセンテージテキスト */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {level}%
          </motion.span>
        </div>
      </div>
      
      {/* スキル情報 */}
      <h3 className="text-lg font-semibold mb-1">{skill}</h3>
      <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-full mb-2">{period}</span>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default function CustomHome() {
  // プロジェクトデータ
  const projects = [
    {
      id: 1,
      title: "進捗堂 (Shinchokudou)",
      description: "AI搭載タスク管理アプリ。ユーザーの習慣、天気、時間帯を考慮したパーソナライズされたタスク提案とポモドーロタイマーを提供します。",
      image: "/images/project1.jpg",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/atsukitanaka0922/shinchokudou"
    },
    {
      id: 2,
      title: "YomuYama",
      description: "本の管理、シリーズの整理、読書進捗の追跡を行うReactウェブアプリケーション。Google Books APIを活用した書籍検索や読書タワーによる視覚化機能を搭載。",
      image: "/images/project2.jpg",
      technologies: ["React", "Material-UI", "Firebase", "Google Books API"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/yourusername/book-manager"
    },
    {
      id: 5,
      title: "ポートフォリオサイト",
      description: "Next.js、Tailwind CSS、Framer Motionを使用して開発した、このポートフォリオサイト。パーティクル背景とアニメーションを活用したモダンなUI/UXを提供し、レスポンシブデザインに対応。",
      image: "/images/portfolio.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      demoUrl: "/",
      githubUrl: "https://github.com/atsukitanaka0922/portfolio"
    }
  ];

  // スキルデータ
  const skills = [
    { skill: "React", level: 80, period: "3ヶ月", description: "ウェブアプリ開発で主に使用", color: "#61DAFB" },
    { skill: "Next.js", level: 75, period: "4ヶ月", description: "ポートフォリオ制作で使用", color: "#000000" },
    { skill: "Tailwind CSS", level: 70, period: "3ヶ月", description: "進捗堂の制作で使用", color: "#38B2AC" },
    { skill: "TypeScript", level: 65, period: "3ヶ月", description: "進捗堂の制作で使用", color: "#3178C6" }
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
        <title>カスタマイズ | 田中 敦喜のポートフォリオ</title>
        <meta name="description" content="システムエンジニアのポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        {/* ヒーローセクション */}
        <AnimatedHero />

        {/* プロジェクトセクション */}
        <section className="py-16 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm relative z-10">
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
              {projects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
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
              <Link href="/projects">
                <a className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md inline-block">
                  すべてのプロジェクトを見る
                </a>
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <CircularSkill 
                      skill={skill.skill}
                      level={skill.level}
                      period={skill.period}
                      description={skill.description}
                      color={skill.color}
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
                <Link href="/skills">
                  <a className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md inline-block">
                    詳細スキルを見る
                  </a>
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
              <Link href="/contact">
                <a className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 shadow-md inline-block">
                  お問い合わせフォーム
                </a>
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
  )};