import React, { useState } from 'react';
import { characterData } from '../data';
import { Character } from '../types';
import { User, MapPin, Tag, FileText, X, Fingerprint, ScanLine, Paperclip, Stamp } from 'lucide-react';

export const Characters: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (selectedChar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedChar]);

  // Safe ID generator that handles Unicode characters
  const generateId = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash).toString(16).toUpperCase().padStart(4, '0').substring(0, 8);
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-4xl font-display font-bold text-white mb-2">PERSONNEL</h2>
          <p className="font-mono text-gray-400">Identified Residents & Operatives</p>
        </div>
        <div className="font-mono text-xs text-cyber-red mt-4 md:mt-0 animate-pulse bg-cyber-red/10 px-2 py-1 border border-cyber-red/30">
          RECORDS ACCESS: GRANTED
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {characterData.map((char, index) => (
          <div 
            key={index}
            onClick={() => setSelectedChar(char)}
            className="group relative bg-[#0f0f0f] border border-gray-800 hover:border-cyber-blue p-4 cursor-pointer transition-all duration-300 hover:bg-[#151515] overflow-hidden hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            {/* Hover Glitch Effect Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
            <div className="flex items-start justify-between mb-4">
               <div className="w-12 h-12 bg-gray-800 flex items-center justify-center border border-gray-700 group-hover:border-cyber-blue group-hover:text-cyber-blue transition-colors text-gray-500">
                  <User size={20} />
               </div>
               <div className="text-right">
                  <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">ID_CODE</span>
                  <span className="block text-xs font-mono text-cyber-blue">#{generateId(char.name)}</span>
               </div>
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">
              {char.name}
            </h3>
            <p className="text-xs text-gray-400 font-mono mb-4 uppercase tracking-tight truncate">
              {char.affiliation}
            </p>

            <div className="flex items-center text-xs text-gray-500 font-mono border-t border-gray-800 pt-3 mt-auto">
               <MapPin size={12} className="mr-1" />
               {char.location}
            </div>
            
            {/* Corner Deco */}
            <div className="absolute bottom-0 right-0 p-1">
                <div className="w-2 h-2 border-r border-b border-gray-600 group-hover:border-cyber-blue transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* DOCUMENT MODAL */}
      {selectedChar && (
        <div className="fixed inset-0 z-[70] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            
            {/* Dark Backdrop with Blur */}
            <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-md" 
                onClick={() => setSelectedChar(null)}
                aria-hidden="true"
            />
            
            {/* Paper Document Container */}
            <div className="relative w-full max-w-4xl bg-[#e5e5e5] text-black shadow-2xl transform transition-all">
                
                {/* Paper Texture/Noise Overlay (Simulated via CSS) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                {/* Top Secret Stamp (Watermark) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9" alt="" className="w-full" />
                    <div className="border-8 border-black p-4 text-9xl font-black rotate-[-30deg] text-center whitespace-nowrap">
                        CONFIDENTIAL
                    </div>
                </div>

                {/* Header Strip */}
                <div className="bg-[#2a2a2a] text-white p-2 flex justify-between items-center px-4 print-strip relative z-10">
                    <div className="text-xs font-mono tracking-widest">BARENTRUM CITY ARCHIVES // FORM 20-77-B</div>
                    <button onClick={() => setSelectedChar(null)} className="hover:text-cyber-red transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 md:p-12 relative z-10">
                    {/* Document Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-black pb-6 mb-8 gap-6">
                        <div className="flex items-start gap-6">
                            {/* Photo Placeholder */}
                            <div className="w-32 h-40 bg-gray-300 border-2 border-dashed border-gray-500 flex flex-col items-center justify-center grayscale shrink-0 shadow-inner">
                                <User size={48} className="text-gray-500 opacity-50 mb-2" />
                                <span className="text-[10px] font-mono font-bold text-gray-500 text-center px-2">IMAGE NOT AVAILABLE</span>
                            </div>
                            
                            <div>
                                <div className="inline-block border-2 border-cyber-red text-cyber-red px-2 py-1 text-xs font-black uppercase mb-2 rotate-[-2deg] opacity-80">
                                    Classified
                                </div>
                                <h1 className="text-5xl font-display font-black text-black uppercase tracking-tighter mb-1">
                                    {selectedChar.name}
                                </h1>
                                <div className="font-mono text-sm font-bold text-gray-700 flex flex-col gap-1">
                                    <span>AFFILIATION: {selectedChar.affiliation.toUpperCase()}</span>
                                    <span>ID_REF: {generateId(selectedChar.name)}-{generateId(selectedChar.affiliation)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Top Right Stamp */}
                        <div className="hidden md:block">
                            <div className="border-4 border-red-700 text-red-700 p-2 font-black text-xl uppercase opacity-70 rotate-12 mask-image-grunge">
                                <div className="text-xs text-center border-b border-red-700 mb-1">CITY THREAT</div>
                                AUTHORIZED
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
                        
                        {/* Sidebar */}
                        <div className="md:col-span-1 space-y-6">
                            <div className="bg-white border-2 border-gray-800 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h4 className="font-bold text-sm underline underline-offset-4 mb-3 uppercase flex items-center gap-2">
                                    <MapPin size={14} /> Known Location
                                </h4>
                                <p className="text-lg font-bold">{selectedChar.location}</p>
                            </div>

                            <div className="bg-white border-2 border-gray-800 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h4 className="font-bold text-sm underline underline-offset-4 mb-3 uppercase flex items-center gap-2">
                                    <Tag size={14} /> Personality Matrix
                                </h4>
                                <p className="text-sm leading-tight">{selectedChar.traits}</p>
                            </div>
                            
                            <div className="text-center opacity-50 mt-8">
                                <Fingerprint size={64} className="mx-auto mb-2" />
                                <div className="text-[10px] uppercase">Biometrics on file</div>
                                <div className="h-8 w-full bg-black mt-2 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEcDyM53u7lEQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAWSURBVAjXYmBgYPjPIMTAwMDw/z8DABOEAwVd13rFAAAAAElFTkSuQmCC')] bg-repeat"></div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            <div className="relative">
                                {/* Section Header */}
                                <h3 className="text-xl font-black bg-black text-white inline-block px-4 py-1 mb-4 uppercase transform -skew-x-12">
                                    Physical Profile
                                </h3>
                                <div className="bg-white border-l-4 border-black p-4 text-sm leading-relaxed text-gray-900">
                                    {selectedChar.appearance}
                                </div>
                            </div>

                            {selectedChar.note && (
                                <div className="relative">
                                    <div className="absolute -left-3 top-2">
                                        <Paperclip className="text-gray-600 rotate-45" />
                                    </div>
                                    <h3 className="text-xl font-black bg-cyber-yellow text-black inline-block px-4 py-1 mb-4 uppercase transform -skew-x-12 ml-4">
                                        Archive Notes
                                    </h3>
                                    <div className="bg-[#fff9c4] border border-gray-400 p-6 shadow-sm text-sm font-typewriter leading-relaxed ml-2 relative">
                                        {/* Tape Effect */}
                                        <div className="absolute -top-3 left-1/2 w-16 h-6 bg-yellow-200/50 rotate-[-2deg] backdrop-blur-[1px]"></div>
                                        {selectedChar.note}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-4 border-t-2 border-dashed border-gray-400 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500 uppercase">
                        <div>
                            <span>FILED BY: {Math.random().toString(36).substr(2, 5).toUpperCase()}</span>
                            <span className="mx-2">|</span>
                            <span>DATE: 2077.11.24</span>
                        </div>
                        <div className="mt-2 md:mt-0 flex gap-4">
                            <span>[ PRINT ]</span>
                            <span>[ DELETE ]</span>
                            <span>[ ARCHIVE ]</span>
                        </div>
                    </div>

                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};