// pages/skills.jsx
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  // 言語スキルデータ
  const languageSkills = [
    { skill: "HTML/CSS", level: 85, period: "約2年半", description: "学生時代に学んだ経験あり" },
    { skill: "JavaScript", level: 75, period: "1年1ヶ月", description: "「YomuYama」の制作で使用経験あり" },
    { skill: "TypeScript", level: 65, period: "3ヶ月", description: "「進捗堂」の制作で使用経験あり" },
    { skill: "React", level: 80, period: "3ヶ月", description: "ウェブアプリ開発で主に使用している" },
    { skill: "Next.js", level: 75, period: "4ヶ月", description: "「進捗堂」「ポートフォリオサイト」の制作で使用経験あり" },
    { skill: "Material-UI", level: 70, period: "1ヶ月", description: "「YomuYama」の制作で使用経験あり" },
    { skill: "TailwindCSS", level: 70, period: "3ヶ月", description: "「進捗堂」の制作で使用経験あり" },
    { skill: "Framer Motion", level: 65, period: "4ヶ月", description: "ウェブアプリ開発で主に使用している" },
    { skill: "Python", level: 75, period: "4ヶ月", description: "PC向けアプリ開発で主に使用している" },
    { skill: "Node.js", level: 65, period: "4ヶ月", description: "ウェブアプリ開発で主に使用している" },
    { skill: "Firebase", level: 70, period: "4ヶ月", description: "ウェブアプリ開発で主に使用している" },
    { skill: "Discord Bot開発", level: 60, period: "1ヶ月", description: "「ますかちゃん」の開発経験あり" },
    { skill: "C++", level: 70, period: "約2年", description: "学生時代に学んだ経験あり" },
    { skill: "C#", level: 75, period: "約2年", description: "ゲーム制作で使用経験あり" }
  ];
  
  // データベーススキルデータ
  const databaseSkills = [
    { skill: "Firestore", level: 70, period: "3ヶ月", description: "主に使用しているデータベース" },
    { skill: "JSON Data Handling", level: 65, period: "3ヶ月", description: "Pythonツールなどで使用しているデータベース" },
    { skill: "OpenWeatherMap", level: 60, period: "3ヶ月", description: "「進捗堂」の制作で使用経験あり" },
    { skill: "Google Books API", level: 65, period: "1ヶ月", description: "「YomuYama」の制作で使用経験あり" }
  ];
  
  // ツールスキルデータ
  const toolSkills = [
    { skill: "Unity", level: 70, period: "約1年半", description: "ゲーム開発の経験あり" },
    { skill: "Git / Github", level: 75, period: "3ヶ月", description: "制作物のGitなど" },
    { skill: "Vercel", level: 65, period: "3ヶ月", description: "普段使っているプラットフォーム" },
    { skill: "PWA", level: 60, period: "1ヶ月", description: "主なスマートフォンアプリケーション開発" },
    { skill: "VSCode", level: 80, period: "3ヶ月", description: "主な制作ツール" },
    { skill: "Visual Studio", level: 65, period: "約3年", description: "学生時代に学んだ経験あり" },
    { skill: "Eclipse", level: 60, period: "約1年半", description: "学生時代に学んだ経験あり" },
    { skill: "MOS", level: 75, period: "約2年半", description: "Excel,World,PowerPointなどの基本的な操作が可能" }
  ];
  
  // OSスキルデータ
  const osSkills = [
    { skill: "Windows", level: 90, period: "約18年", description: "基本的に使用しているOS" },
    { skill: "Linux", level: 60, period: "3ヶ月", description: "環境構築中" },
  ];

  // skillLevelに応じた色を返す関数
  const getSkillColor = (level) => {
    if (level >= 80) return "bg-blue-600";
    if (level >= 70) return "bg-green-600";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-500";
  };

  // Active tab styles
  const getTabStyle = (tab) => {
    return `px-4 py-2 font-medium rounded-md cursor-pointer transition-colors ${
      activeTab === tab 
        ? 'bg-blue-500 text-white' 
        : 'text-gray-700 hover:bg-gray-100'
    }`;
  };

  // Get current skills based on active tab
  const getCurrentSkills = () => {
    switch(activeTab) {
      case 'languages':
        return languageSkills;
      case 'databases':
        return databaseSkills;
      case 'tools':
        return toolSkills;
      case 'os':
        return osSkills;
      default:
        return languageSkills;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
        <title>スキル | 田中 敦喜のポートフォリオ</title>
        <meta name="description" content="田中 敦喜のスキルセット" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          スキルセット
        </motion.h1>
        
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              className={getTabStyle('languages')}
              onClick={() => setActiveTab('languages')}
            >
              言語・フレームワーク
            </button>
            <button 
              className={getTabStyle('databases')}
              onClick={() => setActiveTab('databases')}
            >
              データベース・API
            </button>
            <button 
              className={getTabStyle('tools')}
              onClick={() => setActiveTab('tools')}
            >
              ツール
            </button>
            <button 
              className={getTabStyle('os')}
              onClick={() => setActiveTab('os')}
            >
              OS・その他
            </button>
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab} // This forces re-render when tab changes
          >
            {getCurrentSkills().map((item, index) => (
              <motion.div 
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex items-center space-x-2 mb-2 md:mb-0">
                    <h3 className="font-semibold text-lg">{item.skill}</h3>
                    <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">{item.period}</span>
                  </div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className={`h-2.5 rounded-full ${getSkillColor(item.level)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} 田中 敦喜のポートフォリオ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}