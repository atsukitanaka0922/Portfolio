// pages/contact.jsx
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { profile } from '../data/profile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const inputClass =
  'w-full px-4 py-2 rounded-lg bg-white/80 border border-white/80 focus:outline-none focus:ring-2 focus:ring-sky-500';

export default function Contact() {
  return (
    <Layout title="お問い合わせ" description="ポートフォリオや制作物についてのお問い合わせはこちらから。">
      <div className="pt-28 pb-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-8 text-center aero-gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            お問い合わせ
          </motion.h1>

          <motion.div
            className="aero-glass aero-glass-strong p-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="text-slate-700 mb-6 leading-relaxed" variants={itemVariants}>
              このサイトは、私の制作物をご覧いただくためのポートフォリオです。
              現在は進行中の案件に注力しているため、新しいお仕事のご依頼は受け付けておりませんが、
              サイトやプロジェクトについてのご質問・ご感想・バグ報告などはお気軽にお寄せください。できるだけ早くご返信いたします。
            </motion.p>

            <form action={`https://formsubmit.co/${profile.email}`} method="POST">
              <input type="hidden" name="_subject" value="ポートフォリオサイトからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://atsukitanakaportfolio.vercel.app/thanks" />
              {/* スパム対策のハニーポット（人間には非表示） */}
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                  お名前 <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input type="text" id="name" name="name" required aria-required="true" className={inputClass} />
              </motion.div>

              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                  メールアドレス <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input type="email" id="email" name="email" required aria-required="true" className={inputClass} />
              </motion.div>

              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="subject" className="block text-slate-700 font-medium mb-2">件名</label>
                <input type="text" id="subject" name="subject" className={inputClass} />
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                  メッセージ <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <textarea id="message" name="message" rows="6" required aria-required="true" className={inputClass} />
              </motion.div>

              <motion.button type="submit" className="aero-btn aero-btn--primary w-full" variants={itemVariants}>
                送信する
              </motion.button>
            </form>
          </motion.div>

          {/* 他の連絡方法 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">他の連絡方法</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aero-glass p-6">
                <h3 className="text-xl font-medium mb-2 text-slate-800">SNS</h3>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>

              <div className="aero-glass p-6">
                <h3 className="text-xl font-medium mb-2 text-slate-800">Eメール</h3>
                <p className="mb-4 text-slate-700">直接メールでのお問い合わせも歓迎します：</p>
                <a href={`mailto:${profile.email}`} className="text-sky-700 hover:underline break-all">
                  {profile.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
