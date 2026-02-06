import React from 'react';
import { terminologyData } from '../data';
import { CyberCard } from '../components/CyberCard';

export const Database: React.FC = () => {
  const getAccent = (category: string) => {
    switch (category) {
      case 'location': return 'yellow';
      case 'entity': return 'red';
      case 'rank': return 'blue'; 
      default: return 'blue';
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
      <div className="mb-12 border-l-4 border-cyber-blue pl-6">
        <h2 className="text-4xl font-display font-bold text-white mb-2">CITY_DATABASE</h2>
        <p className="font-mono text-cyber-blue">ACCESSING PUBLIC ARCHIVES... DON'T BELIEVE EVERYTHING.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {terminologyData.map((term, index) => (
          <CyberCard 
            key={index} 
            title={term.term} 
            subtitle={term.enTerm}
            accent={getAccent(term.category)}
          >
            {term.category === 'rank' && <span className="block text-xs font-bold text-cyber-blue mb-1">[APD RANK]</span>}
            {term.description}
          </CyberCard>
        ))}
      </div>

      <div className="mt-16 p-8 bg-cyber-dark border border-cyber-red relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#FF003C" strokeWidth="2">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10 L50 90 M10 50 L90 50" />
            </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-cyber-red mb-4 flex items-center">
            <span className="animate-pulse mr-2">●</span> WARNING: VERMIN ACTIVITY
        </h3>
        <p className="font-body text-gray-300 max-w-3xl">
          도시 전역, 특히 거미굴(Spider's Nest) 근처와 C.U 쥐구멍에서 <span className="text-cyber-red">악성 종양</span> 놈들이 설치고 있다. 
          어둠 속에 숨어서 뒤통수 칠 각만 재는 놈들이니 조심해. 뒷골목의 <span className="text-cyber-yellow">찌꺼기</span>들도 
          네놈 신체 뜯어먹으려고 눈에 불을 켰으니까, 털리기 싫으면 알아서 기어다녀라.
        </p>
      </div>
    </div>
  );
};