import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ isDarkMode, onToggleTheme }) {
  return (
    <button className="toggle-button" onClick={onToggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default ThemeToggle;
