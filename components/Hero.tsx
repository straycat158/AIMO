import React from 'react';
import { Reveal } from './Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-10">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <h2 className="text-neutral-500 text-sm md:text-base tracking-[0.5em] uppercase mb-4">
              Pure Auditory Experience
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
              重塑<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
                听觉感知
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-neutral-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12">
              艾莫音乐 (Aimo) 不仅仅是一个播放器。它是对极简主义的致敬，剥离繁杂，只留纯粹。
              <span className="block mt-4 text-white">搭载 Gemini Pro 智能音频分析引擎。</span>
            </p>
          </Reveal>

          <Reveal delay={0.6}>
             <div className="flex flex-col md:flex-row gap-4 items-start">
               <a 
               href="https://lz.qaiu.top/lz/iY8Kk3hv4p6h@1o7b" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors w-full md:w-auto">
                 立即体验
               </a>
               <button className="border border-neutral-700 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-white transition-colors w-full md:w-auto">
                 了解更多
               </button>
             </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <ArrowDown size={24} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;