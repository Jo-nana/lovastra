import './button.styles.scss'

// Render different types of buttons
const BUTTON_TYPES_CLASSES ={
  secondary: 'button-secondary',
  small: 'small-primary'
}

const Button = ({ children, buttonType, isDisabled, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      disabled={isDisabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
