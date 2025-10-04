import React, { useState, useCallback, useEffect } from 'react';
import { HistoryLine } from '../types';
import { processCommand } from '../utils/commandProcessor';

const welcomeMessage: HistoryLine[] = [
  { id: 1, content: "Harish B's Interactive Portfolio." },
  { id: 2, content: "Welcome! Type 'help' to see the full list of commands." },
  { id: 3, content: ' ' },
];

export const useTerminal = () => {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    setHistory(welcomeMessage);
  }, []);

  const executeCommand = useCallback((command: string) => {
    if (command.trim().toLowerCase() === 'clear') {
      setHistory(welcomeMessage);
      return;
    }
    
    const commandLine = React.createElement('div', { className: 'flex items-center' },
      React.createElement('span', null, 
        React.createElement('span', { className: "text-cyan-400" }, "harishb@portfolio"),
        React.createElement('span', { className: "text-slate-400" }, ":"),
        React.createElement('span', { className: "text-cyan-400" }, "~"),
        React.createElement('span', { className: "text-slate-400" }, "$")
      ),
      React.createElement('span', { className: 'ml-2' }, command)
    );
    const output = processCommand(command);

    setHistory(prev => [
      ...prev,
      { id: Date.now(), content: commandLine },
      { id: Date.now() + 1, content: output },
      { id: Date.now() + 2, content: ' ' },
    ]);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = inputValue.trim();
    if (command) {
      executeCommand(command);
      // Add to command history, avoiding consecutive duplicates
      if (command !== commandHistory[commandHistory.length - 1]) {
        const newCommandHistory = [...commandHistory, command];
        setCommandHistory(newCommandHistory);
        setHistoryIndex(newCommandHistory.length);
      } else {
        // If same command, just reset the index to the end
        setHistoryIndex(commandHistory.length);
      }
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (commandHistory.length === 0) {
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.max(0, historyIndex - 1);
      setInputValue(commandHistory[newIndex]);
      setHistoryIndex(newIndex);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.min(commandHistory.length, historyIndex + 1);
      setInputValue(commandHistory[newIndex] || '');
      setHistoryIndex(newIndex);
    }
  };

  return {
    history,
    inputValue,
    handleInputChange,
    handleFormSubmit,
    handleKeyDown,
  };
};