import React from 'react';
import { rankData, promotionInfo } from '../data';
import { Award, TrendingUp, ChevronUp, Scale } from 'lucide-react';

export const Ranks: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-20">
      <div className="mb-12 border-l-4 border-cyber-yellow pl-6">
        <h2 className="text-4xl font-display font-bold text-white mb-2">HIERARCHY & PROMOTION</h2>
        <p className="font-mono text-cyber-yellow">APD RANKING SYSTEM</p>
      </div>

      {/* Promotion Info Box */}
      <div className="mb-16 bg-[#151515] border border-cyber-blue/30 p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <TrendingUp size={100} className="text-cyber-blue" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-cyber-blue mb-4 flex items-center">
          <Award className="mr-3" /> {promotionInfo.title}
        </h3>
        
        <p className="text-gray-300 font-mono text-lg leading-relaxed relative z-10 max-w-3xl">
          "{promotionInfo.description}"
        </p>

        <div className="mt-6 flex gap-4 text-xs font-mono text-gray-500 uppercase">
          <span className="flex items-center"><span className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></span> Daygal Assoc.</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-cyber-yellow rounded-full mr-2"></span> Tiasl Assoc.</span>
        </div>
      </div>

      {/* Ranks List */}
      <div className="space-y-4">
         {/* Table Header */}
         <div className="hidden md:flex text-xs font-mono text-gray-500 border-b border-gray-800 pb-2 px-6 uppercase tracking-widest">
            <div className="w-24">Level</div>
            <div className="w-48">Rank Name</div>
            <div className="flex-1">Description / Comparison</div>
         </div>

        {rankData.map((rank) => (
          <div 
            key={rank.level}
            className={`
              relative flex flex-col md:flex-row items-start md:items-center 
              bg-cyber-dark border border-gray-800 p-6 
              transition-all duration-300 hover:border-cyber-yellow hover:translate-x-2
              ${rank.level === 1 ? 'border-cyber-red/50 shadow-[0_0_20px_rgba(255,0,60,0.1)]' : ''}
            `}
          >
            {/* Rank Level Number */}
            <div className="md:w-24 mb-2 md:mb-0">
                <span className={`
                    font-display font-black text-4xl opacity-50
                    ${rank.level === 1 ? 'text-cyber-red' : 'text-gray-700'}
                `}>
                    0{rank.level}
                </span>
            </div>

            {/* Rank Name */}
            <div className="md:w-48 mb-3 md:mb-0">
                <h3 className={`font-display font-bold text-xl uppercase ${rank.level === 1 ? 'text-cyber-red animate-pulse' : 'text-white'}`}>
                    {rank.term}
                </h3>
                <span className="text-xs font-mono text-gray-500 tracking-wider">
                    {rank.enTerm}
                </span>
            </div>

            {/* Rank Description */}
            <div className="flex-1 w-full">
                <p className="font-body text-gray-300 text-sm md:text-base border-l-2 border-gray-800 pl-4 mb-3">
                    {rank.description}
                </p>
                
                {/* Comparison Badge */}
                <div className="flex items-center gap-2 md:ml-4">
                    <Scale size={14} className="text-cyber-yellow shrink-0" />
                    <div className="text-xs font-mono text-gray-400">
                        <span className="text-cyber-yellow uppercase mr-2 tracking-wider">Equivalent To:</span>
                        <span className="text-white bg-gray-900 px-2 py-0.5 rounded border border-gray-700">
                            {rank.comparison}
                        </span>
                    </div>
                </div>
            </div>

            {/* Visual Indicator of 'Higher' */}
            {rank.level !== 8 && (
                <div className="hidden md:block absolute -top-3 left-[2.2rem] opacity-20">
                    <div className="w-[1px] h-4 bg-gray-500 mx-auto"></div>
                </div>
            )}
            
            {/* Corner Deco */}
            <div className={`absolute top-0 right-0 w-2 h-2 ${rank.level <= 2 ? 'bg-cyber-red' : 'bg-gray-800'}`}></div>
          </div>
        ))}

        <div className="text-center mt-12 opacity-50">
            <ChevronUp className="mx-auto text-gray-500 mb-2 animate-bounce" />
            <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">Ascend or Die</p>
        </div>
      </div>
    </div>
  );
};