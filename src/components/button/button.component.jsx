import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './button.styles.scss';
import { Link } from 'react-router-dom';

// Render different types of buttons
const BUTTON_TYPES_CLASSES = {
  secondary: 'button-secondary',
  small: 'small-primary',
  chatButton: 'chat-button',
  traitsButton: 'traits-button'
};

const Button = ({ children, buttonType, isDisabled, to, ...otherProps }) => {
  const buttonClass = `button-container ${BUTTON_TYPES_CLASSES[buttonType]}`;

  // applying Link to the button component
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...otherProps}>
        {children}
      </Link>
    );
  }

   // Render the chatButton type with Font Awesome arrow icon
   if (buttonType === 'chatButton') {
    return (
      <button className={buttonClass} disabled={isDisabled} {...otherProps}>
        {children}
        <FontAwesomeIcon icon={faArrowRight} className="fa-light fa-arrow-right" />
      </button>
    );
  }

  return (
    <button className={buttonClass} disabled={isDisabled} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
