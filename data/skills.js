// data/skills.js
// スキル情報の単一の情報源。スキルページ・ホームページが参照します。

// スキルカテゴリ（スキルページのタブ表示）
export const skillCategories = [
  {
    key: "frontend",
    label: "フロントエンド",
    heading: "フロントエンド技術",
    description:
      "React、Next.js、TypeScriptを中心にモダンなフロントエンド開発に取り組んでいます。UIデザインにはTailwind CSSやMaterial UIを活用し、Framer Motionでアニメーション効果を実装することで、魅力的なユーザー体験を提供しています。またBootstrapやレスポンシブデザインの知識も持ち合わせており、様々な環境に対応したWebアプリケーションの開発が可能です。さらに、Radix UIやHeadless UIによるアクセシブルなUIコンポーネントの実装、i18nextを用いた多言語対応（日本語・英語・中国語・韓国語）、Web Audio APIによる音声処理にも取り組んでいます。",
    skills: [
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
      { skill: "PWA", logo: "/logos/pwa.svg", bgColor: "bg-blue-100" },
      { skill: "Radix UI", logo: "/logos/radix-ui.svg", bgColor: "bg-gray-100" },
      { skill: "Headless UI", logo: "/logos/headless-ui.svg", bgColor: "bg-cyan-100" },
      { skill: "i18next", logo: "/logos/i18next.svg", bgColor: "bg-green-100" },
      { skill: "Web Audio API", logo: "/logos/web-audio-api.svg", bgColor: "bg-orange-100" },
    ],
  },
  {
    key: "backend",
    label: "バックエンド",
    heading: "バックエンド技術",
    description:
      "PHP、Node.js、Pythonなど複数の言語を使用したバックエンド開発の経験があります。データベースはMySQLを主に使用し、FirestoreやSupabaseなどのNoSQLデータベースも扱えます。認証機能についてはNextAuth.jsやSupabase Authを使用し、セキュアなユーザー管理を実装しています。MVCアーキテクチャやオブジェクト指向プログラミングの知識を活かして、保守性の高いコードを書くことを心がけています。また、RESTful APIの設計と実装も行っています。さらに、PostgreSQLやRedisを用いたデータ管理・キャッシュ設計、BullMQによるジョブキュー（非同期処理）の実装経験もあります。",
    skills: [
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
      { skill: "JSON", logo: "/logos/json.svg", bgColor: "bg-yellow-100" },
      { skill: "PostgreSQL", logo: "/logos/postgresql.svg", bgColor: "bg-blue-100" },
      { skill: "Redis", logo: "/logos/redis.svg", bgColor: "bg-red-100" },
      { skill: "BullMQ", logo: "/logos/bullmq.svg", bgColor: "bg-red-100" },
    ],
  },
  {
    key: "api",
    label: "API・サービス",
    heading: "API・外部サービス",
    description:
      "外部APIとの連携経験があります。Google Books APIや楽天ブックス書籍検索APIを使った書籍管理アプリ、OpenWeatherMapを使った天気情報連携、Discord APIを使ったボット開発、Spotify APIを使ったプレイリスト作成・共有機能などを実装しました。また、Google Geminiなどの生成AIとの統合も模索しています。これらのAPIを活用することで、より付加価値の高いアプリケーションを開発しています。さらに、決済プラットフォームのStripe（Connect・サブスクリプション・送金など）、OpenAIやDeepLといったAI・翻訳API、メール配信のResendなどの導入・実装も行っています。",
    skills: [
      { skill: "Google Books API", logo: "/logos/google.svg", bgColor: "bg-red-100" },
      { skill: "楽天ブックスAPI", logo: "/logos/rakuten.svg", bgColor: "bg-red-100" },
      { skill: "OpenWeatherMap", logo: "/logos/openweather.svg", bgColor: "bg-blue-100" },
      { skill: "Discord API", logo: "/logos/discord.svg", bgColor: "bg-indigo-100" },
      { skill: "Google Gemini API", logo: "/logos/google.svg", bgColor: "bg-yellow-100" },
      { skill: "Spotify API", logo: "/logos/spotify.svg", bgColor: "bg-green-100" },
      { skill: "Stripe", logo: "/logos/stripe.svg", bgColor: "bg-indigo-100" },
      { skill: "OpenAI API", logo: "/logos/openai.svg", bgColor: "bg-gray-100" },
      { skill: "DeepL API", logo: "/logos/deepl.svg", bgColor: "bg-blue-100" },
      { skill: "Resend", logo: "/logos/resend.svg", bgColor: "bg-slate-100" },
    ],
  },
  {
    key: "tools",
    label: "ツール・開発環境",
    heading: "ツール・開発環境",
    description:
      "開発効率を高めるために様々なツールを活用しています。バージョン管理にはGit/GitHubを使用し、VSCodeやVisual Studioなどのエディタを使いこなしています。デプロイ先としてはVercelを主に利用しています。また、状態管理にはZustandなどのライブラリを取り入れ、よりメンテナンスしやすいコードベースを構築しています。さらに、ゲーム開発のためのUnityや、音声処理のためのFFmpegなど、プロジェクトに応じた専門的なツールも使用できます。加えて、Jest・PlaywrightによるテストやGitHub ActionsによるCI/CD、Sentryでのエラー監視、Capacitorによるモバイルアプリ化なども実践しています。",
    skills: [
      { skill: "Git", logo: "/logos/git.svg", bgColor: "bg-orange-100" },
      { skill: "GitHub", logo: "/logos/github.svg", bgColor: "bg-purple-100" },
      { skill: "Vercel", logo: "/logos/vercel.svg", bgColor: "bg-orange-100" },
      { skill: "VS Code", logo: "/logos/vscode.svg", bgColor: "bg-blue-100" },
      { skill: "Visual Studio", logo: "/logos/visualstudio.svg", bgColor: "bg-purple-100" },
      { skill: "Zustand", logo: "/logos/zustand.svg", bgColor: "bg-blue-100" },
      { skill: "Unity", logo: "/logos/unity.svg", bgColor: "bg-gray-100" },
      { skill: "FFmpeg", logo: "/logos/ffmpeg.svg", bgColor: "bg-green-100" },
      { skill: "XAMPP", logo: "/logos/xampp.svg", bgColor: "bg-orange-100" },
      { skill: "Figma", logo: "/logos/figma.svg", bgColor: "bg-purple-100" },
      { skill: "GitHub Actions", logo: "/logos/github.svg", bgColor: "bg-gray-100" },
      { skill: "Jest", logo: "/logos/jest.svg", bgColor: "bg-red-100" },
      { skill: "Playwright", logo: "/logos/playwright.svg", bgColor: "bg-green-100" },
      { skill: "Capacitor", logo: "/logos/capacitor.svg", bgColor: "bg-cyan-100" },
      { skill: "Sentry", logo: "/logos/sentry.svg", bgColor: "bg-purple-100" },
      { skill: "Google Analytics", logo: "/logos/google.svg", bgColor: "bg-yellow-100" },
    ],
  },
];

