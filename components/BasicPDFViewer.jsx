// components/BasicPDFViewer.jsx
import { useState, useEffect } from 'react';

const BasicPDFViewer = ({ pdfUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [absoluteUrl, setAbsoluteUrl] = useState('');

  useEffect(() => {
    if (!pdfUrl) {
      setError("PDFのURLが指定されていません。");
      setIsLoading(false);
      return;
    }

    try {
      // 絶対URLを作成
      const url = pdfUrl.startsWith('http') 
        ? pdfUrl 
        : window.location.origin + pdfUrl;
      
      setAbsoluteUrl(url);
      setIsLoading(false);
    } catch (error) {
      console.error('Error processing PDF URL:', error);
      setError(`PDFの処理に失敗しました: ${error.message}`);
      setIsLoading(false);
    }
  }, [pdfUrl]);

  // ローディング中の表示
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-100 rounded-t-xl">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-gray-600">PDFを準備中...</p>
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
        </div>
      </div>
    );
  }

  // iframeを使用してPDFを表示
  return (
    <div className="pdf-viewer bg-gray-100 p-4 rounded-t-xl">
      <div className="flex flex-col items-center mb-4">
        <a 
          href={absoluteUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          PDFを別ウィンドウで開く
        </a>
      </div>
      
      <div className="w-full h-[70vh] border border-gray-300 rounded-md overflow-hidden">
        <iframe 
          src={`${absoluteUrl}#toolbar=0&navpanes=0`}
          title="PDF Viewer" 
          className="w-full h-full" 
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default BasicPDFViewer;