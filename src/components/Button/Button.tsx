import React from "react";
import "./styles.css";

export interface ButtonProps {
  label: string;
  background?: string;
  colorLabel?: string;
  onClick: undefined;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="container"
      onClick={props.onClick}
      style={{ backgroundColor: props.background, color: props.colorLabel }}
    >
      <h2 className="label">{props.label}</h2>
    </button>
  );
};

export default Button;
