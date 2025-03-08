import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--secondary"];
const SIZES = ["btn--medium", "btn--large"];
const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  onClick,
  download,
  href
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
  // If this is a download button, render an <a> tag instead
  if (download && href) {
    return (
      <a 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        href={href}
        download={download}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render a standard button
  return (
    <button 
      className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
      type={type} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button