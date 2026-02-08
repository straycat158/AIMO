import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-6 h-6 bg-white rounded-full transition-transform duration-500 group-hover:scale-125"></div>
          <span className="font-bold text-xl tracking-tighter">AIMO</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['功能', '设计', '高级版', '关于'].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-light text-neutral-400 hover:text-white transition-colors tracking-widest uppercase">
              {item}
            </a>
          ))}
        </div>

        <a href="https://lz.qaiu.top/lz/iY8Kk3hv4p6h@1o7b" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-2 border border-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
          下载 App
          </a>
      </div>
    </nav>
  );
};

export default Navbar;