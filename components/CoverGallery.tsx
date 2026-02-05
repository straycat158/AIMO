import React from 'react';
import { Reveal } from './Reveal';

const CoverGallery: React.FC = () => {
  const screenshots = [
    { 
      src: "/img/1.jpg", 
      title: "沉浸播放页", 
      desc: "Immersive Player",
      detail: "全屏封面艺术，无干扰的控制布局"
    },
    { 
      src: "/img/2.jpg", 
      title: "灵感歌单", 
      desc: "Curated Playlists",
      detail: "AI 驱动的智能推荐流"
    },
    { 
      src: "/img/3.jpg", 
      title: "极致设置", 
      desc: "Pro Settings",
      detail: "自定义均衡器与黑胶参数"
    },
  ];

  return (
    <section className="py-32 bg-neutral-950 text-white px-6 md:px-12 border-t border-neutral-900 overflow-hidden">
      <div className="container mx-auto">
         <div className="mb-24 flex flex-col items-center text-center">
            <Reveal direction="up">
              <span className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Interface Design</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">应用界面概览</h2>
              <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
              <p className="text-neutral-400 max-w-2xl leading-relaxed mx-auto">
                每一个像素都经过精心雕琢。Aimo 的界面设计遵循 "内容至上" 原则，
                通过大面积的留白与极致的排版，让音乐信息自然流淌。
              </p>
            </Reveal>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 px-4">
            {screenshots.map((screen, index) => (
               <Reveal key={index} delay={0.2 + (index * 0.15)} direction="up">
                  <div className="group flex flex-col items-center">
                     {/* Phone Frame */}
                     <div className="relative w-full max-w-[320px] aspect-[9/19.5] rounded-[2.5rem] border-[8px] border-neutral-800 bg-black overflow-hidden shadow-2xl transition-all duration-500 hover:border-neutral-600 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
                        
                        {/* Status Bar Placeholder */}
                        <div className="absolute top-0 inset-x-0 h-8 z-20 flex justify-between items-center px-6 pt-2">
                            <div className="w-8 h-4 bg-black/50 backdrop-blur-sm rounded-full"></div>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-black/50 backdrop-blur-sm rounded-full"></div>
                                <div className="w-4 h-4 bg-black/50 backdrop-blur-sm rounded-full"></div>
                            </div>
                        </div>

                        {/* Screen Image */}
                        <div className="relative h-full w-full bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
                             <img 
                                src={screen.src} 
                                alt={screen.title} 
                                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                             />
                             {/* Gradient Overlay for depth */}
                             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none"></div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/20 rounded-full z-20 backdrop-blur-md"></div>
                     </div>

                     {/* Text Info */}
                     <div className="mt-8 text-center">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">{screen.title}</h3>
                        <p className="text-xs font-bold tracking-[0.2em] text-neutral-600 uppercase mb-3">{screen.desc}</p>
                        <p className="text-sm text-neutral-500 max-w-[250px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-2 group-hover:translate-y-0">
                           {screen.detail}
                        </p>
                     </div>
                  </div>
               </Reveal>
            ))}
         </div>
      </div>
    </section>
  );
};

export default CoverGallery;