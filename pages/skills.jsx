// pages/skills.jsx
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { skillCategories, projectSkillUsage } from '../data/skills';

// スキルロゴタイル
const SkillLogo = ({ skill, logo, bgColor }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 aero-glass h-full"
    whileHover={{ y: -5, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-3 ${bgColor} p-2`}>
      {logo ? (
        <Image
          src={logo}
          alt={`${skill} のロゴ`}
          width={40}
          height={40}
          style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
        />
      ) : (
        // ロゴ画像が無いスキルは頭文字でフォールバック表示
        <span className="text-xl font-bold text-slate-700" aria-hidden="true">
          {skill.charAt(0)}
        </span>
      )}
    </div>
    <p className="font-medium text-center text-sm text-slate-700">{skill}</p>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const [activeKey, setActiveKey] = useState(skillCategories[0].key);
  const activeCategory = skillCategories.find((c) => c.key === activeKey);

  return (
    <Layout title="スキル" description="田中 敦喜のスキルセット。フロントエンド・バックエンド・API・ツールの一覧。">
      <div className="pt-28 pb-16 container mx-auto px-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-10 text-center aero-gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          スキルセット
        </motion.h1>

        <div className="max-w-6xl mx-auto">
          {/* タブ */}
          <div role="tablist" aria-label="スキルカテゴリ" className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((category) => {
              const selected = activeKey === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  role="tab"
                  id={`tab-${category.key}`}
                  aria-selected={selected}
                  aria-controls={`panel-${category.key}`}
                  onClick={() => setActiveKey(category.key)}
                  className={
                    selected
                      ? 'aero-btn aero-btn--primary !py-2 !px-4 text-sm'
                      : 'px-4 py-2 rounded-full text-sm font-medium aero-glass aero-glass-strong text-slate-700 hover:text-sky-700'
                  }
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* スキルグリッド */}
          <div role="tabpanel" id={`panel-${activeKey}`} aria-labelledby={`tab-${activeKey}`}>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeKey}
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div key={`${activeKey}-${index}`} variants={itemVariants}>
                  <SkillLogo {...skill} />
                </motion.div>
              ))}
            </motion.div>

            {/* カテゴリ説明 */}
            <motion.div
              className="mt-10 aero-glass aero-glass-strong p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={`desc-${activeKey}`}
            >
              <h2 className="text-xl font-semibold mb-4 text-slate-800">{activeCategory.heading}</h2>
              <p className="text-slate-700 leading-relaxed">{activeCategory.description}</p>
            </motion.div>
          </div>
        </div>

        {/* プロジェクト別の技術活用例 */}
        <div className="max-w-6xl mx-auto mt-14">
          <motion.h2
            className="text-2xl font-bold mb-6 text-center aero-gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            プロジェクトでの技術活用例
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectSkillUsage.map((project, index) => (
              <motion.div
                key={index}
                className="aero-glass p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{project.title}</h3>
                <p className="mb-3 text-slate-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-2 py-1 rounded-full text-xs ${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
