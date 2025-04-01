'use client'

// components/AnimatedTimeline.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ year, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="relative pl-10 pb-10 border-l-2 border-blue-500 last:border-0 last:pb-0">
      {/* Dot on timeline */}
      <motion.div 
        className="absolute -left-[9px] w-4 h-4 bg-blue-500 rounded-full"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
      >
        <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
          {year}
        </span>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </div>
  );
};

const AnimatedTimeline = ({ items }) => {
  return (
    <div className="py-8">
      {items.map((item, index) => (
        <TimelineItem 
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default AnimatedTimeline;