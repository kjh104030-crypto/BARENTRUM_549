import React, { useState } from 'react';
import { CyberText } from '../components/CyberText';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Network, Lock, X } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'warning' | 'keypad'>('warning');
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSecretClick = () => {
    setModalOpen(true);
    setModalStep('warning');
    setPin('');
    setError(false);
  };

  const handleConfirm = () => {
    setModalStep('keypad');
  };

  const handleKeypad = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      setError(false);
      
      if (newPin.length === 4) {
        if (newPin === '0430') {
          setTimeout(() => {
            setModalOpen(false);
            navigate('/amygdala');
          }, 300);
        } else {
          setError(true);
          setTimeout(() => setPin(''), 500);
        }
      }
    }
  };

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
          <button
            onClick={handleSecretClick}
            className="group relative px-4 py-4 bg-green-900/20 border border-green-500 text-green-500 font-display font-bold text-lg hover:bg-green-500 hover:text-black transition-all cyber-clip-path"
          >
             <Network size={24} className="group-hover:animate-ping" />
          </button>

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

      {/* AMYGDALA MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setModalOpen(false)}></div>
          
          <div className="relative w-full max-w-md bg-black border border-green-500 shadow-[0_0_50px_rgba(0,255,0,0.2)] p-8">
             <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-green-700 hover:text-green-400">
               <X size={20} />
             </button>

             {modalStep === 'warning' ? (
               <div className="text-center">
                 <Lock size={48} className="mx-auto text-green-500 mb-6 animate-pulse" />
                 <h3 className="text-2xl font-display font-bold text-white mb-4">ACCESS WARNING</h3>
                 <p className="font-mono text-green-400 mb-8 leading-relaxed">
                   "잠깐만, 여긴 편도체야. 네가 함부로 들어가선 안되는 곳이라고."
                 </p>
                 <div className="flex gap-4 justify-center font-mono">
                   <button 
                    onClick={handleConfirm}
                    className="px-6 py-2 border border-green-600 text-green-500 hover:bg-green-600 hover:text-black transition-colors"
                   >
                     YES
                   </button>
                   <button 
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-2 border border-gray-600 text-gray-500 hover:bg-gray-800 hover:text-white transition-colors"
                   >
                     NO
                   </button>
                 </div>
               </div>
             ) : (
               <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-red-500 mb-2">ACCESS RESTRICTED</h3>
                  <p className="font-mono text-xs text-gray-400 mb-6">"너 진짜 구제불능 이구나."</p>
                  
                  {/* PIN Display */}
                  <div className={`bg-gray-900 border ${error ? 'border-red-500 text-red-500' : 'border-green-800 text-green-500'} p-4 mb-6 font-mono text-2xl tracking-[1em] h-16 flex items-center justify-center`}>
                    {pin.padEnd(4, '_')}
                  </div>

                  {/* Keypad */}
                  <div className="grid grid-cols-3 gap-2 font-mono">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <button 
                        key={num}
                        onClick={() => handleKeypad(num.toString())}
                        className="p-4 border border-green-900 text-green-500 hover:bg-green-900 hover:text-white transition-colors"
                      >
                        {num}
                      </button>
                    ))}
                    <button 
                      onClick={() => setPin('')}
                      className="p-4 border border-red-900 text-red-500 hover:bg-red-900/20"
                    >
                      CLR
                    </button>
                    <button 
                      onClick={() => handleKeypad('0')}
                      className="p-4 border border-green-900 text-green-500 hover:bg-green-900 hover:text-white transition-colors"
                    >
                      0
                    </button>
                    <button 
                      className="p-4 border border-green-900 text-green-500 opacity-50 cursor-not-allowed"
                    >
                      ENT
                    </button>
                  </div>
               </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
};