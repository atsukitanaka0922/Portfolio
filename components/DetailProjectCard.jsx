// components/DetailProjectCard.jsx
// プロジェクトカード（Aeroガラス調）+ 詳細モーダル。
// アクセシビリティ: 画像はボタン化、モーダルは role="dialog"/aria-modal、
// Escapeで閉じる、開閉時のフォーカス管理、背景スクロールのロックに対応。
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import YouTubePlayer from './YouTubePlayer';

// BasicPDFViewerをクライアントサイドのみでロード
const BasicPdfViewer = dynamic(() => import('./BasicPDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-sky-50 flex items-center justify-center">PDFを読み込み中...</div>
  ),
});

// タグの色（Aeroのアクセントカラー）
const getTagColor = (tag) => {
  switch (tag) {
    case 'アプリ':
      return 'bg-sky-100 text-sky-800';
    case 'ツール':
      return 'bg-emerald-100 text-emerald-800';
    case 'サイト':
      return 'bg-violet-100 text-violet-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
};

const DetailProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // モーダルの開閉に伴う副作用（Escape・フォーカス・スクロールロック）
  useEffect(() => {
    if (!showDetail) return;

    lastFocusedRef.current = document.activeElement;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setShowDetail(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // 開いたらモーダル内の閉じるボタンへフォーカス
    const t = setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
      // 閉じたら元の要素へフォーカスを戻す
      if (lastFocusedRef.current instanceof HTMLElement) lastFocusedRef.current.focus();
    };
  }, [showDetail]);

  const isPortfolioProject = project.title.includes('ポートフォリオ');
  const hasPDF = !!project.pdfUrl;
  const hasVideo = !!project.videoUrl && project.videoUrl !== 'YOUR_YOUTUBE_VIDEO_ID_HERE';
  const titleId = `project-title-${project.id}`;

  return (
    <>
      <motion.article
        className="aero-glass overflow-hidden h-full flex flex-col"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {/* 画像（クリックで詳細）。アクセシブルなボタンに */}
        <button
          type="button"
          onClick={() => setShowDetail(true)}
          className="group relative h-48 block w-full text-left"
          aria-label={`${project.title}の詳細を開く`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-600">No image</span>
            </div>
          )}

          {project.tag && (
            <span className={`absolute top-2 right-2 z-20 aero-chip ${getTagColor(project.tag)}`}>
              {project.tag}
            </span>
          )}

          {/* ホバーオーバーレイ */}
          <span className="absolute inset-0 z-10 flex items-center justify-center bg-sky-900/0 group-hover:bg-sky-900/70 transition-colors duration-300">
            <span className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="block font-bold text-xl mb-1">詳細を見る</span>
              <span className="block text-sm">クリックして詳細をチェック</span>
            </span>
          </span>
        </button>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 text-slate-800">{project.title}</h3>
          <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="aero-chip">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="aero-chip">+{project.technologies.length - 3}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aero-btn aero-btn--primary !py-1.5 !px-4 text-sm"
              >
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aero-btn aero-btn--dark !py-1.5 !px-4 text-sm"
              >
                GitHub
              </a>
            )}
            <button
              type="button"
              onClick={() => setShowDetail(true)}
              className="aero-btn aero-btn--green !py-1.5 !px-4 text-sm"
            >
              詳細
            </button>
          </div>
        </div>
      </motion.article>

      {/* 詳細モーダル */}
      <AnimatePresence>
        {showDetail && mounted && (
          <motion.div
            className="fixed inset-0 bg-sky-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetail(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="aero-glass aero-glass-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto !rounded-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {hasPDF ? (
                <div className="pdf-container" style={{ minHeight: '500px' }}>
                  <BasicPdfViewer pdfUrl={project.pdfUrl} />
                </div>
              ) : (
                <div className="relative h-64 sm:h-80 md:h-96">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-2xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center rounded-t-2xl">
                      <span className="text-slate-600">No image</span>
                    </div>
                  )}
                  {project.tag && (
                    <span className={`absolute top-4 right-4 aero-chip ${getTagColor(project.tag)}`}>
                      {project.tag}
                    </span>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h2 id={titleId} className="text-2xl font-bold text-slate-800">{project.title}</h2>
                  <button
                    type="button"
                    ref={closeButtonRef}
                    onClick={() => setShowDetail(false)}
                    className="text-slate-500 hover:text-slate-800 shrink-0"
                    aria-label="詳細を閉じる"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">プロジェクト概要</h3>
                  <p className="text-slate-700">{project.description}</p>
                </div>

                {hasVideo && (
                  <YouTubePlayer videoId={project.videoUrl} title={`${project.title} - プロジェクト紹介動画`} />
                )}

                {isPortfolioProject && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-slate-800">ポートフォリオサイトの特徴</h3>
                    <ul className="list-disc pl-5 text-slate-700 space-y-2">
                      <li>Frutiger Aeroデザイン: 空・水・ガラスをモチーフにした光沢のあるUI</li>
                      <li>アニメーション効果: Framer Motionを使用したスムーズなアニメーション</li>
                      <li>レスポンシブデザイン: モバイル、タブレット、デスクトップに最適化</li>
                      <li>保守性: データを一元管理し、更新しやすいコード構造</li>
                      <li>アクセシビリティ: キーボード操作やスクリーンリーダーに配慮</li>
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="aero-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="aero-btn aero-btn--primary">
                      デモを見る
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="aero-btn aero-btn--dark">
                      GitHubで見る
                    </a>
                  )}
                  {hasPDF && (
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="aero-btn aero-btn--green">
                      資料を直接開く
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
