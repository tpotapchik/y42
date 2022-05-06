import "./Button.scss";

function Button(props) {
  const {buttonClass, handleClick, children, type} = props;
  return (
    <button type={type} className={`button ${buttonClass ? buttonClass : ""}`} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;
