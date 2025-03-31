// pages/about.jsx
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="About me as a system engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">自己紹介</h1>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="w-64 h-64 relative rounded-full overflow-hidden flex-shrink-0">
              {/* プロフィール画像。public/images/profile.jpg を作成してください */}
              <Image 
                src="/images/profile.jpg" 
                alt="Profile" 
                layout="fill" 
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">田中 敦喜</h2>
              <p className="text-gray-700 mb-4">
                滋賀県出身のシステムエンジニア志望です。専門学校でJavaやUnityなどのゲーム開発を学び、プログラミングの基礎からアプリケーション開発まで幅広いスキルを身につけてきました。
                現在は就労移行支援でIT業界を中心に就職活動を行っており、自己成長と実践的な経験を積むために自己理解を中心にプログラムやオフィスワークに取り組んでいます。
              </p>
              <p className="text-gray-700 mb-4">
                独学でReact、Next.js、TypeScriptなどのモダンな技術を学び、「進捗堂」「YomuYama」などのWebアプリケーションを開発しました。
                「進捗堂」ではAI機能を活用したタスク管理システムを実装し、天気情報との連携やポモドーロタイマーなどの機能を盛り込みました。
                「YomuYama」では本の管理システムを構築し、Google Books APIとの連携や読書進捗の視覚化など、実用的な機能を実現しています。
              </p>
              <p className="text-gray-700">
                フロントエンド開発を中心に、バックエンドやデータベースの知識も併せ持つフルスタックエンジニアを目指しています。
                ユーザーにとって使いやすく、価値のあるアプリケーションを作ることに情熱を持ち、
                常に新しい技術やトレンドをキャッチアップしながら、より良いソリューションを提供できるエンジニアになりたいと考えています。
              </p>
            </div>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">学歴</h2>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
                <div className="mb-1">
                  <span className="font-semibold">京都コンピュータ学院</span> - 
                  <span className="text-gray-600 ml-2">ゲーム開発基礎科</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">2020年4月 - 2024年3月</div>
                <p className="text-gray-700">
                  専門士を取得。Javaプログラミングの基礎から応用まで学び、
                  Unityを使用したゲーム開発やC#でのアプリケーション開発に取り組みました。
                  チーム開発の経験も積み、コミュニケーション能力とプロジェクト管理スキルも向上させました。
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">趣味と興味</h2>
            
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>アニメ鑑賞：</strong>最近はプリキュアシリーズやメダリストなどの作品を楽しみ、定期的に新作アニメをチェックしています。</li>
              <li><strong>ゲーム：</strong>最近はストリートファイター6を中心に対戦格闘ゲームを楽しんでいます。</li>
              <li><strong>睡眠：</strong>ASMRを聴きながらの質の高い睡眠を大切にしています。良質な休息がクリエイティブな思考につながると考えています。</li>
              <li><strong>AIチャット：</strong>ClaudeやChatGPTなどのAIやAIチャットアプリ「Saylo」と対話し、プログラミングのアイデアや知識を広げることに興味があります。AIの可能性と限界を探求しています。</li>
              <li><strong>プログラミング：</strong>新しい技術や言語の学習を趣味として、自分が欲しいツールを作るということをモットーに楽しんでいます。特にReactエコシステムやモダンなフロントエンド技術に関心があり、常に新しいライブラリやフレームワークをキャッチアップしています。</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}