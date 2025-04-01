// components/ProjectCard.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden h-full"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="relative h-48">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            width={400}
            height={200}
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">No image</span>
          </div>
        )}
        
        {/* 改善されたホバーオーバーレイ（常に全画面に表示され、ホバー時に表示される） */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
          initial={{ backgroundColor: "rgba(30, 58, 138, 0)" }}
          whileHover={{ backgroundColor: "rgba(30, 58, 138, 0.8)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-white text-center px-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-bold text-xl mb-2">詳細を見る</p>
            <p className="text-sm">クリックして詳細をチェック</p>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <motion.span 
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          {project.demoUrl && (
            <motion.a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.a>
          )}
          
          {project.githubUrl && (
            <motion.a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;