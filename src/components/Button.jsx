import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--secondary"];
const SIZES = ["btn--medium", "btn--large"];
const Button = ({children,type,buttonStyle, buttonSize, onClick }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return( 
  <button className= {`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>
    {children}
    </button>);
};

export default Button;