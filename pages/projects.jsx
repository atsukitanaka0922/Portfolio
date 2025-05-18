// pages/projects.jsx
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import DetailProjectCard from '../components/DetailProjectCard';
import ProjectTags from '../components/ProjectTags';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // プロジェクトデータ - タグを追加
  const projects = [
    {
      id: 1,
      title: "進捗堂 (Shinchokudou)",
      description: "AI搭載タスク管理アプリ。ユーザーの習慣、天気、時間帯を考慮したパーソナライズされたタスク提案とポモドーロタイマーを提供します。",
      image: "/images/project1.jpg", // 画像はpublicフォルダに配置
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zustand", "Framer Motion"],
      demoUrl: "https://shinchokudou.com/",
      githubUrl: "https://github.com/atsukitanaka0922/shinchokudou",
      pdfUrl: "/pdfs/shinchokudou.pdf",
      tag: "アプリ"
    },
    {
      id: 2,
      title: "勝率チェッカー",
      description: "リーグ戦の大会管理、チーム・選手の成績管理、勝率計算を行うPythonコンソールアプリケーション。スポーツ大会やゲーム大会の試合結果を追跡します。",
      image: "/images/project2.jpg",
      technologies: ["Python", "JSON", "OOP"],
      githubUrl: "https://github.com/atsukitanaka0922/SyoritsuChecker",
      tag: "ツール"
    },
    {
      id: 3,
      title: "YomuYama",
      description: "本の管理、シリーズの整理、読書進捗の追跡を行うReactウェブアプリケーション。Google Books APIを活用した書籍検索や読書タワーによる視覚化機能を搭載。",
      image: "/images/project3.jpg",
      technologies: ["React", "Material-UI", "Firebase", "Google Books API", "楽天ブックス書籍検索API", "PWA", "Framer Motion"],
      demoUrl: "https://yomuyama.com/",
      githubUrl: "https://github.com/atsukitanaka0922/YomuYama",
      tag: "アプリ"
    },
    {
      id: 4,
      title: "ますかちゃん (Discord録音ボット)",
      description: "Discordの音声チャンネルでの会話を自動的に録音し、MP3ファイルとして保存するDiscordボット。10分ごとのファイル分割機能付き。名前の元ネタは友人が昔作ったオリキャラから。",
      image: "/images/project4.jpg",
      technologies: ["Python", "Discord.py", "FFmpeg"],
      githubUrl: "https://github.com/atsukitanaka0922/Mascachan",
      tag: "ツール"
    },
    {
      id: 5,
      title: "Prime Select (模擬ECサイト)",
      description: "PHPとMySQLで構築された模擬ECサイト。ユーザー認証、商品カタログ、ショッピングカート、チェックアウトプロセス、管理パネルなど、実務レベルの機能を実装。商品画像などにはGoogle Geminiでの画像生成を用いている",
      image: "/images/project6.jpg",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "HTML", "CSS", "Google Gemini"],
      githubUrl: "https://github.com/atsukitanaka0922/primeselect",
      tag: "サイト"
    },
    {
      id: 6,
      title: "ポートフォリオサイト",
      description: "Next.js、Tailwind CSS、Framer Motionを使用して開発した、このポートフォリオサイト。パーティクル背景とアニメーションを活用したモダンなUI/UXを提供し、レスポンシブデザインに対応。",
      image: "/images/project5.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      tag: "サイト"
    }
  ];

  // 利用可能なすべてのタグを取得
  const allTags = ['all', ...new Set(projects.map(project => project.tag))];
  
  // 各タグのプロジェクト数を計算
  const tagCounts = {};
  allTags.forEach(tag => {
    if (tag !== 'all') {
      tagCounts[tag] = projects.filter(project => project.tag === tag).length;
    }
  });

  // タグに基づいてプロジェクトをフィルタリング
  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.tag === selectedTag);
      setFilteredProjects(filtered);
    }
  }, [selectedTag, projects]);

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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="My projects as a system engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          プロジェクト
        </motion.h1>
        
        {/* タグフィルター */}
        <ProjectTags 
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
          tagCounts={tagCounts}
        />
        
        {/* プロジェクトグリッド */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedTag}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map(project => (
              <motion.div key={project.id} variants={itemVariants}>
                <DetailProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* プロジェクトが見つからない場合 */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-lg">選択したタグに一致するプロジェクトが見つかりませんでした。</p>
          </motion.div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}