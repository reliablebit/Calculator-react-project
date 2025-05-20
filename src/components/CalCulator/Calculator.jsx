import React from 'react';
import Display from '../Display/Display';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Calculator.css';

const buttons = [
  'Ac', '(', ')', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

function Calculator({ expression, result, isDarkMode, onToggleTheme, onButtonClick }) {
  return (
    <div className={`calculator ${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      <Display expression={expression} result={result} />
      <ButtonGrid buttons={buttons} onButtonClick={onButtonClick} />
    </div>
  );
}

export default Calculator;
