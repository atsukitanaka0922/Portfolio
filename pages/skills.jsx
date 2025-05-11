// pages/skills.jsx
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

// スキルロゴコンポーネント
const SkillLogo = ({ skill, logo, bgColor }) => {
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow`}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div 
        className={`w-16 h-16 flex items-center justify-center rounded-full mb-3 ${bgColor} p-2`}
      >
        <Image 
          src={logo}
          alt={`${skill} logo`}
          width={40}
          height={40}
          style={{ 
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "100%"
          }}
        />
      </div>
      <p className="font-medium text-center text-sm mt-1">{skill}</p>
    </motion.div>
  );
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  // 言語・フレームワークスキルデータ
  const languageSkills = [
    { skill: "HTML5", logo: "/logos/html5.svg", bgColor: "bg-orange-100" },
    { skill: "CSS", logo: "/logos/css.svg", bgColor: "bg-blue-100" },
    { skill: "JavaScript", logo: "/logos/javascript.svg", bgColor: "bg-yellow-100" },
    { skill: "TypeScript", logo: "/logos/typescript.svg", bgColor: "bg-blue-100" },
    { skill: "React", logo: "/logos/react.svg", bgColor: "bg-blue-100" },
    { skill: "Next.js", logo: "/logos/nextjs.svg", bgColor: "bg-gray-100" },
    { skill: "Material-UI", logo: "/logos/material-ui.svg", bgColor: "bg-blue-100" },
    { skill: "TailwindCSS", logo: "/logos/tailwindcss.svg", bgColor: "bg-cyan-100" },
    { skill: "Framer Motion", logo: "/logos/framer.svg", bgColor: "bg-purple-100" },
    { skill: "Python", logo: "/logos/python.svg", bgColor: "bg-green-100" },
    { skill: "Node.js", logo: "/logos/nodejs.svg", bgColor: "bg-green-100" },
    { skill: "Firebase", logo: "/logos/firebase.svg", bgColor: "bg-yellow-100" },
    { skill: "Discord.js", logo: "/logos/discord.svg", bgColor: "bg-indigo-100" },
    { skill: "C++", logo: "/logos/cpp.svg", bgColor: "bg-gray-100" },
    { skill: "C#", logo: "/logos/c.svg", bgColor: "bg-green-100" }
  ];
  
  // データベース・APIスキルデータ
  const databaseSkills = [
    { skill: "Firestore", logo: "/logos/firebase.svg", bgColor: "bg-yellow-100" },
    { skill: "JSON", logo: "/logos/json.svg", bgColor: "bg-yellow-100" },
    { skill: "OpenWeatherMap", logo: "/logos/openweather.svg", bgColor: "bg-blue-100" },
    { skill: "Google Books API", logo: "/logos/google.svg", bgColor: "bg-red-100" },
    { skill: "楽天ブックス書籍検索API", logo: "/logos/rakuten.svg", bgColor: "bg-blue-100" }
  ];
  
  // ツールスキルデータ
  const toolSkills = [
    { skill: "Unity", logo: "/logos/unity.svg", bgColor: "bg-gray-100" },
    { skill: "Git", logo: "/logos/git.svg", bgColor: "bg-orange-100" },
    { skill: "GitHub", logo: "/logos/github.svg", bgColor: "bg-purple-100" },
    { skill: "Vercel", logo: "/logos/vercel.svg", bgColor: "bg-gray-100" },
    { skill: "PWA", logo: "/logos/pwa.svg", bgColor: "bg-blue-100" },
    { skill: "VS Code", logo: "/logos/vscode.svg", bgColor: "bg-blue-100" },
    { skill: "Visual Studio", logo: "/logos/visualstudio.svg", bgColor: "bg-purple-100" },
    { skill: "Eclipse IDE", logo: "/logos/eclipseide.svg", bgColor: "bg-orange-100" },
    { skill: "Microsoft Office", logo: "/logos/office.svg", bgColor: "bg-green-100" },
    { skill: "LibreOffice", logo: "/logos/libreoffice.svg", bgColor: "bg-blue-100" },
    { skill: "Canva", logo: "/logos/canva.svg", bgColor: "bg-orange-100" },
    { skill: "Google Gemini", logo: "/logos/googlegemini.svg", bgColor: "bg-blue-100" },
    { skill: "Claude", logo: "/logos/claude.svg", bgColor: "bg-orange-100" },
    { skill: "ChatGPT", logo: "/logos/openai.svg", bgColor: "bg-green-100" }
  ];
  
  // OSスキルデータ
  const osSkills = [
    { skill: "Windows", logo: "/logos/windows.svg", bgColor: "bg-blue-100" },
    { skill: "Linux", logo: "/logos/linux.svg", bgColor: "bg-green-100" },
  ];

  // Active tab styles
  const getTabStyle = (tab) => {
    return `px-4 py-2 font-medium rounded-lg cursor-pointer transition-colors ${
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
        
        <div className="max-w-6xl mx-auto">
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
          
          {/* Skills Grid - スマホのホーム画面のようなグリッド */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab} // This forces re-render when tab changes
          >
            {getCurrentSkills().map((skill, index) => (
              <motion.div 
                key={`${activeTab}-${index}`}
                variants={itemVariants}
              >
                <SkillLogo 
                  skill={skill.skill} 
                  logo={skill.logo} 
                  bgColor={skill.bgColor} 
                />
              </motion.div>
            ))}
          </motion.div>

          {/* カテゴリの説明 */}
          <motion.div
            className="mt-12 bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">
              {activeTab === 'languages' && '言語・フレームワークについて'}
              {activeTab === 'databases' && 'データベース・APIについて'}
              {activeTab === 'tools' && 'ツールについて'}
              {activeTab === 'os' && 'OS・その他について'}
            </h2>
            <p className="text-gray-700">
              {activeTab === 'languages' && 'フロントエンド開発では主にReact、Next.js、TypeScriptを使用しています。また、UIデザインにはTailwind CSS、アニメーションにはFramer Motionを活用しています。バックエンドではNode.jsとFirebaseを使用し、Python、C#などのバックエンド言語も経験があります。'}
              {activeTab === 'databases' && 'データベースはFirestoreを中心に使用しています。APIではOpenWeatherMapやGoogle Books APIなどの外部APIを活用した開発経験があります。'}
              {activeTab === 'tools' && '開発環境としてはVSCodeを主に使用し、バージョン管理にはGit/GitHubを活用しています。デプロイにはVercelを使用し、PWAの開発経験もあります。ゲーム開発ではUnityの経験もあります。'}
              {activeTab === 'os' && '主にWindowsを使用していますが、Linuxの基本的な知識もあります。'}
            </p>
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