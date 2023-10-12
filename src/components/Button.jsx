import React from 'react';
import { buttonsText } from './ButtonsText.js';

const Button = ({ index }) => {
  return (
    <div className="button-outer">
      <div className="button">
        <span>{buttonsText[index].number}</span>
      </div>
      <p>{buttonsText[index].text}</p>
    </div>
  );
};

export default Button;
