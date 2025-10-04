import React, { useRef, useEffect } from 'react';
import { useTerminal } from '../hooks/useTerminal';

const Header = () => (
  <pre className="text-green-400 text-base sm:text-lg md:text-xl">
{`
██╗  ██╗ █████╗ ██████╗ ██╗███████╗██╗  ██╗     ██████╗ 
██║  ██║██╔══██╗██╔══██╗██║██╔════╝██║  ██║     ██╔══██╗
███████║███████║██████╔╝██║███████╗███████║     ██████╔╝
██╔══██║██╔══██║██╔══██╗██║╚════██║██╔══██║     ██╔══██╗
██║  ██║██║  ██║██║  ██║██║███████║██║  ██║     ██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝     ╚═════╝ 
`}
  </pre>
);

const Terminal: React.FC = () => {
  const { history, inputValue, handleInputChange, handleFormSubmit, handleKeyDown } = useTerminal();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="w-full h-full flex flex-col p-2 sm:p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border-2 border-gray-800 shadow-2xl"
    >
      <div 
        className="w-full h-full flex flex-col bg-black/80 p-2 sm:p-4 rounded-md overflow-hidden"
        onClick={handleTerminalClick}
      >
        <div className="flex-shrink-0">
          <Header />
        </div>
        <div className="flex-grow overflow-y-auto pr-2 text-base md:text-lg" ref={scrollRef}>
          <div className="space-y-1">
            {history.map((line) => (
              <div key={line.id}>{line.content}</div>
            ))}
          </div>
        </div>
        <form onSubmit={handleFormSubmit} className="flex items-center mt-2 text-base md:text-lg">
          <label htmlFor="command-input" className="flex items-center">
            <span className="text-cyan-400">harishb@portfolio</span>
            <span className="text-slate-400">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-400">$</span>
          </label>
          <input
            id="command-input"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="peer flex-grow bg-transparent border-none text-slate-100 focus:outline-none ml-3"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
          <span className="w-2 h-6 md:h-7 bg-pink-500 animate-pulse ml-1 invisible peer-focus:visible"></span>
        </form>
      </div>
    </div>
  );
};

export default Terminal;