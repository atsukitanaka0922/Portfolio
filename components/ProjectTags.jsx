// components/ProjectTags.jsx
import { motion } from 'framer-motion';

const ProjectTags = ({ tags, selectedTag, onTagSelect, tagCounts }) => {
  // タグの色を決定する関数
  const getTagColor = (tag, isSelected) => {
    if (isSelected) {
      return 'bg-blue-600 text-white';
    }
    
    switch(tag) {
      case 'アプリ':
        return 'bg-white text-blue-800 border border-blue-200 hover:bg-blue-50';
      case 'ツール':
        return 'bg-white text-green-800 border border-green-200 hover:bg-green-50';
      case 'サイト':
        return 'bg-white text-purple-800 border border-purple-200 hover:bg-purple-50';
      default:
        return 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50';
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 mb-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {tags.map((tag, index) => (
        <motion.button
          key={tag}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            getTagColor(tag, selectedTag === tag)
          }`}
          onClick={() => onTagSelect(tag)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {tag === 'all' ? 'すべて' : tag}
          {tag !== 'all' && tagCounts && tagCounts[tag] > 0 && (
            <span className={`ml-2 ${selectedTag === 'all' ? 'bg-gray-200 text-gray-700' : 'bg-white/20 text-white'} text-xs px-2 py-0.5 rounded-full`}>
              {tagCounts[tag]}
            </span>
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectTags;