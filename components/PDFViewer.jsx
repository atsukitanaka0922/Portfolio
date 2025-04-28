// components/PDFViewer.jsx
import { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

// PDF.jsのワーカーを設定
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageRendering, setPageRendering] = useState(false);
  const [pageNumPending, setPageNumPending] = useState(null);
  const [scale, setScale] = useState(1.5);

  // PDFをロード
  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setPageCount(pdf.numPages);
        renderPage(1);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    if (pdfUrl) {
      loadPDF();
    }
  }, [pdfUrl]);

  // ページをレンダリング
  const renderPage = async (num) => {
    if (!pdfDoc) return;
    
    setPageRendering(true);
    
    try {
      const page = await pdfDoc.getPage(num);
      const viewport = page.getViewport({ scale });
      
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      
      await page.render(renderContext).promise;
      setPageRendering(false);
      
      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        setPageNumPending(null);
      }
    } catch (error) {
      console.error('Error rendering page:', error);
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

  return (
    <div className="pdf-viewer bg-gray-100 p-4 rounded-t-xl">
      <div className="controls bg-white p-2 rounded-md shadow-sm mb-4 flex items-center justify-between">
        <div className="navigation flex items-center space-x-2">
          <button 
            onClick={previousPage} 
            disabled={pageNum <= 1}
            className={`px-3 py-1 rounded ${pageNum <= 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            前へ
          </button>
          <span>Page {pageNum} of {pageCount}</span>
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