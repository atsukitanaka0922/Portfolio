// pages/about.jsx
import Image from 'next/image';
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

export default function About() {
  return (
    <Layout title="自己紹介" description="システムエンジニア 田中 敦喜の自己紹介・経歴・趣味について。">
      <div className="pt-28 pb-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-10 text-center aero-gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            自己紹介
          </motion.h1>

          {/* プロフィール */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <motion.div
              className="w-56 h-56 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-white/70 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/profile.jpg"
                alt={`${profile.name}のプロフィール写真`}
                fill
                sizes="224px"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              className="aero-glass aero-glass-strong p-6 flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-2 text-slate-800">{profile.name}</h2>
              <p className="text-sky-700 font-medium mb-4">{profile.title}・{profile.location}出身</p>
              {profile.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-700 mb-4 last:mb-0 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* 経歴 */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">経歴</h2>
            <div className="space-y-6">
              {profile.timeline.map((entry, index) => (
                <div key={index} className="aero-glass p-5 relative pl-8">
                  <span
                    className={`absolute w-4 h-4 rounded-full left-3 top-7 ${
                      entry.current ? 'bg-emerald-500' : 'bg-sky-500'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                    <span className="font-semibold text-slate-800">{entry.org}</span>
                    <span className="text-slate-600">{entry.role}</span>
                    {entry.current && (
                      <span className="aero-chip bg-emerald-100 text-emerald-800">現在</span>
                    )}
                  </div>
                  <div className="text-sm text-slate-500 mb-2">{entry.period}</div>
                  <p className="text-slate-700">{entry.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 趣味と興味 */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">趣味と興味</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.hobbies.map((hobby, index) => (
                <motion.div key={index} variants={itemVariants} className="aero-glass p-5">
                  <h3 className="font-semibold text-sky-700 mb-1">{hobby.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
