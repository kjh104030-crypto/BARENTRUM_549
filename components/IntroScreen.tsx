import React, { useEffect, useState } from 'react';
import { CyberText } from './CyberText';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const bootSequence = [
      { text: "INITIALIZING KERNEL...", delay: 200 },
      { text: "LOADING ASSETS...", delay: 800 },
      { text: "CHECKING BIOMETRICS...", delay: 1500 },
      { text: "ACCESS GRANTED: LEVEL 5", delay: 2200 },
      { text: "ESTABLISHING SECURE CONNECTION TO BARENTRUM...", delay: 2800 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Text typing effect
    bootSequence.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, text]);
      }, delay);
      timeouts.push(timeout);
    });

    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowButton(true);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    // Auto complete after sequence if user doesn't click
    const finalTimeout = setTimeout(() => {
       // Optional: Auto enter? keeping it manual for effect
    }, 4500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
      clearTimeout(finalTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center font-mono text-cyber-blue p-8 cursor-pointer" onClick={() => showButton && onComplete()}>
      <div className="w-full max-w-2xl">
        <div className="mb-8 h-64 overflow-hidden border border-gray-800 bg-gray-900/50 p-4 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          {lines.map((line, i) => (
            <div key={i} className="mb-1 text-sm md:text-base">
              <span className="text-cyber-yellow mr-2">[{new Date().toLocaleTimeString()}]</span>
              <span className="typing-effect">{line}</span>
            </div>
          ))}
          <div className="animate-pulse">_</div>
        </div>

        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-cyber-yellow transition-all duration-100 ease-out shadow-[0_0_10px_#FCEE0A]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500 mb-8">
          <span>System: ONLINE</span>
          <span>{Math.floor(progress)}%</span>
        </div>

        <div className={`text-center transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            WELCOME FOR USER!
          </h2>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onComplete();
            }}
            className="group relative px-12 py-4 bg-transparent border border-cyber-red text-cyber-red font-display font-bold text-xl tracking-widest hover:bg-cyber-red hover:text-black transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full border-t border-b border-transparent group-hover:border-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            ENTER ARCHIVE
          </button>
          <p className="mt-4 text-xs text-gray-600 animate-pulse">Touch Anywhere to Begin</p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #00F0FF 1px, #00F0FF 2px)' }}>
      </div>
    </div>
  );
};