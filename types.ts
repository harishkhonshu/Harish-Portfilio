import React from 'react';

export interface HistoryLine {
  id: number;
  content: React.ReactNode;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  stack: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  type: string;
  points: string[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
}
