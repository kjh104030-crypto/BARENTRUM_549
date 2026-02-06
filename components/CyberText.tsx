import React from 'react';

interface CyberTextProps {
  text: string;
  className?: string;
  glitch?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const CyberText: React.FC<CyberTextProps> = ({ text, className = "", glitch = false, tag = 'span' }) => {
  const Tag = tag;
  
  if (glitch) {
    return (
      <div className={`relative inline-block group ${className}`}>
        <Tag className="relative z-10">{text}</Tag>
        <Tag 
          className="absolute top-0 left-0 -ml-[2px] text-cyber-red opacity-0 group-hover:opacity-70 animate-glitch-1 z-0 select-none"
          aria-hidden="true"
        >
          {text}
        </Tag>
        <Tag 
          className="absolute top-0 left-0 ml-[2px] text-cyber-blue opacity-0 group-hover:opacity-70 animate-glitch-2 z-0 select-none"
          aria-hidden="true"
        >
          {text}
        </Tag>
      </div>
    );
  }

  return <Tag className={className}>{text}</Tag>;
};