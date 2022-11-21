import React from "react";
// import "./styles.css";

export interface ButtonProps {
  label: string;
  background: string;
  colorLabel: string;
  onClick?: void;
}

const Button = (props: {
  label: string;
  background: string;
  colorLabel: string;
}) => {
  return (
    <button
      className="container"
      onClick={() => console.log("hola")}
      style={{ backgroundColor: props.background, color: props.colorLabel }}
    >
      <h2 className="label" >{props.label}</h2>
    </button>
  );
};

export default Button;
