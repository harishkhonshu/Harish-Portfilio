import React from 'react';
import Terminal from './components/Terminal';
import Bio from './components/Bio';

const App: React.FC = () => {
  return (
    <div className="h-screen w-full font-['VT323',_monospace] bg-black text-slate-300 flex items-center justify-center p-2 sm:p-4 md:p-6 box-border">
      <main className="flex flex-col md:flex-row w-full h-full max-w-7xl gap-4">
        <div className="md:w-[30%] w-full h-full">
          <Bio />
        </div>
        <div className="md:w-[70%] w-full h-full">
          <Terminal />
        </div>
      </main>
    </div>
  );
};

export default App;