// pages/skills.jsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import SkillBar from '../components/SkillBar';

export default function Skills() {
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

  return (
    <div>
      <Head>
        <title>スキル | 田中 敦喜のポートフォリオ</title>
        <meta name="description" content="田中 敦喜のスキルセット" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 text-center">スキルセット</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">言語・フレームワーク</h2>
            <div className="grid grid-cols-1 gap-y-4">
              {languageSkills.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <h3 className="font-semibold text-lg">{item.skill}</h3>
                      <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">{item.period}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getSkillColor(item.level)}`} 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">データベース・API</h2>
            <div className="grid grid-cols-1 gap-y-4">
              {databaseSkills.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <h3 className="font-semibold text-lg">{item.skill}</h3>
                      <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">{item.period}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getSkillColor(item.level)}`} 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">ツール</h2>
            <div className="grid grid-cols-1 gap-y-4">
              {toolSkills.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <h3 className="font-semibold text-lg">{item.skill}</h3>
                      <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">{item.period}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getSkillColor(item.level)}`} 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">OS・その他</h2>
            <div className="grid grid-cols-1 gap-y-4">
              {osSkills.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <h3 className="font-semibold text-lg">{item.skill}</h3>
                      <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">{item.period}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getSkillColor(item.level)}`} 
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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