// pages/_app.js に以下のスタイルを追加

// グローバルスタイルに追加
import '../styles/globals.css'
import Head from 'next/head';

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
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp