// pages/projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import DetailProjectCard from '../components/DetailProjectCard';
import ProjectTags from '../components/ProjectTags';
import { projects } from '../data/projects';

// 利用可能なすべてのタグ
const allTags = ['all', ...new Set(projects.map((p) => p.tag))];

// 各タグの件数
const tagCounts = allTags.reduce((acc, tag) => {
  if (tag !== 'all') acc[tag] = projects.filter((p) => p.tag === tag).length;
  return acc;
}, {});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredProjects =
    selectedTag === 'all' ? projects : projects.filter((p) => p.tag === selectedTag);

  return (
    <Layout title="プロジェクト" description="田中 敦喜が制作したWebアプリ・サイト・ツールの一覧。">
      <div className="pt-28 pb-16 container mx-auto px-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-center aero-gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          プロジェクト
        </motion.h1>

        <ProjectTags
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
          tagCounts={tagCounts}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTag}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <DetailProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">選択したタグに一致するプロジェクトが見つかりませんでした。</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
