import React from 'react';
import { Reveal } from './Reveal';
import { Waves, Sparkles, Smartphone, ShieldCheck, Zap, Disc } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, delay }) => (
  <Reveal delay={delay}>
    <div className="group p-8 border border-neutral-900 hover:border-neutral-700 bg-black transition-all duration-500 hover:bg-neutral-900/30">
      <div className="mb-6 text-neutral-400 group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-neutral-400 transition-colors">{desc}</p>
    </div>
  </Reveal>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Waves size={32} strokeWidth={1} />,
      title: "无损音质引擎",
      desc: "支持 FLAC, ALAC, WAV 等主流无损格式。独有的比特完美 (Bit-perfect) 输出，还原录音棚级别的细节。",
      delay: 0.1
    },
    {
      icon: <Sparkles size={32} strokeWidth={1} />,
      title: "Gemini AI 推荐",
      desc: "不仅仅是算法。通过 Gemini API 深度理解歌词情感与旋律结构，为您生成真正懂你心情的歌单。",
      delay: 0.2
    },
    {
      icon: <Smartphone size={32} strokeWidth={1} />,
      title: "极简交互设计",
      desc: "剔除所有多余元素。全手势操作，黑白单色界面减少视觉干扰，让注意力回归音乐本身。",
      delay: 0.3
    },
    {
      icon: <Disc size={32} strokeWidth={1} />,
      title: "沉浸式黑胶模式",
      desc: "数字音乐也能拥有模拟质感。开启黑胶模式，体验独特的动态噪声底噪与温润听感。",
      delay: 0.4
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1} />,
      title: "完全本地化隐私",
      desc: "没有追踪器，没有广告。您的听歌数据完全加密存储于本地，Aimo 尊重您的数字隐私。",
      delay: 0.5
    },
    {
      icon: <Zap size={32} strokeWidth={1} />,
      title: "极速冷启动",
      desc: "从点击图标到播放音乐仅需 0.5 秒。极致优化的代码架构，为您节省每一刻灵感时间。",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-24 bg-black px-6 md:px-12 border-t border-neutral-900">
      <div className="container mx-auto">
        <div className="mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">生而不同</h2>
            <div className="h-1 w-20 bg-white"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;