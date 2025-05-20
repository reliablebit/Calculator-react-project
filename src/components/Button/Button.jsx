import React from 'react';
import './Button.css';

function Button({ label, onClick }) {
  // Accent styles for special buttons
  const accentButtons = ['Ac', '/', '*', '-', '+', '='];
  const isAccent = accentButtons.includes(label);
  const classes = `button ${label === '=' ? 'equal-button accent' : isAccent ? 'accent' : ''}`;

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
