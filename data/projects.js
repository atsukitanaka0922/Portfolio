// data/projects.js
// プロジェクト情報の単一の情報源（Single Source of Truth）。
// ホームページ・プロジェクト一覧ページの両方がここを参照します。
// 新しい制作物を追加するときは、この配列に1件追加するだけで全ページに反映されます。

export const projects = [
  {
    id: 1,
    title: "進捗堂 (Shinchokudou)",
    description:
      "AI搭載タスク管理アプリ。ユーザーの習慣、天気、時間帯を考慮したパーソナライズされたタスク提案とポモドーロタイマーを提供します。",
    image: "/images/project1.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zustand", "Framer Motion"],
    // デモは公開を終了したため掲載していません。
    githubUrl: "https://github.com/atsukitanaka0922/shinchokudou",
    pdfUrl: "/pdfs/shinchokudou.pdf",
    tag: "アプリ",
    featured: true,
  },
  {
    id: 2,
    title: "勝率チェッカー",
    description:
      "リーグ戦の大会管理、チーム・選手の成績管理、勝率計算を行うPythonコンソールアプリケーション。スポーツ大会やゲーム大会の試合結果を追跡します。",
    image: "/images/project2.jpg",
    technologies: ["Python", "JSON", "OOP"],
    githubUrl: "https://github.com/atsukitanaka0922/SyoritsuChecker",
    tag: "ツール",
  },
  {
    id: 3,
    title: "YomuYama",
    description:
      "本の管理、シリーズの整理、読書進捗の追跡を行うReactウェブアプリケーション。Google Books APIを活用した書籍検索や読書タワーによる視覚化機能を搭載。",
    image: "/images/project3.jpg",
    technologies: ["React", "Material-UI", "Firebase", "Google Books API", "楽天ブックス書籍検索API", "PWA", "Framer Motion"],
    demoUrl: "https://yomuyama.com/",
    pdfUrl: "/pdfs/yomuyama.pdf",
    tag: "アプリ",
  },
  {
    id: 4,
    title: "ますかちゃん (Discord録音ボット)",
    description:
      "Discordの音声チャンネルでの会話を自動的に録音し、MP3ファイルとして保存するDiscordボット。10分ごとのファイル分割機能付き。名前の元ネタは友人が昔作ったオリキャラから。",
    image: "/images/project4.jpg",
    technologies: ["Python", "Discord.py", "FFmpeg"],
    githubUrl: "https://github.com/atsukitanaka0922/Mascachan",
    tag: "ツール",
  },
  {
    id: 5,
    title: "Prime Select (模擬ECサイト)",
    description:
      "PHPとMySQLで構築された模擬ECサイト。ユーザー認証、商品カタログ、ショッピングカート、チェックアウトプロセス、管理パネルなど、実務レベルの機能を実装。商品画像などにはGoogle Geminiでの画像生成を用いている。",
    image: "/images/project6.jpg",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "HTML", "CSS", "Google Gemini"],
    githubUrl: "https://github.com/atsukitanaka0922/primeselect",
    pdfUrl: "/pdfs/primeselect.pdf",
    videoUrl: "nKyDnXT3Ptw",
    tag: "サイト",
    featured: true,
  },
  {
    id: 6,
    title: "ポートフォリオサイト",
    description:
      "Next.js、Tailwind CSS、Framer Motionを使用して開発した、このポートフォリオサイト。Frutiger Aeroをテーマにしたガラス調のUIと、水のようなアニメーションを活用したモダンなデザインで、レスポンシブにも対応。",
    image: "/images/project5.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/atsukitanaka0922",
    tag: "サイト",
  },
  {
    id: 7,
    title: "キュアサークル (Cure Circle)",
    description:
      "プリキュアファン向けのプロフィール作成・共有サービス。お気に入りのプリキュアシリーズやキャラクターを登録し、デジタル名刺の作成、画像ギャラリーの管理、プレイリスト作成・共有（Spotify連携）、テーマ設定など、ファン同士の交流を促進するプラットフォーム。",
    image: "/images/project7.jpg",
    technologies: ["Next.js", "React", "TailwindCSS", "NextAuth.js", "Supabase", "Spotify API"],
    demoUrl: "https://www.curecircle.net/",
    pdfUrl: "/pdfs/curecircle.pdf",
    tag: "サイト",
    featured: true,
  },
];

// ホームページに表示する注目プロジェクト
export const featuredProjects = projects.filter((project) => project.featured);

export default projects;
