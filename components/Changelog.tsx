import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { FileText } from 'lucide-react';

interface VersionLog {
  version: string;
  changes: string[];
}

const Changelog: React.FC = () => {
  const [logs, setLogs] = useState<VersionLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/1.txt')
      .then((res) => {
        if (!res.ok) {
           throw new Error('Failed to load changelog');
        }
        return res.text();
      })
      .then((text) => {
        const lines = text.split('\n');
        const parsedLogs: VersionLog[] = [];
        let currentVersion: VersionLog | null = null;

        lines.forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed) return;

          if (trimmed.startsWith('#')) {
            if (currentVersion) parsedLogs.push(currentVersion);
            // Remove '#' and extra spaces
            currentVersion = {
              version: trimmed.substring(1).trim(),
              changes: [],
            };
          } else if (currentVersion) {
            // Remove numbering (1. 2. etc) or bullets (- *)
            const cleanLine = trimmed.replace(/^(\d+\.|-|\*)\s*/, '');
            currentVersion.changes.push(cleanLine);
          }
        });

        if (currentVersion) parsedLogs.push(currentVersion);
        setLogs(parsedLogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="changelog" className="py-32 bg-black px-6 md:px-12 border-t border-neutral-900">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <Reveal>
             <div className="flex justify-center mb-6">
                <FileText className="text-white w-8 h-8" strokeWidth={1} />
             </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">更新里程碑</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
            <p className="text-neutral-500">每一次迭代，都是向极致更近一步</p>
          </Reveal>
        </div>

        {loading ? (
          <div className="text-center text-neutral-600 animate-pulse tracking-widest text-xs uppercase">
            Loading Data...
          </div>
        ) : (
          <div className="relative pl-4 md:pl-0">
             {/* Vertical Line */}
             <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-px bg-neutral-900 -translate-x-1/2 hidden md:block"></div>
             <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-900 block md:hidden"></div>

            <div className="flex flex-col gap-16">
              {logs.map((log, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   
                   {/* Center Dot */}
                   <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-black border border-white rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-2 z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

                   {/* Content Side */}
                   <div className="md:w-1/2 pl-8 md:pl-0 md:px-12 w-full">
                      <Reveal direction={index % 2 === 0 ? "left" : "right"}>
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{log.version}</h3>
                            <div className={`h-px w-10 bg-neutral-800 mb-6 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}></div>
                            
                            <ul className={`space-y-3 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                {log.changes.map((change, cIndex) => (
                                <li key={cIndex} className="text-neutral-400 text-sm leading-relaxed hover:text-white transition-colors duration-300">
                                    {change}
                                </li>
                                ))}
                            </ul>
                        </div>
                      </Reveal>
                   </div>

                   {/* Empty Side for layout balance */}
                   <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Changelog;