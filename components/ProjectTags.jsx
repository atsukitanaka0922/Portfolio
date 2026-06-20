// components/ProjectTags.jsx
// プロジェクト一覧のタグフィルター（Aeroガラス調・アクセシブル）。
import { motion } from 'framer-motion';

const ProjectTags = ({ tags, selectedTag, onTagSelect, tagCounts }) => {
  return (
    <div
      className="flex flex-wrap justify-center gap-3 mb-10"
      role="group"
      aria-label="プロジェクトのタグで絞り込み"
    >
      {tags.map((tag, index) => {
        const selected = selectedTag === tag;
        return (
          <motion.button
            key={tag}
            type="button"
            onClick={() => onTagSelect(tag)}
            aria-pressed={selected}
            className={
              selected
                ? 'aero-btn aero-btn--primary !py-2 !px-4 text-sm'
                : 'px-4 py-2 rounded-full text-sm font-medium aero-glass aero-glass-strong text-slate-700 hover:text-sky-700'
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <span>{tag === 'all' ? 'すべて' : tag}</span>
            {tag !== 'all' && tagCounts && tagCounts[tag] > 0 && (
              <span
                className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  selected ? 'bg-white/30 text-white' : 'bg-sky-100 text-sky-700'
                }`}
              >
                {tagCounts[tag]}
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ProjectTags;
