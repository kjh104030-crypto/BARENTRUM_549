import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { factionData, terminologyData } from '../data';
import { Shield, Skull, Sword, Target, Hammer, ChevronsUp, ChevronsDown, Users, Zap, Brain, Syringe, Network } from 'lucide-react';

export const Factions: React.FC = () => {
  const location = useLocation();
  const upperFactions = factionData.filter(f => f.layer === 'Upper');
  const lowerFactions = factionData.filter(f => f.layer === 'Lower');

  // Filter out the specific operative types from terminology data
  const operatives = [
    { id: 'apd', ...terminologyData.find(t => t.term === 'APD')! },
    { id: 'bpd', ...terminologyData.find(t => t.term === 'BPD')! },
    { id: 'spd', ...terminologyData.find(t => t.term === 'SPD')! },
    { id: 'gaba', ...terminologyData.find(t => t.term === 'GABA')! },
    { id: 'hippocampus', ...terminologyData.find(t => t.term === '해마')! },
  ];

  // Handle Hash Scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-black text-white mb-4 tracking-tighter">FACTIONS</h2>
            <div className="w-24 h-1 bg-cyber-yellow mx-auto mb-4"></div>
            <p className="font-mono text-gray-400 max-w-2xl mx-auto italic">
                "이 미친 도시는 위아래가 아주 역겨울 정도로 확실해. 위쪽 놈들은 펜대 굴려 사람 죽이고, 아래쪽 놈들은 쇠붙이로 쑤셔대고. 그 사이엔? 돈 몇 푼에 목숨 거는 정신병자들 뿐이지."
            </p>
        </div>

        {/* Upper Layer Section */}
        <div id="upper" className="mb-20 scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 border-b border-cyber-blue pb-4">
                <ChevronsUp className="text-cyber-blue w-8 h-8" />
                <div>
                    <h3 className="text-3xl font-display font-bold text-white">UPPER LAYER</h3>
                    <p className="font-mono text-sm text-cyber-blue uppercase tracking-widest">Megacorps & Military Complex</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upperFactions.map((faction, idx) => (
                    <div key={idx} className="bg-[#0f0f15] border border-gray-800 p-6 relative group overflow-hidden hover:border-cyber-blue transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={100} />
                        </div>
                        
                        <div className="relative z-10">
                            <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">
                                {faction.name}
                            </h4>
                            <span className="text-xs font-mono text-gray-500 uppercase mb-4 block">{faction.enName}</span>
                            
                            <p className="text-gray-300 font-body mb-6 min-h-[4rem] text-sm leading-relaxed">
                                {faction.description}
                            </p>

                            <div className="space-y-2">
                                <div className="text-xs font-bold text-cyber-blue uppercase tracking-widest border-b border-gray-800 pb-1 mb-2">Specialties</div>
                                <ul className="space-y-1">
                                    {faction.traits.map((trait, tIdx) => (
                                        <li key={tIdx} className="text-xs font-mono text-gray-400 flex items-center">
                                            <span className="w-1 h-1 bg-cyber-blue mr-2 rounded-full"></span>
                                            {trait}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <div className="mt-4 bg-blue-900/10 border border-blue-900/30 p-4 font-mono text-xs text-blue-200">
                <span className="font-bold mr-2">[INFO]</span> 
                상층 세력 구성: 대기업(Megacorps), 고위직 간부, 성공한 사업가 등 상류층. 이들은 직접 손을 더럽히지 않는다. 더러운 건 돈으로 해결하니까.
            </div>
        </div>

        {/* Lower Layer Section */}
        <div id="lower" className="mb-20 scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 border-b border-cyber-red pb-4">
                <ChevronsDown className="text-cyber-red w-8 h-8" />
                <div>
                    <h3 className="text-3xl font-display font-bold text-white">LOWER LAYER</h3>
                    <p className="font-mono text-sm text-cyber-red uppercase tracking-widest">Gangs, Scavengers & Rats</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {lowerFactions.map((faction, idx) => (
                    <div key={idx} className="bg-[#150f0f] border border-gray-800 p-6 relative group overflow-hidden hover:border-cyber-red transition-all">
                         <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            {idx === 0 ? <Skull size={100} /> : idx === 1 ? <Sword size={100} /> : <Hammer size={100} />}
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-cyber-red transition-colors">
                                {faction.name}
                            </h4>
                            <span className="text-xs font-mono text-gray-500 uppercase mb-4 block">{faction.enName}</span>
                            
                            <p className="text-gray-300 font-body mb-6 min-h-[4rem] text-sm leading-relaxed">
                                {faction.description}
                            </p>

                            <div className="space-y-2">
                                <div className="text-xs font-bold text-cyber-red uppercase tracking-widest border-b border-gray-800 pb-1 mb-2">Traits</div>
                                <ul className="space-y-1">
                                    {faction.traits.map((trait, tIdx) => (
                                        <li key={tIdx} className="text-xs font-mono text-gray-400 flex items-center">
                                            <span className="w-1 h-1 bg-cyber-red mr-2 rounded-full"></span>
                                            {trait}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 bg-red-900/10 border border-red-900/30 p-4 font-mono text-xs text-red-200">
                <span className="font-bold mr-2">[INFO]</span> 
                하층 세력 구성: 소속/안전/본능 등급의 APD, SPD, 그리고 뒷골목의 찌꺼기와 C.U의 종양들. 여기선 목숨값이 탄창 하나 값보다 싸다.
            </div>
        </div>

        {/* Operatives & Specialists Section */}
        <div id="operatives" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-8 border-b border-cyber-yellow pb-4">
                <Users className="text-cyber-yellow w-8 h-8" />
                <div>
                    <h3 className="text-3xl font-display font-bold text-white">INDEPENDENT OPERATIVES</h3>
                    <p className="font-mono text-sm text-cyber-yellow uppercase tracking-widest">Contractors & Specialists</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {operatives.map((op) => {
                  let Icon = Users;
                  let colorClass = "text-gray-400 border-gray-800 hover:border-gray-500";
                  let bgClass = "bg-[#111]";

                  if (op.term === 'APD') { 
                    Icon = Shield; 
                    colorClass = "text-cyber-blue border-cyber-blue/30 hover:border-cyber-blue";
                    bgClass = "bg-blue-900/5";
                  }
                  if (op.term === 'BPD') { 
                    Icon = Brain; 
                    colorClass = "text-purple-400 border-purple-500/30 hover:border-purple-500"; 
                    bgClass = "bg-purple-900/5";
                  }
                  if (op.term === 'SPD') { 
                    Icon = Zap; 
                    colorClass = "text-cyber-red border-cyber-red/30 hover:border-cyber-red"; 
                    bgClass = "bg-red-900/5";
                  }
                  if (op.term === 'GABA') { 
                    Icon = Syringe; 
                    colorClass = "text-cyber-yellow border-cyber-yellow/30 hover:border-cyber-yellow"; 
                    bgClass = "bg-yellow-900/5";
                  }
                  if (op.term === '해마') {
                    Icon = Network;
                    colorClass = "text-green-400 border-green-500/30 hover:border-green-500";
                    bgClass = "bg-green-900/5";
                  }

                  return (
                    <div 
                      key={op.id} 
                      id={op.id} 
                      className={`relative p-6 border ${colorClass} ${bgClass} transition-all duration-300 scroll-mt-32`}
                    >
                       <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-3xl font-display font-bold text-white mb-1">{op.term}</h4>
                            <span className="font-mono text-xs uppercase tracking-widest opacity-70">{op.enTerm}</span>
                          </div>
                          <div className={`p-3 border rounded-sm ${colorClass}`}>
                            <Icon size={24} />
                          </div>
                       </div>
                       
                       <p className="text-gray-300 font-body text-lg leading-relaxed border-l-2 pl-4 border-gray-700">
                          {op.description}
                       </p>

                       <div className="absolute top-0 right-0 px-2 py-1 text-[10px] font-mono font-bold uppercase bg-black border-b border-l border-gray-800 text-gray-500">
                          Class: Entity
                       </div>
                    </div>
                  );
                })}
            </div>
        </div>
    </div>
  );
};