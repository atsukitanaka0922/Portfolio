'use client'

// components/FlipCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FlipCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="flip-card-container h-96 w-full perspective-1000 cursor-pointer"
      onClick={flipCard}
    >
      <motion.div
        className="flip-card-inner relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front of card */}
        <div 
          className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="relative h-1/2">
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
            
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold">クリックして詳細を表示</p>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 line-clamp-2 mb-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="flip-card-back absolute w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white rounded-xl shadow-lg p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          
          <p className="mb-4 flex-grow">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">使用技術:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-3">
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-blue-700 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                デモを見る
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                GitHubを見る
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;