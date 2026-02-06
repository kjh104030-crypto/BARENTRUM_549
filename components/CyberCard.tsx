import React from 'react';

interface CyberCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  accent?: 'yellow' | 'blue' | 'red';
  className?: string;
}

export const CyberCard: React.FC<CyberCardProps> = ({ title, subtitle, children, accent = 'yellow', className = "" }) => {
  const accentColors = {
    yellow: 'border-cyber-yellow text-cyber-yellow',
    blue: 'border-cyber-blue text-cyber-blue',
    red: 'border-cyber-red text-cyber-red'
  };

  const accentBg = {
    yellow: 'bg-cyber-yellow',
    blue: 'bg-cyber-blue',
    red: 'bg-cyber-red'
  };

  return (
    <div className={`relative group bg-cyber-dark/80 border border-cyber-gray p-6 overflow-hidden transition-all duration-300 hover:border-opacity-100 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] ${className}`}>
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-2 h-2 ${accentBg[accent]} transition-all duration-300 group-hover:w-16`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 ${accentBg[accent]} transition-all duration-300 group-hover:w-16`} />
      
      {/* Header */}
      <div className="mb-4 relative z-10 border-b border-cyber-gray pb-2 group-hover:border-white/20 transition-colors">
        <h3 className={`font-display font-bold text-xl uppercase tracking-widest ${accentColors[accent]} mb-1`}>
          {title}
        </h3>
        {subtitle && (
          <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
            [{subtitle}]
          </p>
        )}
      </div>

      {/* Content */}
      <div className="font-body text-gray-300 leading-relaxed relative z-10">
        {children}
      </div>

      {/* Background Decor */}
      <div className="absolute top-4 right-4 text-cyber-gray/10 text-6xl font-display font-black select-none pointer-events-none z-0">
        {title.charAt(0)}
      </div>
    </div>
  );
};