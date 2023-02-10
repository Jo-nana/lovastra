import './button.styles.scss'

// Render different types of buttons
const BUTTON_TYPES_CLASSES ={
  secondary: 'button-secondary',
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
    {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button;
