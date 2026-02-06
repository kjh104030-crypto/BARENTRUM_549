import React from 'react';
import { CyberText } from '../components/CyberText';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder - CSS Pattern for tech grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-4 inline-flex items-center space-x-2 border border-cyber-red text-cyber-red px-3 py-1 font-mono text-xs uppercase tracking-widest bg-cyber-red/10 animate-pulse">
          <AlertTriangle size={14} />
          <span>Warning: LETHALITY ZONE</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-display font-black text-white mb-2 tracking-tighter leading-none">
          <CyberText text="BARENTRUM" glitch />
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl md:text-2xl text-cyber-blue font-body font-light tracking-wide border-l-4 border-cyber-yellow pl-4 text-left md:text-center md:border-l-0 md:border-b-4 md:pb-2">
          "인구가 미어터지게 많아서 사람 몇 명 죽어도 아무도 모르는 거대한 시궁창"
        </p>

        <p className="mt-8 max-w-3xl text-gray-400 text-lg font-mono">
          26개 구역으로 찢겨진 디스토피아. 어디서 기어나왔든 바런트럼은 널 씹어먹을 준비가 되어 있어.
          공식적으로든, 불법으로든, 살고 싶으면 바쁘게 움직여.
        </p>
        <p className="mt-4 text-sm text-cyber-red font-mono italic">
          작성자: 라몰. (비꼬는 거 맞으니까, 억울하면 출세하든가.)
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link 
            to="/database"
            className="group relative px-8 py-4 bg-cyber-yellow text-cyber-black font-display font-bold text-lg tracking-widest overflow-hidden hover:bg-white transition-colors cyber-clip-path"
          >
            <span className="relative z-10 flex items-center">
              ACCESS DATABASE <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-cyber-gray pt-10">
          <div className="text-left">
            <div className="text-cyber-yellow font-display text-4xl font-bold">26</div>
            <div className="text-gray-500 font-mono text-sm uppercase tracking-widest">Districts</div>
          </div>
          <div className="text-left md:text-center">
             <div className="text-cyber-red font-display text-4xl font-bold">UNLIMITED</div>
             <div className="text-gray-500 font-mono text-sm uppercase tracking-widest">Threat Level</div>
          </div>
          <div className="text-left md:text-right">
             <div className="text-cyber-blue font-display text-4xl font-bold">10+</div>
             <div className="text-gray-500 font-mono text-sm uppercase tracking-widest">Megacorps</div>
          </div>
        </div>
      </div>
    </div>
  );
};