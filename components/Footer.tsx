import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-neutral-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">AIMO MUSIC</h2>
            <p className="text-neutral-500 max-w-sm mb-8">
              为发烧友打造的极简主义音乐播放器。
              <br/>用代码构建旋律，用设计还原真实。
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Github size={18} />
               </a>
               <a href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Mail size={18} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-300">产品</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">下载 iOS 版</a></li>
              <li><a href="#" className="hover:text-white transition-colors">下载 Android 版</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mac 桌面端</a></li>
              <li><a href="#changelog" className="hover:text-white transition-colors">更新日志</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-300">支持</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>&copy; 2024 Aimo Music Inc. All rights reserved.</p>
          <p>Designed with silence in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;