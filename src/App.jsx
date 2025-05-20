import React, { useState } from 'react';
import Calculator from './components/CalCulator/Calculator';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toLocaleString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'Ac') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Calculator
        expression={expression}
        result={result}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onButtonClick={handleClick}
      />
    </div>
  );
}

export default App;
