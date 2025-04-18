// components/DetailProjectCard.jsx
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const DetailProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
  
  // ポートフォリオプロジェクト用の特別な処理
  const isPortfolioProject = project.title.includes("ポートフォリオ");
  
  // 詳細表示を切り替える関数
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg shadow-md overflow-hidden h-full"
        whileHover={{ 
          scale: 1.03, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
      >
        <div className="relative h-48" onClick={toggleDetail}>
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
          
          {/* 改善されたホバーオーバーレイ */}
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
            
            <motion.button
              onClick={toggleDetail}
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              詳細
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* 詳細モーダル */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleDetail}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 md:h-96">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-t-xl">
                    <span className="text-gray-600">No image</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <button 
                    onClick={toggleDetail}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">プロジェクト概要</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
                
                {isPortfolioProject && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">ポートフォリオサイトの特徴</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>モダンな設計: Next.js、React、Tailwind CSSを活用し、モダンかつ高速なウェブサイトを構築</li>
                      <li>アニメーション効果: Framer Motionを使用したスムーズなアニメーションで視覚的に魅力的なUI</li>
                      <li>レスポンシブデザイン: モバイル、タブレット、デスクトップに最適化されたレイアウト</li>
                      <li>パフォーマンス: 画像の最適化、コンポーネントの分割、効率的なコード構造でパフォーマンスを向上</li>
                      <li>SEO対策: メタタグ、構造化データ、アクセシビリティに配慮</li>
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      デモを見る
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition-colors"
                    >
                      GitHubで見る
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailProjectCard;