import React from 'react';
import { Play, SkipForward, SkipBack, Heart, MoreHorizontal, Cast } from 'lucide-react';
import { Reveal } from './Reveal';

const PlayerPreview: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
           <Reveal width="100%" direction="down">
              <h3 className="text-white text-3xl font-bold tracking-tight mb-2">极简界面，深邃体验</h3>
              <p className="text-neutral-500">沉浸式黑白设计，专注于音乐本身</p>
           </Reveal>
        </div>

        {/* Mock UI Container */}
        <Reveal width="100%" delay={0.2}>
          <div className="relative max-w-sm md:max-w-4xl mx-auto">
             {/* Mobile View Mockup (Center) */}
             <div className="relative z-20 mx-auto w-full max-w-[350px] bg-black border border-neutral-800 rounded-[2rem] p-6 shadow-2xl shadow-white/5 aspect-[9/18] flex flex-col justify-between overflow-hidden group hover:border-neutral-600 transition-colors duration-500">
                
                {/* Status Bar Mock */}
                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-[10px] font-bold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* Album Art */}
                <div className="relative w-full aspect-square bg-neutral-900 rounded-xl overflow-hidden mb-8 border border-neutral-800">
                   {/* Grayscale Image Placeholder */}
                   <img 
                      src="https://picsum.photos/600/600?grayscale" 
                      alt="Album Art" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                   />
                   {/* Reflection overlay */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                </div>

                {/* Track Info */}
                <div className="mb-6">
                  <div className="flex justify-between items-end">
                    <div>
                       <h4 className="text-2xl font-bold text-white mb-1">Midnight City</h4>
                       <p className="text-neutral-400 text-sm">M83 • Hurry Up, We're Dreaming</p>
                    </div>
                    <Heart className="text-white w-6 h-6 hover:fill-white transition-colors cursor-pointer" />
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-8">
                   <div className="w-full h-1 bg-neutral-800 rounded-full mb-2 overflow-hidden">
                      <div className="h-full w-1/3 bg-white relative">
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                      </div>
                   </div>
                   <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>1:24</span>
                      <span>4:03</span>
                   </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center mb-8">
                   <Cast className="text-neutral-500 w-5 h-5 hover:text-white transition-colors" />
                   <SkipBack className="text-white w-8 h-8 hover:text-neutral-300 transition-colors" fill="white" />
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <Play className="w-6 h-6 ml-1" fill="black" />
                   </div>
                   <SkipForward className="text-white w-8 h-8 hover:text-neutral-300 transition-colors" fill="white" />
                   <MoreHorizontal className="text-neutral-500 w-5 h-5 hover:text-white transition-colors" />
                </div>
                
                {/* Bottom Lyrics Preview */}
                <div className="bg-neutral-900/50 backdrop-blur-md rounded-xl p-4 border border-white/5">
                   <p className="text-center text-neutral-400 text-xs leading-relaxed">
                      "Waiting in a car<br/>
                      Waiting for a ride in the dark..."
                   </p>
                </div>
             </div>

             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-white/5 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PlayerPreview;