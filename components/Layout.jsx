// components/Layout.jsx
// 全ページ共通のレイアウト。背景・ナビ・フッター・メタ情報をまとめて提供します。
// 各ページは <Layout title="..." description="...">…</Layout> で中身だけを書けばOK。
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import AeroBackground from './AeroBackground';

const SITE_NAME = '田中 敦喜のポートフォリオ';
const DEFAULT_DESCRIPTION = 'システムエンジニア 田中 敦喜のポートフォリオサイト。制作物・スキル・経歴を紹介しています。';

const Layout = ({ children, title, description }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description || DEFAULT_DESCRIPTION;

  return (
    <div className="relative min-h-screen flex flex-col">
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AeroBackground />
      <Navbar />

      <main className="relative z-10 flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
