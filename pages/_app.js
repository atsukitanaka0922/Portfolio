// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head';
import dynamic from 'next/dynamic';

// CursorEffectは依存関係があるので一時的に無効化
// const CursorEffect = dynamic(() => import('../components/CursorEffect'), {
//   ssr: false
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="システムエンジニアのポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        h1, h2, h3 {
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .hero-text {
          text-shadow: 0 2px 8px rgba(0,0,0,0.2);
          position: relative;
          z-index: 20;
        }
        
        .content-section {
          position: relative;
          z-index: 10;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(5px);
          border-radius: 0.5rem;
        }

        /* For blinking cursor in typing effect */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        /* For perspective in 3D cards */
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp