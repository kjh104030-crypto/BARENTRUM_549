import React from 'react';
import { corporationData } from '../data';
import { Hexagon } from 'lucide-react';

export const Corporations: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-black text-white mb-4 tracking-tighter">MEGACORPS</h2>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-4"></div>
            <p className="font-mono text-gray-400 max-w-2xl mx-auto">
                "바런트럼 법망을 요리조리 피해서 배 불리는 돼지들. 얘네 기술이 혁신? 웃기지 마, 그냥 재앙이야."
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporationData.map((corp, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 p-8 relative overflow-hidden group hover:border-gray-600 transition-colors">
                    {/* Background Glitch Image Placeholders */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:bg-cyber-blue/10 transition-colors"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-3xl font-display font-bold text-white group-hover:text-cyber-blue transition-colors">
                                    {corp.name}
                                </h3>
                                <span className="font-mono text-sm tracking-[0.2em] text-gray-500 uppercase block mt-1">
                                    {corp.enName} CORP.
                                </span>
                            </div>
                            <Hexagon className="text-gray-700 group-hover:text-cyber-blue transition-colors animate-pulse" />
                        </div>

                        <blockquote className="border-l-2 border-cyber-yellow pl-4 py-2 mb-6 italic text-gray-300 font-body">
                            "{corp.motto}"
                        </blockquote>

                        <p className="text-sm text-gray-400 mb-6 font-mono">
                            {corp.description}
                        </p>

                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-cyber-red uppercase tracking-widest mb-2">Key Products</h4>
                            <ul className="space-y-1">
                                {corp.products.map((prod, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-cyber-blue mr-2"></span>
                                        {prod}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};