// pages/index.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import DetailProjectCard from '../components/DetailProjectCard';
import { featuredProjects } from '../data/projects';
import { homeSkills } from '../data/skills';
import { profile } from '../data/profile';

// タイピングエフェクト用のカスタムフック
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, delayAfterType = 2000) => {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const handleTyping = () => {
      const currentText = texts[typingIndex % texts.length];
      setTypingText((current) =>
        isDeleting ? currentText.substring(0, current.length - 1) : currentText.substring(0, current.length + 1)
      );

      if (!isDeleting && typingText === currentText) {
        setTimeout(() => setIsDeleting(true), delayAfterType);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setTypingIndex((i) => i + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [typingText, typingIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayAfterType]);

  return typingText;
};

// ヒーローセクション
const Hero = () => {
  const texts = [
    'Reactとバックエンド技術でWebアプリを構築します',
    '使いやすいUIの設計が得意です',
    '新しい技術の学習に情熱を持っています',
    '問題解決のためのコードを書くことが好きです',
  ];
  const typingText = useTypingEffect(texts, 80, 40, 3000);

  return (
    <section
      className="relative overflow-hidden text-white px-4 pt-32 pb-28 md:pt-40 md:pb-36"
      style={{
        background:
          'linear-gradient(135deg, #1565c0 0%, #1e88e5 32%, #26c6da 66%, #66bb6a 100%)',
      }}
    >
      {/* 上端のガラスのてかり */}
      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {profile.name}
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl mb-8 hero-text h-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>{typingText}</span>
          <span className="inline-block w-0.5 h-5 ml-1 bg-current animate-blink" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link href="/projects" className="aero-btn aero-btn--ghost">プロジェクトを見る</Link>
          <Link href="/about" className="aero-btn aero-btn--primary">自己紹介を見る</Link>
        </motion.div>
      </div>
    </section>
  );
};

// スキルサマリーカード
const SkillCard = ({ title, description, level, icon }) => (
  <motion.div className="aero-glass p-6 h-full" whileHover={{ y: -5 }}>
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3" aria-hidden="true">{icon}</span>
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
    </div>
    <p className="text-slate-600 mb-4">{description}</p>
    <div className="w-full bg-white/60 rounded-full h-2.5 overflow-hidden" role="presentation">
      <motion.div
        className="h-2.5 rounded-full"
        style={{ background: 'linear-gradient(to right, #1e88e5, #26c6da, #66bb6a)' }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <Layout
      title="システムエンジニア"
      description="システムエンジニア 田中 敦喜のポートフォリオ。制作したWebアプリやスキル、経歴を紹介しています。"
    >
      <Hero />

      {/* 主要プロジェクト */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 aero-gradient-text"
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
            viewport={{ once: true, margin: '-100px' }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <DetailProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/projects" className="aero-btn aero-btn--primary">すべてのプロジェクトを見る</Link>
          </div>
        </div>
      </section>

      {/* スキルセット */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 aero-gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            スキルセット
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {homeSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-10">
              <Link href="/skills" className="aero-btn aero-btn--green">詳細スキルを見る</Link>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトCTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="aero-glass aero-glass-strong px-6 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4 aero-gradient-text">お問い合わせ</h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              このサイトや制作物についてのご質問・ご感想は、お気軽にお寄せください。
            </p>
            <Link href="/contact" className="aero-btn aero-btn--primary">お問い合わせフォーム</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
