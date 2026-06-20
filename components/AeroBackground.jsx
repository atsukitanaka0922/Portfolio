// components/AeroBackground.jsx
// Frutiger Aero 風の背景。空グラデーション（body側）の上に、浮遊するバブルと
// 柔らかなボケ光を重ねる純粋な装飾レイヤー。装飾なので aria-hidden。
//
// SSRでのハイドレーション不一致を避けるため、バブルの位置・サイズは
// ランダムではなく固定値で定義しています。

// 浮遊バブル（下から上へゆっくり上昇）
const BUBBLES = [
  { left: "6%", size: 26, duration: 22, delay: 0, opacity: 0.5, drift: 30 },
  { left: "14%", size: 14, duration: 17, delay: 4, opacity: 0.45, drift: -20 },
  { left: "23%", size: 40, duration: 28, delay: 8, opacity: 0.4, drift: 24 },
  { left: "32%", size: 18, duration: 19, delay: 2, opacity: 0.5, drift: -28 },
  { left: "41%", size: 30, duration: 24, delay: 11, opacity: 0.42, drift: 18 },
  { left: "52%", size: 12, duration: 15, delay: 6, opacity: 0.55, drift: 26 },
  { left: "60%", size: 46, duration: 30, delay: 1, opacity: 0.35, drift: -22 },
  { left: "68%", size: 20, duration: 18, delay: 9, opacity: 0.5, drift: 20 },
  { left: "76%", size: 16, duration: 16, delay: 3, opacity: 0.48, drift: -18 },
  { left: "84%", size: 34, duration: 26, delay: 13, opacity: 0.4, drift: 28 },
  { left: "91%", size: 22, duration: 20, delay: 7, opacity: 0.5, drift: -24 },
  { left: "97%", size: 13, duration: 14, delay: 5, opacity: 0.5, drift: 16 },
];

// 背景の大きなボケ光
const BOKEH = [
  { left: "10%", top: "18%", size: 220, opacity: 0.5 },
  { left: "72%", top: "12%", size: 300, opacity: 0.4 },
  { left: "45%", top: "60%", size: 260, opacity: 0.35 },
  { left: "85%", top: "70%", size: 180, opacity: 0.45 },
];

const AeroBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* 上空をより明るく見せるためのハイライト */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent" />

      {/* ボケ光 */}
      {BOKEH.map((b, i) => (
        <span
          key={`bokeh-${i}`}
          className="aero-bokeh"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
          }}
        />
      ))}

      {/* 浮遊バブル */}
      {BUBBLES.map((b, i) => (
        <span
          key={`bubble-${i}`}
          className="aero-bubble"
          style={{
            left: b.left,
            bottom: `-${b.size + 20}px`,
            width: b.size,
            height: b.size,
            "--bubble-opacity": b.opacity,
            "--bubble-drift": `${b.drift}px`,
            animation: `aero-rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default AeroBackground;