// ホームページのスキルサマリーカード
export const homeSkills = [
  {
    title: "フロントエンド開発",
    description: "React、Next.js、TypeScriptを使用したモダンなWebアプリケーション開発に焦点を当てています。",
    level: 80,
    icon: "🖥️",
  },
  {
    title: "バックエンド開発",
    description: "Firebase、Python、Node.jsを使ったサーバーサイド開発の経験があります。",
    level: 70,
    icon: "⚙️",
  },
  {
    title: "UI/UXデザイン",
    description: "使いやすいインターフェースと魅力的なユーザー体験の設計に情熱を持っています。",
    level: 75,
    icon: "🎨",
  },
  {
    title: "問題解決能力",
    description: "複雑な問題を分析し、効率的な解決策を見つけることが得意です。",
    level: 85,
    icon: "🧩",
  },
];

// スキルページ「プロジェクトでの技術活用例」セクション
export const projectSkillUsage = [
  {
    title: "進捗堂",
    description:
      "AI搭載タスク管理アプリの開発では、フロントエンドにReact、Next.js、TypeScript、Tailwind CSSを活用し、状態管理にZustandを採用しました。バックエンドにはFirebaseを使用し、リアルタイムデータベースの実装やユーザー認証を行いました。",
    tags: [
      { label: "React", color: "bg-blue-100 text-blue-800" },
      { label: "Next.js", color: "bg-gray-100 text-gray-800" },
      { label: "TypeScript", color: "bg-blue-100 text-blue-800" },
      { label: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
      { label: "Firebase", color: "bg-yellow-100 text-yellow-800" },
    ],
  },
  {
    title: "Prime Select",
    description:
      "ECサイト開発では、PHPとMySQLを使用してMVCアーキテクチャを実装し、フロントエンドにはBootstrapとjQueryを活用しました。ユーザー認証やショッピングカート、管理パネルなど、複雑な機能を実装する際にオブジェクト指向プログラミングの知識が役立ちました。",
    tags: [
      { label: "PHP", color: "bg-purple-100 text-purple-800" },
      { label: "MySQL", color: "bg-blue-100 text-blue-800" },
      { label: "Bootstrap", color: "bg-purple-100 text-purple-800" },
      { label: "jQuery", color: "bg-blue-100 text-blue-800" },
      { label: "MVC", color: "bg-gray-100 text-gray-800" },
    ],
  },
  {
    title: "YomuYama",
    description:
      "書籍管理アプリでは、ReactとMaterial UIを使ってモダンなUIを構築しました。Google Books APIと楽天ブックス書籍検索APIを活用して書籍検索機能を実装し、Firebaseでユーザーデータを管理しています。PWAとして実装することで、モバイルでも快適に使用できるようになっています。",
    tags: [
      { label: "React", color: "bg-blue-100 text-blue-800" },
      { label: "Material UI", color: "bg-blue-100 text-blue-800" },
      { label: "Firebase", color: "bg-yellow-100 text-yellow-800" },
      { label: "Google Books API", color: "bg-red-100 text-red-800" },
      { label: "PWA", color: "bg-blue-100 text-blue-800" },
    ],
  },
  {
    title: "キュアサークル",
    description:
      "プリキュアファン向けのプロフィール作成・共有サービスでは、Next.jsとReactでフロントエンドを構築し、TailwindCSSでデザインを実装しました。認証機能にはNextAuth.jsを使用し、データベースとファイルストレージにはSupabaseを活用しています。また、Spotify APIとの連携によりプレイリスト作成・共有機能を実現しています。",
    tags: [
      { label: "Next.js", color: "bg-gray-100 text-gray-800" },
      { label: "React", color: "bg-blue-100 text-blue-800" },
      { label: "TailwindCSS", color: "bg-cyan-100 text-cyan-800" },
      { label: "NextAuth.js", color: "bg-blue-100 text-blue-800" },
      { label: "Supabase", color: "bg-green-100 text-green-800" },
      { label: "Spotify API", color: "bg-green-100 text-green-800" },
    ],
  },
  {
    title: "ポートフォリオサイト",
    description:
      "このポートフォリオサイトでは、Next.jsとReactをベースに、Tailwind CSSでスタイリングを行い、Framer Motionで様々なアニメーション効果を実装しました。Frutiger Aeroをテーマにしたガラス調のUIで、あらゆるデバイスで最適に表示されるよう設計しています。",
    tags: [
      { label: "Next.js", color: "bg-gray-100 text-gray-800" },
      { label: "React", color: "bg-blue-100 text-blue-800" },
      { label: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
      { label: "Framer Motion", color: "bg-purple-100 text-purple-800" },
      { label: "Responsive Design", color: "bg-green-100 text-green-800" },
    ],
  },
];

export default skillCategories;
