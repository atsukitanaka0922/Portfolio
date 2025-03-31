// pages/index.jsx
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic'; // dynamic importを追加
import Navbar from '../components/Navbar';
import { FadeInWhenVisible, SlideInLeft, SlideInRight, ZoomIn } from '../components/ScrollAnimation';

// クライアントサイドのみでレンダリングするコンポーネント
const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), {
  ssr: false // サーバーサイドレンダリングを無効化
});

const AnimatedHero = dynamic(() => import('../components/AnimatedHero'), {
  ssr: false
});

const AnimatedProjectCard = dynamic(() => import('../components/AnimatedProjectCard'), {
  ssr: false
});

const AnimatedSkillBar = dynamic(() => import('../components/AnimatedSkillBar'), {
  ssr: false
});

export default function Home() {
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
    }
  ];

  // シンプルなスキルセットデータ
  const frontendSkills = [
    { skill: "React", level: 80, period: "3ヶ月", description: "ウェブアプリ開発で主に使用" },
    { skill: "Next.js", level: 75, period: "4ヶ月", description: "ポートフォリオサイトなどで使用" },
    { skill: "HTML/CSS", level: 85, period: "約2年半", description: "学生時代に学んだ経験あり" },
    { skill: "TailwindCSS", level: 70, period: "3ヶ月", description: "進捗堂の制作で使用" }
  ];
  
  const backendSkills = [
    { skill: "Python", level: 75, period: "4ヶ月", description: "PC向けアプリ開発で使用" },
    { skill: "Firebase", level: 70, period: "4ヶ月", description: "ウェブアプリ開発で使用" },
    { skill: "Git/GitHub", level: 75, period: "3ヶ月", description: "制作物のGitで使用" },
    { skill: "VSCode", level: 80, period: "3ヶ月", description: "主な制作ツール" }
  ];

  return (
    <div>
      <Head>
        <title>田中 敦喜のポートフォリオ | システムエンジニア</title>
        <meta name="description" content="システムエンジニアのポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          h1, h2, h3 {
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          
          .hero-text {
            text-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }
        `}</style>
      </Head>
      
      {/* パーティクル背景 (クライアントサイドのみ) */}
      <ParticleBackground />

      <Navbar />
      
      <main>
        {/* アニメーション付きヒーローセクション (クライアントサイドのみ) */}
        <AnimatedHero />

        {/* 主要プロジェクトセクション */}
        <section className="py-16 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">主要プロジェクト</h2>
            </FadeInWhenVisible>
            
            <div className="flex flex-wrap -mx-4">
              {/* 進捗堂 */}
              <div className="px-4 w-full md:w-1/2 lg:w-1/3 mb-8">
                <SlideInLeft delay={0.1}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                      <Image 
                        src="/images/project1.jpg" 
                        alt="進捗堂" 
                        width={400}
                        height={200}
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                      />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">進捗堂 (Shinchokudou)</h3>
                      <p className="text-gray-600 mb-4">
                        AI搭載タスク管理＆ポモドーロアプリ。ユーザーの習慣や天気に基づいたパーソナライズされたタスク提案を提供します。
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">React</span>
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">Next.js</span>
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">Firebase</span>
                      </div>
                    </div>
                  </div>
                </SlideInLeft>
              </div>
              
              {/* YomuYama */}
              <div className="px-4 w-full md:w-1/2 lg:w-1/3 mb-8">
                <SlideInLeft delay={0.2}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                      <Image 
                        src="/images/project3.jpg" 
                        alt="YomuYama" 
                        width={400}
                        height={200}
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                      />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">YomuYama</h3>
                      <p className="text-gray-600 mb-4">
                        本の管理、シリーズの整理、読書進捗の追跡を行うReactアプリ。Google Books APIを活用した書籍検索や読書状態の視覚化機能を実装。
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">React</span>
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">Material-UI</span>
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">Firebase</span>
                      </div>
                    </div>
                  </div>
                </SlideInLeft>
              </div>
            </div>
            
            <FadeInWhenVisible delay={0.3}>
              <div className="text-center mt-8">
                <Link href="/projects" className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md">
                  すべてのプロジェクトを見る
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* スキルセット */}
        <section className="py-16 bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">スキルセット</h2>
            </FadeInWhenVisible>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SlideInRight delay={0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">フロントエンド</h3>
                    
                    {frontendSkills.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.skill}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${skill.level >= 80 ? 'bg-blue-600' : 'bg-green-600'}`} 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SlideInRight>
                
                <SlideInLeft delay={0.2}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">バックエンド・ツール</h3>
                    
                    {backendSkills.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.skill}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${skill.level >= 80 ? 'bg-blue-600' : 'bg-green-600'}`} 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SlideInLeft>
              </div>
            </div>
            
            <ZoomIn delay={0.3}>
              <div className="text-center mt-8">
                <Link href="/skills" className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md">
                  詳細スキルを見る
                </Link>
              </div>
            </ZoomIn>
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