import React from 'react';
import { Reveal } from './Reveal';

const StorySection: React.FC = () => {
  return (
    <section className="py-32 bg-white text-black px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
           <Reveal direction="right">
             <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-black/10 rounded-full"></div>
                <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Listening" 
                  className="w-full h-auto object-cover grayscale contrast-125 brightness-90 shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 w-full h-full border border-black z-0 top-10 left-10 hidden md:block"></div>
             </div>
           </Reveal>
        </div>
        
        <div className="w-full md:w-1/2">
          <Reveal delay={0.2}>
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block text-neutral-500">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              在喧嚣世界中<br/>寻找<span className="italic font-serif">静谧</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg text-neutral-700 leading-loose mb-6 font-light">
              现代软件充满了干扰——弹窗、推荐、社交功能。Aimo 反其道而行之。我们相信，最好的播放器应该是隐形的。
            </p>
            <p className="text-lg text-neutral-700 leading-loose mb-10 font-light">
              通过黑白高对比度设计，我们消除了色彩对情绪的引导，让您自己去定义音乐的色彩。每一次点击，每一次滑动，都经过精心调校，只为那一刻的纯粹。
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-300"></div>
              <span className="uppercase tracking-widest text-sm font-bold">阅读设计故事</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default StorySection;