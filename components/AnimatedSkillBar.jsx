// components/AnimatedSkillBar.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSkillBar = ({ skill, level, period, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // スキルレベルに応じた色を返す関数
  const getSkillColor = (level) => {
    if (level >= 80) return "bg-blue-600";
    if (level >= 70) return "bg-green-600";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div ref={ref} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <motion.h3 
            className="font-semibold text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.h3>
          <motion.span 
            className="text-sm bg-gray-200 px-2 py-0.5 rounded-full"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {period}
          </motion.span>
        </div>
        <motion.div 
          className="text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${getSkillColor(level)}`} 
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;