// components/PDFViewer.jsx
import { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

// PDF.jsのワーカーをダイナミックにロードする
const loadPdfWorker = async () => {
  try {
    // フェイクワーカーを使用してプレビューモードで動作するようにする
    pdfjsLib.GlobalWorkerOptions.workerSrc = '';
    // フェイクワーカーを有効化
    await pdfjsLib.Promise.resolve();
    console.log("PDF.js fake worker enabled");
  } catch (error) {
    console.error("Error setting up PDF.js worker:", error);
  }
};

const PDFViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageRendering, setPageRendering] = useState(false);
  const [pageNumPending, setPageNumPending] = useState(null);
  const [scale, setScale] = useState(1.5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [workerLoaded, setWorkerLoaded] = useState(false);

  // ワーカーロード
  useEffect(() => {
    const setupWorker = async () => {
      try {
        await loadPdfWorker();
        setWorkerLoaded(true);
      } catch (error) {
        console.error("Failed to setup PDF worker:", error);
        setError("PDF表示機能の初期化に失敗しました。");
      }
    };
    
    setupWorker();
  }, []);

  // PDFをロード
  useEffect(() => {
    if (!workerLoaded || !pdfUrl) return;
    
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        console.log("Loading PDF from:", pdfUrl);
        
        // プロトコルがないURLの場合、絶対URLに変換
        const absolutePdfUrl = pdfUrl.startsWith('http') 
          ? pdfUrl 
          : window.location.origin + pdfUrl;
        
        console.log("Absolute PDF URL:", absolutePdfUrl);
        
        // PDF読み込みのオプション
        const loadingTask = pdfjsLib.getDocument({
          url: absolutePdfUrl,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.2.133/cmaps/',
          cMapPacked: true,
          disableStream: true, // ストリーミングを無効化して全体をダウンロード
          disableAutoFetch: true // 自動フェッチを無効化
        });
        
        loadingTask.onProgress = (progress) => {
          if (progress.total > 0) {
            console.log(`Loading PDF: ${Math.round(progress.loaded / progress.total * 100)}%`);
          }
        };
        
        const pdf = await loadingTask.promise;
        console.log("PDF loaded successfully. Number of pages:", pdf.numPages);
        setPdfDoc(pdf);
        setPageCount(pdf.numPages);
        setIsLoading(false);
        renderPage(1);
      } catch (error) {
        console.error('Error loading PDF:', error);
        setError(`PDFの読み込みに失敗しました: ${error.message}`);
        setIsLoading(false);
      }
    };

    loadPDF();
    
    return () => {
      // クリーンアップ関数
      console.log("PDFViewer unmounting");
    };
  }, [pdfUrl, workerLoaded]);

  // ページをレンダリング
  const renderPage = async (num) => {
    if (!pdfDoc) {
      console.error("No PDF document available");
      return;
    }
    
    setPageRendering(true);
    console.log(`Rendering page ${num}`);
    
    try {
      const page = await pdfDoc.getPage(num);
      console.log(`Got page ${num}`);
      const viewport = page.getViewport({ scale });
      
      const canvas = canvasRef.current;
      if (!canvas) {
        console.error("Canvas reference not available");
        return;
      }
      
      const context = canvas.getContext('2d');
      
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      
      console.log("Starting page rendering");
      await page.render(renderContext).promise;
      console.log("Page rendered successfully");
      setPageRendering(false);
      
      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        setPageNumPending(null);
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      setError(`ページの表示に失敗しました: ${error.message}`);
      setPageRendering(false);
    }
  };

  // 前のページに移動
  const previousPage = () => {
    if (pageNum <= 1) return;
    queueRenderPage(pageNum - 1);
  };

  // 次のページに移動
  const nextPage = () => {
    if (pageNum >= pageCount) return;
    queueRenderPage(pageNum + 1);
  };

  // ページレンダリングをキュー
  const queueRenderPage = (num) => {
    if (pageRendering) {
      setPageNumPending(num);
    } else {
      renderPage(num);
    }
    setPageNum(num);
  };

  // 拡大する
  const zoomIn = () => {
    setScale(prevScale => {
      const newScale = prevScale + 0.25;
      renderPage(pageNum);
      return newScale;
    });
  };

  // 縮小する
  const zoomOut = () => {
    setScale(prevScale => {
      const newScale = Math.max(0.5, prevScale - 0.25);
      renderPage(pageNum);
      return newScale;
    });
  };

  // ローディング中の表示
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-100 rounded-t-xl">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-gray-600">PDFを読み込み中...</p>
        </div>
      </div>
    );
  }

  // エラー時の表示
  if (error) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-100 rounded-t-xl">
        <div className="text-center text-red-600 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="font-bold text-lg mb-1">エラーが発生しました</p>
          <p>{error}</p>
          <p className="mt-2 text-sm">別の形式で閲覧するか、ダウンロードしてください。</p>
          
          {/* PDFを直接開くリンク */}
          {pdfUrl && (
            <a 
              href={pdfUrl.startsWith('http') ? pdfUrl : window.location.origin + pdfUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              PDFを直接開く
            </a>
          )}
        </div>
      </div>
    );
  }

  // 通常の表示
  return (
    <div className="pdf-viewer bg-gray-100 p-4 rounded-t-xl">
      <div className="controls bg-white p-2 rounded-md shadow-sm mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="navigation flex items-center space-x-2">
          <button 
            onClick={previousPage} 
            disabled={pageNum <= 1}
            className={`px-3 py-1 rounded ${pageNum <= 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            前へ
          </button>
          <span>Page {pageNum} / {pageCount}</span>
          <button 
            onClick={nextPage} 
            disabled={pageNum >= pageCount}
            className={`px-3 py-1 rounded ${pageNum >= pageCount ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            次へ
          </button>
        </div>
        <div className="zoom flex items-center space-x-2">
          <button 
            onClick={zoomOut} 
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button 
            onClick={zoomIn} 
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <div className="canvas-container flex justify-center overflow-auto max-h-[calc(90vh-200px)]">
        <canvas ref={canvasRef} className="border border-gray-300 shadow-md"></canvas>
      </div>
    </div>
  );
};

export default PDFViewer;