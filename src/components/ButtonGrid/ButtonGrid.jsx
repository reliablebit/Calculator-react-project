import React from 'react';
import Button from '../Button/Button';
import './ButtonGrid.css';

function ButtonGrid({ buttons, onButtonClick }) {
  return (
    <div className="button-grid">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          label={btn}
          onClick={() => onButtonClick(btn)}
        />
      ))}
    </div>
  );
}

export default ButtonGrid;
