'use client'

// components/CircularSkill.jsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CircularSkill = ({ skill, level, period, description, color = "#3B82F6" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate stroke-dashoffset based on skill level
  // circumference = 2πr (r = 40 in this case)
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (level / 100) * circumference;

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mb-4">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke="#E5E7EB" 
            strokeWidth="8"
            className="dark:stroke-gray-700"
          />
          
          {/* Progress circle */}
          <motion.circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke={color} 
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: progressOffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              transformOrigin: 'center',
              transform: 'rotate(-90deg)',
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {level}%
          </motion.span>
        </div>
      </div>
      
      {/* Skill info */}
      <h3 className="text-lg font-semibold mb-1">{skill}</h3>
      <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full mb-2">{period}</span>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{description}</p>
    </motion.div>
  );
};

export default CircularSkill;