// pages/thanks.jsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Thanks() {
  return (
    <Layout title="お問い合わせありがとうございます" description="お問い合わせを受け付けました。">
      <div className="pt-28 pb-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="aero-glass aero-glass-strong p-10 text-center">
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <svg
                className="w-20 h-20 text-emerald-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold mb-4 text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              お問い合わせありがとうございます
            </motion.h1>

            <motion.p
              className="text-slate-700 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              メッセージを受け取りました。48時間以内にご返信いたします。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/" className="aero-btn aero-btn--primary">ホームに戻る</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
