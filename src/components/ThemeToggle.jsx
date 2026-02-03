import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle-btn" title="Toggle Theme">
      {theme === 'light' ? (
        <Moon size={24} fill="currentColor" />
      ) : (
        <Sun size={24} fill="currentColor" />
      )}
    </button>
  );
};

export default ThemeToggle;