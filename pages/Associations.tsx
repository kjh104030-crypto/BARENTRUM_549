import React, { useState } from 'react';
import { associationData } from '../data';
import { Association } from '../types';
import { Scale, Shield, PenTool, Database, HeartPulse, Search, Scroll, History, Truck, X, Lock, Cpu, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "데이갈 협회": <Scale />,
  "듀르 협회": <Shield />,
  "세르다 협회": <PenTool />,
  "나드 협회": <Search />,
  "다세오 협회": <HeartPulse />,
  "여실 협회": <Shield />,
  "차르일 협회": <Database />,
  "여달 협회": <Shield />,
  "나홈 협회": <History />,
  "티아슬 협회": <Truck />,
};

export const Associations: React.FC = () => {
  const [selectedAssoc, setSelectedAssoc] = useState<Association | null>(null);

  const openModal = (assoc: Association) => {
    setSelectedAssoc(assoc);
  };

  const closeModal = () => {
    setSelectedAssoc(null);
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-4">
        <div>
            <h2 className="text-4xl font-display font-bold text-white mb-2">ASSOCIATIONS</h2>
            <p className="font-mono text-gray-400">The Leashes & The Dealmakers</p>
        </div>
        <div className="font-mono text-xs text-cyber-yellow mt-4 md:mt-0">
            REGISTERED ENTITIES: {associationData.length}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {associationData.map((assoc, index) => (
          <div 
            key={index}
            onClick={() => openModal(assoc)}
            className="group relative bg-[#151515] border-l-4 border-gray-700 hover:border-cyber-yellow cursor-pointer transition-all duration-300 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden hover:bg-[#1a1a1a]"
          >
             {/* Background Hover Effect */}
             <div className="absolute inset-0 bg-cyber-yellow/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

             {/* Icon */}
             <div className="relative z-10 p-4 bg-black border border-gray-800 text-gray-400 group-hover:text-cyber-yellow group-hover:border-cyber-yellow transition-colors rounded-sm shrink-0">
                {iconMap[assoc.name] || <Scroll />}
             </div>

             {/* Content */}
             <div className="relative z-10 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyber-yellow transition-colors">{assoc.name}</h3>
                    <span className="px-2 py-0.5 bg-gray-800 text-xs font-mono text-cyber-blue rounded uppercase w-fit">
                        {assoc.role}
                    </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 font-mono">
                    <span className="mr-2">CLICK FOR DIRT</span>
                    <span className="w-10 h-[1px] bg-gray-600 group-hover:bg-cyber-yellow transition-colors"></span>
                </div>
             </div>

             {/* Tech Deco */}
             <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="flex space-x-1">
                    <div className="w-1 h-8 bg-cyber-yellow"></div>
                    <div className="w-1 h-12 bg-cyber-yellow"></div>
                    <div className="w-1 h-6 bg-cyber-yellow"></div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedAssoc && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
          
          <div className="relative w-full max-w-4xl bg-[#0f0f0f] border border-cyber-yellow shadow-[0_0_30px_rgba(252,238,10,0.2)]">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-cyber-yellow/10">
                <div className="flex items-center gap-3">
                    {iconMap[selectedAssoc.name] || <Scroll className="text-cyber-yellow" />}
                    <div>
                        <h3 className="font-display font-bold text-2xl text-white uppercase">{selectedAssoc.name}</h3>
                        <p className="font-mono text-xs text-cyber-yellow tracking-widest">SECURE FILE ACCESS_</p>
                    </div>
                </div>
                <button onClick={closeModal} className="text-gray-500 hover:text-white transition-colors">
                    <X />
                </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-black/50 p-3 border border-gray-800">
                        <div className="text-xs text-gray-500 font-mono uppercase mb-1">Authorization</div>
                        <div className="text-cyber-blue font-bold flex items-center gap-2"><Lock size={14} /> PUBLIC</div>
                    </div>
                    <div className="bg-black/50 p-3 border border-gray-800">
                         <div className="text-xs text-gray-500 font-mono uppercase mb-1">Status</div>
                         <div className="text-green-500 font-bold flex items-center gap-2"><Cpu size={14} /> WATCHING</div>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="flex items-center gap-2 text-cyber-yellow font-display font-bold mb-3 border-b border-gray-800 pb-2">
                        <FileText size={18} />
                        DESCRIPTION
                    </h4>
                    <p className="font-body text-gray-300 leading-relaxed text-lg">
                        {selectedAssoc.description}
                    </p>
                </div>

                <div className="bg-gray-900/50 p-4 border-l-2 border-cyber-red">
                    <p className="font-mono text-xs text-gray-400">
                        <span className="text-cyber-red font-bold">NOTE:</span> 이놈들이랑 엮이면 도시 네트워크가 널 감시한다. 꼬투리 잡히기 싫으면 처신 잘 해.
                    </p>
                </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black border-t border-gray-800 flex justify-between items-center font-mono text-xs text-gray-600">
                <span>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                <span className="animate-pulse">MONITORING</span>
            </div>
            
            {/* Decoration Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyber-yellow" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyber-yellow" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyber-yellow" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyber-yellow" />
          </div>
        </div>
      )}
    </div>
  );
};