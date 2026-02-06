import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Radio } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'DATABASE', path: '/database' },
  { label: 'RANKS', path: '/ranks' },
  { label: 'ASSOCIATIONS', path: '/associations' },
  { label: 'CORPORATIONS', path: '/corporations' },
  { label: 'SYNAPSE', path: '/synapse', className: 'text-cyber-red border-cyber-red hover:text-red-500 hover:shadow-[0_0_10px_rgba(255,0,60,0.5)]' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 backdrop-blur-sm border-b border-cyber-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <Radio className="h-8 w-8 text-cyber-yellow animate-pulse" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-cyber-yellow transition-colors">
                BARENTRUM
              </span>
              <span className="font-mono text-[0.6rem] text-cyber-blue uppercase tracking-[0.2em] -mt-1">
                City Archive v2.0.77
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-display text-sm font-bold tracking-widest px-3 py-2 transition-all duration-200 border-b-2 ${
                      item.className ? item.className : 'hover:text-cyber-yellow'
                    } ${
                      isActive
                        ? item.className 
                          ? 'bg-cyber-red/10 border-cyber-red shadow-[0_4px_10px_-4px_rgba(255,0,60,0.5)]' 
                          : 'text-cyber-yellow border-cyber-yellow shadow-[0_4px_10px_-4px_rgba(252,238,10,0.5)]'
                        : 'border-transparent hover:border-gray-600'
                    } ${!item.className && !isActive ? 'text-gray-400' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-black border-b border-cyber-yellow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-display font-bold tracking-widest ${
                    item.className ? 'text-cyber-red' : ''
                  } ${
                    isActive ? 'bg-cyber-yellow text-cyber-black' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};