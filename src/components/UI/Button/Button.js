import React from 'react';

import './Button.css';

const Button = props => {
  const {className, isValid } = props;
  const buttonClass = `button ${className || ''} ${!isValid ? 'invalid' : ''}`;

  return (
    <button  type={props.type} className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
