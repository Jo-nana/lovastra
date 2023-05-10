import React from 'react';
import './button.styles.scss';
import { Link } from 'react-router-dom';

// Render different types of buttons
const BUTTON_TYPES_CLASSES = {
  secondary: 'button-secondary',
  small: 'small-primary'
};

const Button = ({ children, buttonType, isDisabled, to, ...otherProps }) => {
  const buttonClass = `button-container ${BUTTON_TYPES_CLASSES[buttonType]}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...otherProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} disabled={isDisabled} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
