// components/YouTubePlayer.jsx
import { useState } from 'react';

const YouTubePlayer = ({ videoId, title = "YouTube Video" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!videoId || videoId === "YOUR_YOUTUBE_VIDEO_ID_HERE") {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">プロジェクト紹介動画</h3>
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-500">動画を読み込み中...</div>
          </div>
        )}
        <iframe
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
