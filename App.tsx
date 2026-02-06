import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Database } from './pages/Database';
import { Associations } from './pages/Associations';
import { Corporations } from './pages/Corporations';
import { Ranks } from './pages/Ranks';
import { Synapse } from './pages/Synapse';
import { IntroScreen } from './components/IntroScreen';

// Scanline Effect Component
const Scanlines = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-5">
    <div className="w-full h-[2px] bg-white absolute animate-scanline shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  
  // Reset scroll on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/corporations" element={<Corporations />} />
          <Route path="/synapse" element={<Synapse />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm font-mono">
          <div>© 2077 BARENTRUM CITY ARCHIVES. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>SYS.STATUS: STABLE</span>
            <span>NET.VER: 3.1.2</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-black text-gray-100 selection:bg-cyber-yellow selection:text-black font-body">
      <Scanlines />
      {!introComplete ? (
        <IntroScreen onComplete={() => setIntroComplete(true)} />
      ) : (
        <HashRouter>
          <AppContent />
        </HashRouter>
      )}
    </div>
  );
}

export default App;