import React from 'react';
import Button from './Button.jsx';

const Buttons = () => {
  return (
    <div className="buttons">
      <Button index={0} />
      <Button index={1} />
      <Button index={2} />
    </div>
  );
};

export default Buttons;
