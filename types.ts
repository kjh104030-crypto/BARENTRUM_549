import React from 'react';

export interface Terminology {
  term: string;
  enTerm?: string;
  description: string;
  category: 'location' | 'entity' | 'concept' | 'rank';
}

export interface Rank {
  term: string;
  enTerm: string;
  description: string;
  comparison: string; // New field for simple comparison/analogy
  level: number; // 1 is highest (Self-Transcendence), 8 is lowest (Instinct)
}

export interface Association {
  name: string;
  role: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Corporation {
  name: string;
  enName: string;
  motto: string;
  description: string;
  products: string[];
}

export interface Faction {
  name: string;
  enName: string;
  description: string;
  layer: 'Upper' | 'Lower'; // 상층 vs 하층
  type: string; // e.g. "Military Corp", "Gang"
  traits: string[]; // Key characteristics or weapons
}

export interface Character {
  name: string;
  traits: string;
  location: string;
  appearance: string;
  affiliation: string;
  note?: string;
}

export interface NavItem {
  label: string;
  path: string;
  className?: string; // For custom styling like the red Synapse menu
}