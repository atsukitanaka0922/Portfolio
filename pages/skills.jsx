// pages/skills.jsx
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

// スキルロゴコンポーネント（レベル表示なし）
const SkillLogo = ({ skill, logo, bgColor }) => {
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow relative`}
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
      <p className="font-medium text-center text-sm">{skill}</p>
    </motion.div>
  );
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  // フロントエンドスキルデータ
  const frontendSkills = [
    { skill: "React", logo: "/logos/react.svg", bgColor: "bg-blue-100" },
    { skill: "Next.js", logo: "/logos/nextjs.svg", bgColor: "bg-gray-100" },
    { skill: "TypeScript", logo: "/logos/typescript.svg", bgColor: "bg-blue-100" },
    { skill: "JavaScript", logo: "/logos/javascript.svg", bgColor: "bg-yellow-100" },
    { skill: "HTML5", logo: "/logos/html5.svg", bgColor: "bg-orange-100" },
    { skill: "CSS", logo: "/logos/css.svg", bgColor: "bg-blue-100" },
    { skill: "Tailwind CSS", logo: "/logos/tailwindcss.svg", bgColor: "bg-cyan-100" },
    { skill: "Material UI", logo: "/logos/material-ui.svg", bgColor: "bg-blue-100" },
    { skill: "Framer Motion", logo: "/logos/framer.svg", bgColor: "bg-purple-100" },
    { skill: "Bootstrap", logo: "/logos/bootstrap.svg", bgColor: "bg-purple-100" },
    { skill: "jQuery", logo: "/logos/jquery.svg", bgColor: "bg-blue-100" },
    { skill: "PWA", logo: "/logos/pwa.svg", bgColor: "bg-blue-100" }
  ];
  
  // バックエンドスキルデータ
  const backendSkills = [
    { skill: "PHP", logo: "/logos/php.svg", bgColor: "bg-purple-100" },
    { skill: "Node.js", logo: "/logos/nodejs.svg", bgColor: "bg-green-100" },
    { skill: "Python", logo: "/logos/python.svg", bgColor: "bg-green-100" },
    { skill: "Firebase", logo: "/logos/firebase.svg", bgColor: "bg-yellow-100" },
    { skill: "Supabase", logo: "/logos/supabase.svg", bgColor: "bg-green-100" },
    { skill: "MySQL", logo: "/logos/mysql.svg", bgColor: "bg-blue-100" },
    { skill: "MongoDB", logo: "/logos/mongodb.svg", bgColor: "bg-green-100" },
    { skill: "Firestore", logo: "/logos/firebase.svg", bgColor: "bg-yellow-100" },
    { skill: "NextAuth.js", logo: "/logos/nextjs.svg", bgColor: "bg-blue-100" },
    { skill: "C#", logo: "/logos/c.svg", bgColor: "bg-green-100" },
    { skill: "C++", logo: "/logos/cpp.svg", bgColor: "bg-gray-100" },
    { skill: "JSON", logo: "/logos/json.svg", bgColor: "bg-yellow-100" }
  ];
  
  // 外部APIとサービス
  const apiSkills = [
    { skill: "Google Books API", logo: "/logos/google.svg", bgColor: "bg-red-100" },
    { skill: "楽天ブックスAPI", logo: "/logos/rakuten.svg", bgColor: "bg-red-100" },
    { skill: "OpenWeatherMap", logo: "/logos/openweather.svg", bgColor: "bg-blue-100" },
    { skill: "Discord API", logo: "/logos/discord.svg", bgColor: "bg-indigo-100" },
    { skill: "Google Gemini API", logo: "/logos/google.svg", bgColor: "bg-yellow-100" },
    { skill: "Spotify API", logo: "/logos/spotify.svg", bgColor: "bg-green-100" }
  ];
  
  // ツールとデプロイスキルデータ
  const toolSkills = [
    { skill: "Git", logo: "/logos/git.svg", bgColor: "bg-orange-100" },
    { skill: "GitHub", logo: "/logos/github.svg", bgColor: "bg-purple-100" },
    { skill: "Vercel", logo: "/logos/vercel.svg", bgColor: "bg-orange-100" },
    { skill: "VS Code", logo: "/logos/vscode.svg", bgColor: "bg-blue-100" },
    { skill: "Visual Studio", logo: "/logos/visualstudio.svg", bgColor: "bg-purple-100" },
    { skill: "Zustand", logo: "/logos/zustand.svg", bgColor: "bg-blue-100" },
    { skill: "Unity", logo: "/logos/unity.svg", bgColor: "bg-gray-100" },
    { skill: "FFmpeg", logo: "/logos/ffmpeg.svg", bgColor: "bg-green-100" },
    { skill: "XAMPP", logo: "/logos/xampp.svg", bgColor: "bg-orange-100" },
    { skill: "Figma", logo: "/logos/figma.svg", bgColor: "bg-purple-100" }
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
      case 'frontend':
        return frontendSkills;
      case 'backend':
        return backendSkills;
      case 'api':
        return apiSkills;
      case 'tools':
        return toolSkills;
      default:
        return frontendSkills;
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
              className={getTabStyle('frontend')}
              onClick={() => setActiveTab('frontend')}
            >
              フロントエンド
            </button>
            <button 
              className={getTabStyle('backend')}
              onClick={() => setActiveTab('backend')}
            >
              バックエンド
            </button>
            <button 
              className={getTabStyle('api')}
              onClick={() => setActiveTab('api')}
            >
              API・サービス
            </button>
            <button 
              className={getTabStyle('tools')}
              onClick={() => setActiveTab('tools')}
            >
              ツール・開発環境
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
              {activeTab === 'frontend' && 'フロントエンド技術'}
              {activeTab === 'backend' && 'バックエンド技術'}
              {activeTab === 'api' && 'API・外部サービス'}
              {activeTab === 'tools' && 'ツール・開発環境'}
            </h2>
            <p className="text-gray-700">
              {activeTab === 'frontend' && 'React、Next.js、TypeScriptを中心にモダンなフロントエンド開発に取り組んでいます。UIデザインにはTailwind CSSやMaterial UIを活用し、Framer Motionでアニメーション効果を実装することで、魅力的なユーザー体験を提供しています。またBootstrapやレスポンシブデザインの知識も持ち合わせており、様々な環境に対応したWebアプリケーションの開発が可能です。'}
              {activeTab === 'backend' && 'PHP、Node.js、Pythonなど複数の言語を使用したバックエンド開発の経験があります。データベースはMySQLを主に使用し、FirestoreやSupabaseなどのNoSQLデータベースも扱えます。認証機能についてはNextAuth.jsやSupabase Authを使用し、セキュアなユーザー管理を実装しています。MVCアーキテクチャやオブジェクト指向プログラミングの知識を活かして、保守性の高いコードを書くことを心がけています。また、RESTful APIの設計と実装も行っています。'}
              {activeTab === 'api' && '外部APIとの連携経験があります。Google Books APIや楽天ブックス書籍検索APIを使った書籍管理アプリ、OpenWeatherMapを使った天気情報連携、Discord APIを使ったボット開発、Spotify APIを使ったプレイリスト作成・共有機能などを実装しました。また、Google Geminiなどの生成AIとの統合も模索しています。これらのAPIを活用することで、より付加価値の高いアプリケーションを開発しています。'}
              {activeTab === 'tools' && '開発効率を高めるために様々なツールを活用しています。バージョン管理にはGit/GitHubを使用し、VSCodeやVisual Studioなどのエディタを使いこなしています。デプロイ先としてはVercelを主に利用しています。また、状態管理にはZustandなどのライブラリを取り入れ、よりメンテナンスしやすいコードベースを構築しています。さらに、ゲーム開発のためのUnityや、音声処理のためのFFmpegなど、プロジェクトに応じた専門的なツールも使用できます。'}
            </p>
          </motion.div>
        </div>
        
        {/* プロジェクト別スキル活用セクション */}
        <div className="max-w-6xl mx-auto mt-12">
          <motion.h2 
            className="text-2xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            プロジェクトでの技術活用例
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">進捗堂</h3>
              <p className="mb-3 text-gray-700">AI搭載タスク管理アプリの開発では、フロントエンドにReact、Next.js、TypeScript、Tailwind CSSを活用し、状態管理にZustandを採用しました。バックエンドにはFirebaseを使用し、リアルタイムデータベースの実装やユーザー認証を行いました。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Next.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">Tailwind CSS</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Firebase</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Prime Select</h3>
              <p className="mb-3 text-gray-700">ECサイト開発では、PHPとMySQLを使用してMVCアーキテクチャを実装し、フロントエンドにはBootstrapとjQueryを活用しました。ユーザー認証やショッピングカート、管理パネルなど、複雑な機能を実装する際にオブジェクト指向プログラミングの知識が役立ちました。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">PHP</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">MySQL</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Bootstrap</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">jQuery</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">MVC</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">YomuYama</h3>
              <p className="mb-3 text-gray-700">書籍管理アプリでは、ReactとMaterial UIを使ってモダンなUIを構築しました。Google Books APIと楽天ブックス書籍検索APIを活用して書籍検索機能を実装し、Firebaseでユーザーデータを管理しています。PWAとして実装することで、モバイルでも快適に使用できるようになっています。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">React</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Material UI</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Firebase</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Google Books API</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">PWA</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">キュアサークル</h3>
              <p className="mb-3 text-gray-700">プリキュアファン向けのプロフィール作成・共有サービスでは、Next.jsとReactでフロントエンドを構築し、TailwindCSSでデザインを実装しました。認証機能にはNextAuth.jsを使用し、データベースとファイルストレージにはSupabaseを活用しています。また、Spotify APIとの連携によりプレイリスト作成・共有機能を実現しています。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Next.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">React</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">TailwindCSS</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">NextAuth.js</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Supabase</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Spotify API</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">ポートフォリオサイト</h3>
              <p className="mb-3 text-gray-700">このポートフォリオサイトでは、Next.jsとReactをベースに、Tailwind CSSでスタイリングを行い、Framer Motionで様々なアニメーション効果を実装しました。レスポンシブデザインを考慮して、あらゆるデバイスで最適な表示になるよう設計しています。</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Next.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">React</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs">Tailwind CSS</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Framer Motion</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Responsive Design</span>
              </div>
            </div>
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